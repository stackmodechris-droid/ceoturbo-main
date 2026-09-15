"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SERVICES, SITE, type ServiceKey } from "@/lib/site";

const SERVICE_OPTIONS: { key: ServiceKey; label: string; note: string }[] = [
  { key: "phone-repair", label: "Phone Repair", note: "iPhone and Android screen, battery, charging port, and camera repair." },
  { key: "tablet-repair", label: "Tablet Repair", note: "iPad and Android tablet cracked screen, battery, and port repairs." },
  { key: "laptop-repair", label: "Laptop Repair", note: "Screen replacements, battery swaps, keyboard, and SSD upgrades for all brands." },
  { key: "desktop-repair", label: "Desktop Repair", note: "Tower and all-in-one diagnostics, power supply, GPU, and motherboard repair." },
  { key: "pc-repair", label: "PC Repair", note: "Virus removal, OS reinstalls, hardware upgrades, and performance tune-ups." },
];

const TIMELINES = ["As soon as possible", "Within the next week", "I am planning ahead"];
const ASSETS = [
  "My device is physically damaged (screen, port, battery)",
  "My device has software issues (slow, virus, won't boot)",
  "I need an upgrade (more storage, RAM, SSD)",
  "I had liquid damage",
  "I need data recovery",
];

export function LeadIntake() {
  const intakeRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<ServiceKey[]>([]);
  const [timeline, setTimeline] = useState("");
  const [assets, setAssets] = useState<string[]>([]);

  const complete = step === 3;
  const canContinue = step === 0 ? services.length > 0 : step === 1 ? Boolean(timeline) : assets.length > 0;
  const selectedOffers = useMemo(() => services.map((key) => SERVICES[key]), [services]);

  useEffect(() => {
    if (step === 0) return;
    const timer = window.setTimeout(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      intakeRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      intakeRef.current?.querySelector<HTMLElement>(step === 3 ? ".lead-result" : ".lead-question")?.focus({ preventScroll: true });
    }, 260);
    return () => window.clearTimeout(timer);
  }, [step]);

  const toggleService = (key: ServiceKey) => {
    setServices((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
  };

  const toggleAsset = (asset: string) => {
    setAssets((current) => current.includes(asset) ? current.filter((item) => item !== asset) : [...current, asset]);
  };

  const reset = () => {
    setStep(0);
    setServices([]);
    setTimeline("");
    setAssets([]);
  };

  return (
    <div className="lead-intake" ref={intakeRef}>
      <div className="lead-progress" role="progressbar" aria-label="Intake progress" aria-valuemin={1} aria-valuemax={3} aria-valuenow={Math.min(step + 1, 3)}>
        {[0, 1, 2].map((index) => (
          <span key={index} className={index <= step ? "is-complete" : ""} />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!complete ? (
          <motion.form
            key={step}
            className="lead-question"
            tabIndex={-1}
            initial={{ x: 22 }}
            animate={{ x: 0 }}
            exit={{ x: -22 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(event) => {
              event.preventDefault();
              if (canContinue) setStep((current) => current + 1);
            }}
          >
            <div className="lead-question-head">
              <span>Question {step + 1} of 3</span>
              <strong>{step === 0 ? "Choose all that apply" : "Choose the closest answer"}</strong>
            </div>

            {step === 0 && (
              <fieldset>
                <legend>What device needs repair?</legend>
                <p>Select more than one if you have multiple devices.</p>
                <div className="lead-options">
                  {SERVICE_OPTIONS.map((option) => {
                    const checked = services.includes(option.key);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option.key}>
                        <input type="checkbox" checked={checked} onChange={() => toggleService(option.key)} suppressHydrationWarning />
                        <span className="lead-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option.label}</strong><small>{option.note}</small></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend>How soon do you need it fixed?</legend>
                <p>This helps us prepare for your call or visit.</p>
                <div className="lead-options lead-options--single">
                  {TIMELINES.map((option) => (
                    <label className={timeline === option ? "is-selected" : ""} key={option}>
                      <input type="radio" name="timeline" value={option} checked={timeline === option} onChange={() => setTimeline(option)} suppressHydrationWarning />
                      <span className="lead-radio" aria-hidden="true"><i /></span>
                      <span><strong>{option}</strong></span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend>What is wrong with the device?</legend>
                <p>Select every issue that describes the problem.</p>
                <div className="lead-options">
                  {ASSETS.map((option) => {
                    const checked = assets.includes(option);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option}>
                        <input type="checkbox" checked={checked} onChange={() => toggleAsset(option)} suppressHydrationWarning />
                        <span className="lead-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option}</strong></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            <div className="lead-form-footer">
              {step > 0 ? <button className="lead-back" type="button" onClick={() => setStep((current) => current - 1)}>Back</button> : <span />}
              <button className="lead-next" type="submit" disabled={!canContinue}>
                {step === 2 ? "See my repair options" : "Continue"}<span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div className="lead-result" key="result" tabIndex={-1} initial={{ y: 22 }} animate={{ y: 0 }}>
            <span className="lead-result-mark" aria-hidden="true">✓</span>
            <p className="lead-result-label">Your repair summary is ready</p>
            <h2>Ready to get your device fixed?</h2>
            <p>You selected {services.length} {services.length === 1 ? "repair service" : "repair services"} and need it done {timeline.toLowerCase()}. Call us or book a drop-off — we will confirm timeline, cost, and turnaround.</p>

            <div className="lead-summary" aria-label="Selected ElectronicReboot repair services">
              {selectedOffers.map((offer) => (
                <div key={offer.key}>
                  <span><strong>{offer.name}</strong><small>{offer.summary}</small></span>
                  <b>{offer.price}<small>{offer.cadence}</small></b>
                </div>
              ))}
            </div>

            <div className="lead-result-actions">
              <a href={SITE.phoneHref}>Call {SITE.phoneDisplay} <span aria-hidden="true">→</span></a>
              <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book a drop-off call</a>
            </div>
            <p className="lead-privacy">Your selections stay in this browser and are not submitted or stored.</p>
            <button className="lead-reset" type="button" onClick={reset}>Change my answers</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
