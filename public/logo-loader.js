(function () {
  function signalReady() {
    document.documentElement.style.overflow = "";
    document.body.dataset.proposalReady = "true";
    window.dispatchEvent(new CustomEvent("proposal:ready"));
  }

  function initCrispImageLoader() {
    const overlay = document.querySelector("[data-load-wrap]");
    if (!overlay) {
      signalReady();
      return;
    }

    if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.style.display = "none";
      signalReady();
      return;
    }

    const gsap = window.gsap;
    const duplicateTiles = Array.from(overlay.querySelectorAll(".crisp-loader__group.is--duplicate .crisp-loader__single"));
    const relativeTiles = Array.from(overlay.querySelectorAll(".crisp-loader__group.is--relative .crisp-loader__single"));
    const scaleDownImages = Array.from(overlay.querySelectorAll(".crisp-loader__cover-img.is--scale-down"));
    const selectedMedia = overlay.querySelector(".crisp-loader__media.is--scaling");
    const groups = overlay.querySelector(".crisp-loader__groups");
    const wrap = overlay.querySelector(".crisp-loader__wrap");

    if (!duplicateTiles.length || !relativeTiles.length || !selectedMedia || !groups || !wrap) {
      overlay.style.display = "none";
      signalReady();
      return;
    }

    document.documentElement.style.overflow = "hidden";
    overlay.classList.remove("is--hidden");

    const lockSelectedMedia = function () {
      const rect = selectedMedia.getBoundingClientRect();
      const tile = selectedMedia.parentElement;

      // Keep the strip layout stable, then move the expanding frame outside
      // its transformed parent so fixed positioning stays tied to the viewport.
      if (tile) {
        tile.style.width = rect.width + "px";
        tile.style.height = rect.height + "px";
      }
      groups.style.overflow = "visible";
      overlay.appendChild(selectedMedia);
      Object.assign(selectedMedia.style, {
        position: "fixed",
        left: rect.left + "px",
        top: rect.top + "px",
        width: rect.width + "px",
        height: rect.height + "px",
        margin: "0",
      });
    };

    gsap
      .timeline({ defaults: { ease: "expo.inOut" } })
      .fromTo(duplicateTiles, { xPercent: 520 }, { xPercent: -520, duration: 1.8, stagger: 0.055 }, 0)
      .fromTo(relativeTiles, { xPercent: 520 }, { xPercent: 0, duration: 1.65, stagger: 0.055 }, 0.32)
      .to(scaleDownImages, {
        scale: 0.52,
        duration: 0.75,
        stagger: { each: 0.045, from: "edges", ease: "none" },
      }, "-=0.18")
      .call(lockSelectedMedia)
      .addLabel("hero-expand")
      .to(wrap, { autoAlpha: 0, duration: 0.22, ease: "power1.out" }, "hero-expand")
      .to(selectedMedia, {
        left: 0,
        top: 0,
        width: "100vw",
        height: "100dvh",
        borderRadius: 0,
        duration: 1.25,
      }, "hero-expand")
      .to(overlay, { autoAlpha: 0, duration: 0.42, ease: "power1.inOut" }, ">-=0.05")
      .call(signalReady)
      .set(overlay, { display: "none" });
  }

  if (document.body.dataset.reactHydrated === "true") initCrispImageLoader();
  else window.addEventListener("proposal:hydrated", initCrispImageLoader, { once: true });
})();
