export const SITE = {
  name: "ElectronicReboot",
  legalName: "Electronic Reboot",
  url: "https://electronicreboot.com",
  phoneDisplay: "678-558-4327",
  phoneHref: "tel:+16785584327",
  bookingUrl: "https://calendly.com/electronic-reboot/book-your-tech-repair-or-digital-growth-consultation",
  founder: "Christopher Robinson",
  founderAlias: "StackmodeChris",
  description:
    "ElectronicReboot provides fast, affordable tech repair — phones, tablets, laptops, desktops, Windows PCs — plus website development and Meta ads. Serving Atlanta, Stone Mountain, Duluth, Lawrenceville, Gwinnett County, Athens, Decatur, Norcross, Tucker, Lilburn, Snellville, Suwanee, Johns Creek, Buford & surrounding Georgia cities. Mobile service expanding to Florida & North Carolina.",
  updated: "2026-09-15"
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/phone-repair", label: "Phone Repair" },
  { href: "/tablet-repair", label: "Tablet Repair" },
  { href: "/laptop-repair", label: "Laptop Repair" },
  { href: "/desktop-repair", label: "Desktop Repair" },
  { href: "/pc-repair", label: "PC Repair" },
  { href: "/websites", label: "Websites" },
  { href: "/meta-ads", label: "Meta Ads" },
] as const;

export type ServiceKey =
  | "pc-repair"
  | "desktop-repair"
  | "laptop-repair"
  | "tablet-repair"
  | "phone-repair";

