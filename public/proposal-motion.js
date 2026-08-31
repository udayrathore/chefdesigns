(function () {
  function initSectionAnchorDock() {
    if (!window.gsap || !window.ScrollTrigger) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canHover = window.matchMedia("(hover: hover)");

    document.querySelectorAll("[data-section-dock-init]").forEach((dock) => {
      const pill = dock.querySelector("[data-section-dock-pill]");
      const toggle = dock.querySelector("[data-section-dock-toggle]");
      const labelWrap = dock.querySelector("[data-section-dock-label-wrap]");
      const list = dock.querySelector("[data-section-dock-list]");
      const indicator = dock.querySelector("[data-section-dock-indicator]");
      const links = list ? Array.from(list.querySelectorAll("[data-section-dock-link]")) : [];
      const sections = links.map((link) => document.querySelector(link.getAttribute("href")));
      const labelTemplate = labelWrap ? labelWrap.firstElementChild : null;
      if (!pill || !toggle || !labelWrap || !labelTemplate || !list || !indicator || links.length < 2 || sections.some((section) => !section)) return;

      let activeIndex = Math.max(0, links.findIndex((link) => link.hasAttribute("data-active")));
      let open = false;
      let dockTl = null;
      const rect = { x: 0, y: 0, w: 0, h: 0 };
      const motion = "bouncy";
      const smooth = () => motion === "smooth" || reduceMotion.matches;
      const dur = (duration) => (reduceMotion.matches ? 0 : duration);
      const ease = (bouncy, calm) => (smooth() ? calm : bouncy);

      gsap.set(pill, { transformOrigin: "50% 100%" });

      function syncLinkState() {
        links.forEach((link, index) => {
          link.toggleAttribute("data-active", index === activeIndex);
          if (index === activeIndex) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }

      function buildLabel(index) {
        const span = labelTemplate.cloneNode(false);
        span.innerHTML = links[index].innerHTML;
        return span;
      }

      function setLabel(index) {
        labelWrap.textContent = "";
        labelWrap.appendChild(buildLabel(index));
        gsap.set(labelWrap, { width: "auto" });
      }

      function swapLabel(index, movingDown) {
        const oldLabels = Array.from(labelWrap.children);
        const startWidth = labelWrap.offsetWidth;
        gsap.killTweensOf(labelWrap);
        oldLabels.forEach((oldLabel) => {
          gsap.killTweensOf(oldLabel);
          gsap.set(oldLabel, { position: "absolute", top: 0, left: 0 });
          gsap.to(oldLabel, {
            yPercent: movingDown ? -120 : 120,
            autoAlpha: 0,
            duration: dur(0.35),
            ease: "power2.out",
            onComplete: () => oldLabel.remove(),
          });
        });

        const next = buildLabel(index);
        labelWrap.appendChild(next);
        gsap.set(labelWrap, { width: "auto" });
        const targetWidth = next.offsetWidth;
        gsap.fromTo(labelWrap, { width: startWidth }, { width: targetWidth, duration: dur(0.45), ease: ease("back.out(1.6)", "power3.out") });
        gsap.fromTo(next, { yPercent: movingDown ? 120 : -120, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: dur(0.45), ease: "power3.out" });

        if (!smooth()) {
          gsap.killTweensOf(pill, "scaleY");
          gsap.timeline().to(pill, { scaleY: 0.85, duration: 0.15, ease: "power2.out" }).to(pill, { scaleY: 1, duration: 0.45, ease: "back.out(2.5)" });
        }
      }

      function rectFor(link) {
        return { x: link.offsetLeft, y: link.offsetTop, w: link.offsetWidth, h: link.offsetHeight };
      }

      function render() {
        gsap.set(indicator, { x: rect.x, y: rect.y, width: rect.w, height: rect.h });
      }

      function placeIndicator(index) {
        Object.assign(rect, rectFor(links[index]));
        gsap.killTweensOf(rect);
        gsap.killTweensOf(indicator);
        gsap.set(indicator, { scaleX: 1, scaleY: 1 });
        render();
      }

      function hopIndicator(index) {
        const target = rectFor(links[index]);
        gsap.killTweensOf(rect);
        gsap.killTweensOf(indicator);
        if (smooth()) {
          gsap.set(indicator, { scaleX: 1, scaleY: 1 });
          gsap.to(rect, { x: target.x, y: target.y, w: target.w, h: target.h, duration: dur(0.35), ease: "power3.out", onUpdate: render });
          return;
        }
        const delta = target.y - rect.y;
        const sign = delta === 0 ? 1 : Math.sign(delta);
        const overshoot = gsap.utils.clamp(6, 12, Math.abs(delta) * 0.08) * sign;
        const apexY = gsap.utils.clamp(0, list.clientHeight - target.h, target.y + overshoot);
        gsap.set(indicator, { transformOrigin: "50% 50%" });
        gsap.timeline()
          .to(rect, { x: target.x, y: apexY, w: target.w, h: target.h, duration: 0.35, ease: "power3.out", onUpdate: render })
          .to(rect, { y: target.y, duration: 0.25, ease: "power2.inOut", onUpdate: render });
        gsap.timeline().to(indicator, { scaleX: 0.78, duration: 0.15, ease: "power2.out" }).to(indicator, { scaleY: 1, scaleX: 1, duration: 0.45, ease: "back.out(2.5)" });
      }

      function setActive(index, movingDown) {
        if (index === activeIndex) return;
        activeIndex = index;
        syncLinkState();
        if (open) {
          setLabel(index);
          hopIndicator(index);
        } else {
          swapLabel(index, movingDown);
          placeIndicator(index);
        }
      }

      function openDock() {
        if (open) return;
        open = true;
        toggle.setAttribute("aria-expanded", "true");
        placeIndicator(activeIndex);
        const fromW = pill.offsetWidth;
        const fromH = pill.offsetHeight;
        if (dockTl) dockTl.kill();
        gsap.set(list, { visibility: "inherit" });
        gsap.set(pill, { width: fromW, height: fromH });
        gsap.set(links[activeIndex], { yPercent: 0, opacity: 1 });
        dockTl = gsap.timeline()
          .to(pill, { width: list.offsetWidth, height: list.offsetHeight, duration: dur(0.45), ease: ease("back.out(1.4)", "power3.out") }, 0)
          .to(toggle, { autoAlpha: 0, duration: dur(0.15), ease: "power1.out" }, 0)
          .to(list, { opacity: 1, duration: dur(0.25), ease: "power1.out" }, dur(0.05))
          .fromTo(links.filter((link, index) => index !== activeIndex), { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: dur(0.25), ease: "power2.out", stagger: { each: dur(0.05), from: "end" } }, dur(0.05));
      }

      function closeDock() {
        if (!open) return;
        open = false;
        toggle.setAttribute("aria-expanded", "false");
        if (dockTl) dockTl.kill();
        dockTl = gsap.timeline({
          onComplete: () => {
            gsap.set(pill, { clearProps: "width,height" });
            gsap.set(list, { visibility: "hidden" });
            gsap.set(links, { yPercent: 0, opacity: 1 });
          },
        })
          .to(pill, { width: toggle.offsetWidth, height: toggle.offsetHeight, duration: dur(0.3), ease: "power3.out" }, 0)
          .to(list, { opacity: 0, duration: dur(0.15), ease: "power1.out" }, 0)
          .to(toggle, { autoAlpha: 1, duration: dur(0.25), ease: "power1.out" }, dur(0.1));
      }

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => { if (self.isActive) setActive(index, self.direction !== -1); },
        });
      });

      let isHidden = true;
      let hideTriggers = [];
      let rangeTrigger = null;
      gsap.set(dock, { yPercent: 40, autoAlpha: 0 });
      dock.toggleAttribute("data-hidden", true);

      function updateHidden() {
        const inRange = rangeTrigger ? rangeTrigger.isActive : true;
        const hidden = !inRange || hideTriggers.some((trigger) => trigger.isActive);
        if (hidden === isHidden) return;
        isHidden = hidden;
        if (hidden && open) closeDock();
        dock.toggleAttribute("data-hidden", hidden);
        gsap.to(dock, { yPercent: hidden ? 40 : 0, autoAlpha: hidden ? 0 : 1, duration: dur(0.3), ease: hidden ? "power2.out" : ease("back.out(1.4)", "power3.out") });
      }

      rangeTrigger = ScrollTrigger.create({ trigger: sections[0], endTrigger: sections[sections.length - 1], start: "top 45%", end: "bottom 45%", onToggle: updateHidden });
      hideTriggers = Array.from(document.querySelectorAll("[data-section-dock-hide]")).map((zone) => {
        const offset = parseFloat(zone.getAttribute("data-section-dock-hide"));
        const line = 100 - gsap.utils.clamp(0, 100, Number.isNaN(offset) ? 10 : offset);
        return ScrollTrigger.create({ trigger: zone, start: "top " + line + "%", end: "bottom top", onToggle: updateHidden });
      });

      links.forEach((link) => link.addEventListener("click", closeDock));
      toggle.addEventListener("click", () => {
        if (open) closeDock();
        else {
          openDock();
          links[activeIndex].focus();
        }
      });
      if (canHover.matches) {
        dock.addEventListener("mouseenter", openDock);
        dock.addEventListener("mouseleave", closeDock);
      }
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && open) {
          closeDock();
          gsap.delayedCall(0.15, () => toggle.focus());
        }
      });
      document.addEventListener("click", (event) => { if (open && !dock.contains(event.target)) closeDock(); });
      dock.addEventListener("focusout", (event) => { if (open && !dock.contains(event.relatedTarget)) closeDock(); });

      function refreshLayout() {
        setLabel(activeIndex);
        placeIndicator(activeIndex);
        if (open) gsap.set(pill, { width: list.offsetWidth, height: list.offsetHeight });
      }
      window.addEventListener("resize", refreshLayout);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshLayout);
      syncLinkState();
      refreshLayout();
    });
  }

  function initStepByStepTimeline() {
    if (!window.gsap || !window.ScrollTrigger) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector("[data-step-timeline-init]");
    if (!root) return;
    const line = root.querySelector("[data-step-timeline-line]");
    const fill = root.querySelector("[data-step-timeline-fill]");
    const items = Array.from(root.querySelectorAll("[data-step-timeline-item]"));
    if (!line || !fill || !items.length) return;
    const anchors = items.map((item) => item.querySelector("[data-step-timeline-marker]") || item);
    const activationInput = parseFloat(root.dataset.stepTimelineActivation);
    const activation = Number.isNaN(activationInput) ? 0.5 : Math.min(Math.max(activationInput, 0), 1);
    const activationPercent = activation * 100;
    const lastIndex = items.length - 1;
    let anchorFractions = [0];

    function measureLine() {
      if (items.length < 2) {
        line.style.height = "0px";
        anchorFractions = [0];
        return;
      }
      const base = line.parentElement.getBoundingClientRect().top;
      const centers = anchors.map((anchor) => {
        const box = anchor.getBoundingClientRect();
        return box.top + box.height / 2 - base;
      });
      const firstCenter = centers[0];
      const span = centers[lastIndex] - firstCenter;
      line.style.top = firstCenter + "px";
      line.style.height = span + "px";
      anchorFractions = centers.map((center) => (span > 0 ? (center - firstCenter) / span : 0));
    }

    let currentIndex = -2;
    function setCurrentIndex(index) {
      if (index === currentIndex) return;
      currentIndex = index;
      items.forEach((item, itemIndex) => {
        const status = index >= 0 && itemIndex <= index ? "active" : "inactive";
        if (item.getAttribute("data-status") !== status) item.setAttribute("data-status", status);
        item.toggleAttribute("data-current", itemIndex === index);
        item.toggleAttribute("data-previous", itemIndex === index - 1);
        item.toggleAttribute("data-next", itemIndex === index + 1);
      });
    }

    function indexForProgress(reached, progress) {
      if (!reached) return -1;
      let index = 0;
      for (let itemIndex = 0; itemIndex < anchorFractions.length; itemIndex += 1) {
        if (progress + 0.0001 >= anchorFractions[itemIndex]) index = itemIndex;
      }
      return index;
    }

    function updateFromScroll(self) {
      const reached = self.isActive || self.progress >= 1;
      setCurrentIndex(indexForProgress(reached, self.progress));
    }

    setCurrentIndex(-1);
    gsap.set(fill, { transformOrigin: "top", scaleY: 0 });
    const mediaQueries = gsap.matchMedia();
    mediaQueries.add("(prefers-reduced-motion: no-preference)", () => {
      measureLine();
      ScrollTrigger.addEventListener("refreshInit", measureLine);
      if (items.length > 1) {
        gsap.fromTo(fill, { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top " + activationPercent + "%",
            end: "bottom " + activationPercent + "%",
            scrub: true,
            onUpdate: updateFromScroll,
            onToggle: updateFromScroll,
            onRefresh: updateFromScroll,
          },
        });
      } else setCurrentIndex(0);
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
      ScrollTrigger.refresh();
      return () => {
        window.removeEventListener("load", refresh);
        ScrollTrigger.removeEventListener("refreshInit", measureLine);
      };
    });
    mediaQueries.add("(prefers-reduced-motion: reduce)", () => {
      measureLine();
      gsap.set(fill, { scaleY: 1 });
      setCurrentIndex(lastIndex);
    });
  }

  function initPageEntranceMotion() {
    if (!window.gsap || !window.ScrollTrigger || !window.SplitText) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const SplitText = window.SplitText;
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const heroHeading = document.querySelector("[data-hero-heading]");

    if (heroHeading && !reduceMotion.matches) {
      const heroSplit = new SplitText(heroHeading, { type: "words,chars", mask: "chars", wordsClass: "hero-heading__word", charsClass: "hero-heading__char" });
      gsap.set(heroSplit.chars, { yPercent: 118, autoAlpha: 0 });

      const revealHero = () => {
        gsap.to(heroSplit.chars, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          ease: "power3.out",
          stagger: { each: 0.018 },
        });
      };

      if (document.body.dataset.proposalReady === "true") revealHero();
      else window.addEventListener("proposal:ready", revealHero, { once: true });
    }

    const revealTargets = Array.from(document.querySelectorAll([
      ".section > .section-index",
      ".section > .section-content",
      ".section > .founders-note",
      ".section > .timeline-summary",
      ".section > .parallel-timeline",
      ".stage-list .stage",
      ".scope-list .scope-item",
      ".system-overview",
      ".boundary-list li",
      ".technical-list li",
      ".milestone-table .table-row",
      ".support-list li",
      ".terms-list details",
      ".outro-top",
      ".outro-meta",
    ].join(",")));

    if (!reduceMotion.matches) {
      revealTargets.forEach((target) => {
        gsap.fromTo(target, { y: 34, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 91%",
            once: true,
          },
        });
      });
    }

    const footerLetters = Array.from(document.querySelectorAll("[data-artworksit-word] > span"));
    if (footerLetters.length && !reduceMotion.matches) {
      gsap.fromTo(footerLetters, { yPercent: 55, scaleY: 0.08, autoAlpha: 0, transformOrigin: "50% 100%" }, {
        yPercent: 0,
        scaleY: 1,
        autoAlpha: 1,
        duration: 1.25,
        ease: "expo.out",
        stagger: { each: 0.065 },
        scrollTrigger: {
          trigger: "[data-artworksit-word]",
          start: "top bottom",
          once: true,
        },
      });
    }
  }

  function initProposalMotion() {
    initSectionAnchorDock();
    initStepByStepTimeline();
    initPageEntranceMotion();
  }

  if (document.body.dataset.reactHydrated === "true") initProposalMotion();
  else window.addEventListener("proposal:hydrated", initProposalMotion, { once: true });
})();
