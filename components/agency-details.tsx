"use client";

import { useState } from "react";
import { Check, Copy, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const details = [
  ["Account Holder", "ARTWORKSIT"],
  ["GST", "29AUEPD0994N2Z4"],
  ["Account Number", "50200047662439"],
  ["IFSC", "HDFC0004033"],
  ["Branch", "UTTARAHALLI"],
  ["Account Type", "CURRENT"],
  ["MMID", "9240873"],
  ["Swift Code", "HDFCINBB"],
  ["IEC Code", "AUEPD0994N"],
] as const;

const copyText = details.map(([label, value]) => `${label}: ${value}`).join("\n");

export function AgencyDetails() {
  const [copied, setCopied] = useState(false);

  async function copyDetails() {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <Dialog>
      <DialogTrigger className="agency-details-trigger">Details</DialogTrigger>
      <DialogContent className="agency-details-dialog" showCloseButton={false}>
        <DialogHeader className="agency-details-header">
          <div>
            <DialogDescription>Bank &amp; business details</DialogDescription>
            <DialogTitle>ArtWorksIT</DialogTitle>
          </div>
          <DialogClose className="agency-details-close" aria-label="Close details">
            <X aria-hidden="true" />
          </DialogClose>
        </DialogHeader>
        <dl className="agency-details-list">
          {details.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <button className="agency-details-copy" type="button" onClick={copyDetails}>
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          <span>{copied ? "Copied to clipboard" : "Copy all details"}</span>
        </button>
      </DialogContent>
    </Dialog>
  );
}