export type ServiceOffer = {
  key: ServiceKey;
  name: string;
  navLabel: string;
  eyebrow: string;
  price: string;
  priceValue: number;
  cadence: string;
  summary: string;
  answer: string;
  idealFor: string[];
  includes: string[];
  exclusions: string[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: Record<ServiceKey, ServiceOffer> = {
  "pc-repair": {
    key: "pc-repair",
    name: "PC Repair",
    navLabel: "PC Repair",
    eyebrow: "Windows & custom PC",
    price: "Starting at $35",
    priceValue: 35,
    cadence: "flat diagnostic fee — credited toward repair",
    summary:
      "Fast, honest PC repair — virus removal, hardware replacements, OS reinstalls, and performance tune-ups for Windows PCs of all makes.",
    answer:
      "ElectronicReboot diagnoses and repairs Windows PCs including virus and malware removal, hard drive and SSD replacements, RAM upgrades, power-supply swaps, motherboard testing, OS reinstalls, and full performance optimizations. Most repairs are completed same-day or next-day. The $49 diagnostic fee is applied toward any approved repair.",
    idealFor: [
      "PCs running slow, crashing, or failing to boot",
      "Windows computers infected with viruses or malware",
      "Machines that need hardware upgrades or replacements",
      "Business owners who need a fast turnaround",
    ],
    includes: [
      "Full hardware and software diagnostic",
      "Virus and malware removal",
      "OS reinstall and driver setup",
      "Hard drive, SSD, and RAM replacement",
      "Power supply and cooling system repair",
      "Post-repair performance test",
      "90-day labor warranty",
    ],
    exclusions: [
      "Physical damage from liquid or severe impact (quoted separately)",
      "Data recovery on mechanically failed drives (quoted separately)",
      "Parts cost on replacement hardware",
    ],
    process: [
      { title: "Diagnose first", body: "We run a full hardware and software diagnostic before quoting. No surprise charges." },
      { title: "Approve the quote", body: "You receive a clear written quote with parts and labor broken out before we touch anything." },
      { title: "Fast turnaround", body: "Most PC repairs are completed same-day or next-day. We test everything before handoff." },
    ],
    faqs: [
      { question: "How long does a PC repair take?", answer: "Most software repairs, virus removals, and OS reinstalls are completed same-day. Hardware repairs that require parts are typically done next-day once parts arrive." },
      { question: "Is the $49 diagnostic fee charged even if I don't proceed?", answer: "Yes. The diagnostic fee covers the time to fully test the system. If you approve the repair, that $49 is applied toward the total labor cost." },
      { question: "Can you recover data from a failing PC?", answer: "In many cases yes. Software-level data recovery is included in the diagnostic. Mechanically failed drives require specialized equipment and are quoted separately." },
      { question: "Do you repair all PC brands?", answer: "Yes. We repair HP, Dell, Lenovo, Acer, Asus, custom builds, and any other Windows PC." },
    ],
  },
  "desktop-repair": {
    key: "desktop-repair",
    name: "Desktop Computer Repair",
    navLabel: "Desktop Repair",
    eyebrow: "All-in-one & tower desktops",
    price: "Starting at $35",
    priceValue: 35,
    cadence: "flat diagnostic fee — credited toward repair",
    summary:
      "Expert desktop repair for towers, all-in-ones, and workstations — from display issues and power failures to full component replacements.",
    answer:
      "ElectronicReboot repairs desktop computers including towers, all-in-ones, and workstations. We handle display and GPU issues, power supply failures, motherboard replacements, storage upgrades, cooling system repairs, and complete OS reinstalls for Windows and macOS systems. The $49 diagnostic fee covers a thorough component-level test and is credited toward your repair.",
    idealFor: [
      "Desktops that won't power on or shut off unexpectedly",
      "All-in-one screens with display issues",
      "Workstations needing GPU or RAM upgrades",
      "Home and office computers with any hardware or software fault",
    ],
    includes: [
      "Component-level hardware diagnostic",
      "Display, GPU, and graphics card testing",
      "Power supply replacement",
      "Motherboard repair or swap",
      "Storage and memory upgrades",
      "OS reinstall and configuration",
      "90-day labor warranty",
    ],
    exclusions: [
      "Parts cost on replacement components",
      "Catastrophic physical damage (quoted separately)",
      "Liquid damage repair (quoted separately)",
    ],
    process: [
      { title: "Drop off or ship in", body: "Bring your desktop in or contact us about our mail-in repair option for out-of-area customers." },
      { title: "Component-level diagnosis", body: "We test each component individually to find the exact failure point before we quote any work." },
      { title: "Repair and verify", body: "Every repair is stress-tested before the machine is returned to ensure stable, long-term performance." },
    ],
    faqs: [
      { question: "Do you repair all-in-one computers like iMacs?", answer: "Yes. We repair all-in-one desktops from Apple, HP, Lenovo, Dell, and others including display repairs on integrated screens." },
      { question: "Can you upgrade my desktop instead of repairing it?", answer: "Absolutely. RAM, SSD, and GPU upgrades are some of our most popular services. We'll advise on which upgrades give the most performance per dollar." },
      { question: "How long does a desktop repair take?", answer: "Most repairs are completed in 1–2 business days. Complex motherboard or GPU repairs may take 2–3 days depending on parts availability." },
      { question: "Do you fix desktops that won't turn on?", answer: "Yes. A no-power situation is one of the most common desktop repairs. It's often a failed power supply or a blown capacitor — both of which we handle." },
    ],
  },
  "laptop-repair": {
    key: "laptop-repair",
    name: "Laptop Repair",
    navLabel: "Laptop Repair",
    eyebrow: "All laptop brands",
    price: "Starting at $35",
    priceValue: 35,
    cadence: "flat diagnostic fee — credited toward repair",
    summary:
      "Screen replacements, keyboard repairs, battery swaps, charging port fixes, and full software repairs for laptops of all brands.",
    answer:
      "ElectronicReboot repairs laptops from all major brands including Apple MacBook, Dell, HP, Lenovo, Asus, Acer, and Microsoft Surface. We handle cracked screen replacements, battery replacements, keyboard and trackpad repairs, charging port fixes, liquid damage assessment, RAM and SSD upgrades, and complete OS reinstalls. Most laptop repairs are completed same-day.",
    idealFor: [
      "Laptops with cracked, flickering, or black screens",
      "Machines with dead batteries or broken charging ports",
      "Laptops running slow that need SSD or RAM upgrades",
      "Keyboards with broken or missing keys",
    ],
    includes: [
      "Full hardware diagnostic",
      "Screen and display replacement",
      "Battery replacement",
      "Charging port repair",
      "Keyboard and trackpad replacement",
      "SSD and RAM upgrades",
      "OS reinstall and driver configuration",
      "90-day labor warranty",
    ],
    exclusions: [
      "Parts cost on replacement screens, batteries, and keyboards",
      "Severe liquid damage requiring motherboard reballing (quoted separately)",
      "Physical frame damage (quoted separately)",
    ],
    process: [
      { title: "Free visual inspection", body: "We inspect the laptop in person and confirm the failure before charging the diagnostic fee." },
      { title: "Written quote before work", body: "You receive a line-item quote — parts and labor separated — before any repair begins." },
      { title: "Same-day in most cases", body: "Screen swaps, battery replacements, and software repairs are usually done the same day you bring it in." },
    ],
    faqs: [
      { question: "Can you fix a laptop with a cracked screen?", answer: "Yes. Screen replacement is one of our most common repairs. We stock screens for many popular laptop models and can usually complete the swap same-day." },
      { question: "My laptop got wet. What should I do?", answer: "Power it off immediately, do not charge it, and bring it in as soon as possible. The sooner we assess liquid damage, the better the recovery outcome." },
      { question: "Do you repair MacBooks?", answer: "Yes. We repair MacBook Air and MacBook Pro including screen replacements, battery swaps, keyboard repairs, and macOS reinstalls." },
      { question: "Is it worth repairing an old laptop?", answer: "It depends on the repair cost versus the replacement value. We'll give you an honest assessment — if the repair doesn't make financial sense, we'll tell you." },
    ],
  },
  "tablet-repair": {
    key: "tablet-repair",
    name: "Tablet Repair",
    navLabel: "Tablet Repair",
    eyebrow: "iPad & Android tablets",
    price: "Starting at $29",
    priceValue: 29,
    cadence: "flat diagnostic fee — credited toward repair",
    summary:
      "Cracked screen, battery, charging port, and software repairs for iPads, Samsung Galaxy Tabs, and all major Android tablets.",
    answer:
      "ElectronicReboot repairs iPads, Samsung Galaxy Tabs, Amazon Fire tablets, and other Android tablets. Our services include cracked screen and digitizer replacements, battery replacements, charging port repairs, home button and camera repairs, and factory resets with data backup. Most tablet screen repairs are completed same-day.",
    idealFor: [
      "Tablets with cracked or unresponsive touchscreens",
      "iPads or Galaxy Tabs that won't charge",
      "Tablets with dead batteries that no longer hold a charge",
      "Devices stuck in boot loops or locked out by passwords",
    ],
    includes: [
      "Screen and digitizer replacement",
      "Battery replacement",
      "Charging port repair",
      "Camera and button repair",
      "Factory reset with data backup attempt",
      "Software troubleshooting",
      "90-day labor warranty",
    ],
    exclusions: [
      "Parts cost on screens and batteries",
      "Severe frame or chassis damage (quoted separately)",
      "Guaranteed data recovery (best-effort basis)",
    ],
    process: [
      { title: "Assess the damage", body: "We inspect the tablet and confirm which components need repair before charging anything." },
      { title: "Same-day screen repairs", body: "Most cracked screen replacements are done the same day. We use quality replacement parts and test touch accuracy after every install." },
      { title: "Full function check", body: "Before returning the tablet we test the screen, cameras, charging, audio, and all buttons." },
    ],
    faqs: [
      { question: "Can you fix a cracked iPad screen?", answer: "Yes. We repair iPad screens for most models including iPad Mini, iPad Air, iPad Pro, and standard iPad. Bring it in for a same-day quote." },
      { question: "Do you fix Samsung tablets?", answer: "Yes. We repair Samsung Galaxy Tab S, Tab A, and other Galaxy Tab models including cracked screens, batteries, and charging ports." },
      { question: "My tablet won't turn on. Can you fix it?", answer: "Often yes. A tablet that won't power on is commonly caused by a depleted battery, a failed charging port, or a software issue — all of which we regularly repair." },
      { question: "Can you save my data before a factory reset?", answer: "We attempt data backup before any reset. Success depends on the device's condition and whether the screen is functional enough to authorize the backup." },
    ],
  },
  "phone-repair": {
    key: "phone-repair",
    name: "Phone Repair",
    navLabel: "Phone Repair",
    eyebrow: "iPhone & Android",
    price: "Starting at $29",
    priceValue: 29,
    cadence: "flat diagnostic fee — credited toward repair",
    summary:
      "Fast iPhone and Samsung phone repairs — cracked screens, battery replacements, charging ports, cameras, and water damage assessments.",
    answer:
      "ElectronicReboot repairs iPhones and Android phones including Samsung Galaxy, Google Pixel, OnePlus, and more. We replace cracked screens and LCDs, swap batteries, fix charging ports and speakers, repair cameras, and assess water damage. Most phone screen repairs are completed in under an hour.",
    idealFor: [
      "Phones with cracked, shattered, or unresponsive screens",
      "iPhones or Android phones with battery drain problems",
      "Phones with broken charging ports or dead speakers",
      "Devices dropped in water or exposed to liquid",
    ],
    includes: [
      "Screen and LCD replacement",
      "Battery replacement",
      "Charging port repair",
      "Front and rear camera repair",
      "Speaker and microphone repair",
      "Water damage assessment and cleaning",
      "90-day labor warranty",
    ],
    exclusions: [
      "Parts cost on screens and batteries",
      "Motherboard-level microsoldering (quoted separately)",
      "Guaranteed data recovery on severely damaged devices",
    ],
    process: [
      { title: "Walk in, no appointment needed", body: "Bring your phone in anytime during business hours. We'll assess it and give you a quote within minutes." },
      { title: "Repairs done in under an hour", body: "Most screen replacements and battery swaps are completed in 30–60 minutes while you wait." },
      { title: "Test before you leave", body: "We verify touch sensitivity, Face ID or fingerprint, cameras, and all hardware before handing it back." },
    ],
    faqs: [
      { question: "How fast is a phone screen replacement?", answer: "Most iPhone and Samsung screen replacements take 30–60 minutes. We'll give you a time estimate when you drop off." },
      { question: "Will fixing my screen affect Face ID or fingerprint?", answer: "When OEM or certified parts are used, Face ID and Touch ID typically work normally after repair. We'll confirm part compatibility before replacing your screen." },
      { question: "Can you fix a water-damaged phone?", answer: "Many water-damaged phones are recoverable. Power it off, do not charge it, and bring it in immediately. Early assessment significantly improves recovery chances." },
      { question: "Do you repair Samsung Galaxy phones?", answer: "Yes. We repair the full Samsung Galaxy lineup including S-series, A-series, and Note devices." },
    ],
  },
};

export const SERVICE_ORDER: ServiceKey[] = [
  "phone-repair",
  "tablet-repair",
  "laptop-repair",
  "desktop-repair",
  "pc-repair",
];
