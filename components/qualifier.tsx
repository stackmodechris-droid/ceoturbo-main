"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SITE, SERVICES, type ServiceKey } from "@/lib/site";

const serviceOptions = Object.values(SERVICES).map((service) => ({
  key: service.key,
  label: service.navLabel,
  note: service.summary,
}));

const urgencyOptions = ["It's urgent — as soon as possible", "Within the next week", "No rush — I'm planning ahead"];
const problemOptions = [
  "Physical damage (cracked screen, broken port)",
  "Battery draining too fast or not charging",
  "Software issues (slow, virus, won't boot)",
  "Water or liquid damage",
  "I need an upgrade (storage, RAM, SSD)",
];

export function Qualifier() {
  const qualifierRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<ServiceKey[]>([]);
  const [urgency, setUrgency] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const complete = step === 3;
  const selectedOffers = useMemo(() => services.map((key) => SERVICES[key]), [services]);
  const canContinue = step === 0 ? services.length > 0 : step === 1 ? Boolean(urgency) : problems.length > 0;

  useEffect(() => {
    if (step === 0) return;
    const timer = window.setTimeout(() => {
      qualifierRef.current?.querySelector<HTMLElement>(complete ? ".qualifier-result" : ".qualifier-question")?.focus({ preventScroll: true });
    }, reduced ? 0 : 210);
    return () => window.clearTimeout(timer);
  }, [complete, reduced, step]);

  const toggleService = (service: ServiceKey) => {
    setServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  };

  const toggleProblem = (problem: string) => {
    setProblems((current) => current.includes(problem) ? current.filter((item) => item !== problem) : [...current, problem]);
  };

  const reset = () => {
    setStep(0);
    setServices([]);
    setUrgency("");
    setProblems([]);
  };

  return (
    <div className="qualifier" id="qualifier" ref={qualifierRef}>
      <div className="qualifier-progress" role="progressbar" aria-label="Repair finder progress" aria-valuemin={1} aria-valuemax={3} aria-valuenow={Math.min(step + 1, 3)}>
        {[0, 1, 2].map((index) => <span key={index} className={index <= step ? "is-complete" : ""} />)}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!complete ? (
          <motion.div
            className="qualifier-question"
            key={step}
            tabIndex={-1}
            initial={reduced ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -16 }}
            transition={{ duration: reduced ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="qualifier-question-head">
              <span>Step {step + 1} of 3</span>
              <strong>{step === 1 ? "Choose the closest answer" : "Choose all that apply"}</strong>
            </div>

            {step === 0 && (
              <fieldset>
                <legend>What device needs repair?</legend>
                <p>Select every type. We will identify the right service on the call.</p>
                <div className="qualifier-options">
                  {serviceOptions.map((option) => {
                    const checked = services.includes(option.key);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option.key}>
                        <input type="checkbox" checked={checked} onChange={() => toggleService(option.key)} />
                        <span className="qualifier-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option.label}</strong><small>{option.note}</small></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend>How urgently do you need the repair?</legend>
                <p>This helps us prepare the fastest path for your visit.</p>
                <div className="qualifier-options qualifier-options--single">
                  {urgencyOptions.map((option) => (
                    <label className={urgency === option ? "is-selected" : ""} key={option}>
                      <input type="radio" name="urgency" value={option} checked={urgency === option} onChange={() => setUrgency(option)} />
                      <span className="qualifier-radio" aria-hidden="true"><i /></span>
                      <span><strong>{option}</strong></span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend>What is wrong with the device?</legend>
                <p>Select every issue that applies so we can prepare for your repair.</p>
                <div className="qualifier-options">
                  {problemOptions.map((option) => {
                    const checked = problems.includes(option);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option}>
                        <input type="checkbox" checked={checked} onChange={() => toggleProblem(option)} />
                        <span className="qualifier-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option}</strong></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            <div className="qualifier-actions qualifier-actions--footer">
              {step > 0 ? <button type="button" className="qualifier-back" onClick={() => setStep((current) => current - 1)}>Back</button> : <span />}
              <button type="button" className="qualifier-next" disabled={!canContinue} onClick={() => canContinue && setStep((current) => current + 1)}>
                {step === 2 ? "See recommended repairs" : "Continue"}<span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="qualifier-result"
            key="result"
            tabIndex={-1}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <small>Your repair recommendation</small>
            <h3>Here is what we suggest.</h3>
            <p>You selected {services.length} {services.length === 1 ? "repair type" : "repair types"}. Call us or walk in — we will confirm the exact issue, quote, and turnaround.</p>
            <div className="qualifier-summary" aria-label="Recommended ElectronicReboot repairs">
              {selectedOffers.map((offer) => (
                <div key={offer.key}>
                  <span><strong>{offer.name}</strong><small>{offer.summary}</small></span>
                  <b>{offer.price}<small>{offer.cadence}</small></b>
                </div>
              ))}
            </div>
            <div className="qualifier-result-actions">
              <a className="button button--coral" href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
              <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book a drop-off call</a>
            </div>
            <p className="microcopy">Your answers stay in this browser and are not submitted or stored.</p>
            <button type="button" className="qualifier-reset" onClick={reset}>Change my answers</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
