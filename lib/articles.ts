export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: ArticleTable;
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  published: string;
  modified: string;
  readingTime: string;
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
};

export const articles: InsightArticle[] = [
  {
    slug: "why-is-my-computer-running-slow",
    title: "Why Is My Computer Running Slow? Common Causes and Real Fixes",
    description:
      "A plain-language guide to diagnosing a slow PC or laptop — from full storage and malware to failing hardware — and when to call a repair shop.",
    answer:
      "A slow computer is almost always caused by one of a handful of fixable problems: too little free storage, too many startup programs, malware, outdated drivers, overheating, or aging hardware that needs an upgrade. Most slowdowns can be resolved without replacing the machine. The right fix depends on which bottleneck is actually limiting performance.",
    published: "2026-09-15",
    modified: "2026-09-15",
    readingTime: "9 min read",
    sections: [
      {
        heading: "What actually makes a computer run slowly?",
        paragraphs: [
          "A PC feels slow when the processor, memory, or storage can't keep up with what you're asking it to do. The cause is usually one of six things: a nearly full hard drive, too many programs loading at startup, a malware or virus infection, a driver or Windows update problem, a hardware component that is overheating, or a storage drive that is beginning to fail.",
          "Before spending money on a new computer, it's worth spending 30 minutes ruling out each cause. A $60 SSD upgrade can make a five-year-old machine feel new again. A virus removal that takes an hour can bring back full performance at no hardware cost.",
        ],
        table: {
          headers: ["Symptom", "Most likely cause", "Typical fix"],
          rows: [
            ["Slow to boot, fast once running", "Too many startup programs", "Disable unnecessary startup items in Task Manager"],
            ["Slow all the time, especially opening files", "Full or failing hard drive", "Free up storage or replace with SSD"],
            ["Browser and programs freeze randomly", "Malware or adware", "Full virus scan and malware removal"],
            ["Gets hot, fan runs constantly", "Overheating / dust buildup", "Clean vents, replace thermal paste"],
            ["Crashes or blue screens", "RAM fault or failing drive", "Hardware diagnostic and replacement"],
            ["Slow after a Windows update", "Driver conflict or update bug", "Roll back driver or clean update install"],
          ],
        },
      },
      {
        heading: "How does a full hard drive slow down a PC?",
        paragraphs: [
          "Windows uses free disk space as virtual memory — a temporary workspace when RAM is full. When a drive is more than 85–90% full, the operating system runs out of that workspace and starts struggling to complete basic tasks. Programs take longer to open, files take longer to save, and the entire system slows to a crawl.",
          "The fix is to free up space by uninstalling unused programs, emptying the recycle bin, and moving large files to an external drive. If the drive is a spinning hard disk (HDD), replacing it with a solid-state drive (SSD) will deliver a dramatic speed improvement regardless of how full it is — SSDs are 5–10 times faster at reading and writing data.",
        ],
        bullets: [
          "Check free space: open File Explorer and look at the C: drive — aim to keep at least 15% free",
          "Uninstall programs you haven't used in over a year",
          "Move photos, videos, and documents to an external drive or cloud storage",
          "Run Disk Cleanup (built into Windows) to remove temporary files",
          "Consider an SSD upgrade if the drive is an HDD older than 3 years",
        ],
      },
      {
        heading: "How does malware slow down a computer?",
        paragraphs: [
          "Malware, adware, and cryptomining software run in the background and consume CPU, RAM, and network resources without your knowledge. A heavily infected machine may use 80–100% of its processor just sitting on the desktop. Pop-up ads, browser redirects, and random network activity are common symptoms.",
          "Windows Defender (built-in) catches most common threats, but some malware specifically disables it. A second-opinion scanner like Malwarebytes Free can often catch what the primary antivirus misses. Severe infections may require booting from a USB recovery drive or a clean OS reinstall to fully remove.",
        ],
      },
      {
        heading: "Can overheating slow down a computer?",
        paragraphs: [
          "Yes. Modern processors have a protection mechanism called thermal throttling: when the chip reaches a temperature threshold (usually around 95–100°C), it automatically reduces its own speed to prevent permanent damage. A laptop or PC that throttles due to overheating can run at half its rated speed or less.",
          "Common causes of overheating include dust blocking the vents, a dried-out thermal compound between the CPU and heatsink, a failing cooling fan, or simply using a laptop on a soft surface that blocks airflow. Cleaning the vents and replacing thermal paste is a straightforward repair that can restore full performance.",
        ],
      },
      {
        heading: "When should you bring a slow computer to a repair shop?",
        paragraphs: [
          "Bring it in when the standard fixes haven't worked after an honest attempt, when you hear clicking or grinding from the drive (a sign of imminent failure), when blue screens are happening more than once a week, or when the machine is infected and multiple scans aren't clearing it.",
          "A diagnostic visit gives you a professional opinion on whether the machine is worth repairing, what the exact cause is, and what a realistic repair will cost — before you commit to anything.",
        ],
      },
    ],
    faqs: [
      { question: "Will adding more RAM make my computer faster?", answer: "If your PC regularly uses more than 80% of its current RAM, adding more will help. If RAM is not the bottleneck, it won't make a noticeable difference. A diagnostic can confirm which component is limiting performance." },
      { question: "Is my slow computer too old to repair?", answer: "Age alone isn't the deciding factor. A 7-year-old machine with an SSD upgrade can outperform a newer machine on a slow HDD. We'll give you an honest cost-vs-replacement assessment." },
      { question: "How long does a virus removal take?", answer: "A standard malware removal and system cleanup takes 1–3 hours. Severely infected systems that require an OS reinstall take longer but are still often faster than buying a new machine." },
    ],
    sources: [
      { label: "Microsoft: Tips to improve PC performance in Windows", url: "https://support.microsoft.com/en-us/windows/tips-to-improve-pc-performance-in-windows-b3b3ef5b-5953-fb6a-2528-4bbed82fba96" },
      { label: "Intel: Thermal design power and thermal throttling", url: "https://www.intel.com/content/www/us/en/gaming/resources/cpu-thermal-throttling.html" },
      { label: "Malwarebytes: What is malware?", url: "https://www.malwarebytes.com/malware" },
    ],
  },
  {
    slug: "how-to-tell-if-your-laptop-screen-needs-replacing",
    title: "How to Tell If Your Laptop Screen Needs Replacing (vs. a Different Problem)",
    description:
      "Flickering, black screens, dead pixels, and lines on a laptop display can have several causes. Here's how to tell if the screen itself is bad or if it's something else.",
    answer:
      "A laptop screen that flickers, shows vertical lines, has dead pixels, or goes black is often a failed display — but the same symptoms can also be caused by a bad graphics driver, a loose display cable, or a failing GPU. Testing with an external monitor is the fastest way to isolate whether the screen itself or something else is the problem.",
    published: "2026-09-15",
    modified: "2026-09-15",
    readingTime: "7 min read",
    sections: [
      {
        heading: "What are the symptoms of a bad laptop screen?",
        paragraphs: [
          "A failing or damaged laptop screen typically shows one or more of these: persistent flickering or flashing that doesn't go away after a restart, vertical or horizontal lines across part or all of the display, dead pixels (black or stuck-color dots), large areas of discoloration, a cracked or spider-web pattern on the glass, backlight failure (screen is black but you can faintly see the image with a flashlight), or a screen that stays black after the machine boots.",
          "Not all of these symptoms mean the screen itself has failed. The LCD panel, the display cable, the GPU, and the driver all contribute to what you see. Ruling out software and cable issues first saves money if the real problem turns out to be cheaper to fix.",
        ],
        table: {
          headers: ["Symptom", "Likely cause", "Next step"],
          rows: [
            ["Flickering that starts after driver update", "Software / driver issue", "Roll back or reinstall display driver"],
            ["Lines or flickering that move when you flex the lid", "Loose display cable", "Cable repair or replacement"],
            ["Black screen but external monitor works fine", "Screen or backlight failure", "Screen replacement"],
            ["Black screen and external monitor also black", "GPU or motherboard issue", "Hardware diagnostic"],
            ["Cracked or shattered glass with distorted image", "Physical screen damage", "Screen replacement"],
            ["Faint image visible with flashlight", "Backlight failure (inverter or LED strip)", "Backlight or screen replacement"],
          ],
        },
      },
      {
        heading: "How to test if the problem is the screen or something else",
        paragraphs: [
          "The fastest diagnostic is to plug the laptop into an external monitor using HDMI or USB-C. If the external monitor displays the image correctly, the laptop's internal screen or display cable is the problem. If the external monitor also shows the issue (lines, black, distorted), the fault is in the graphics card or motherboard — a more complex and expensive repair.",
          "If the problem only appears at certain lid angles, or disappears when you press gently on the area near the hinge, the display cable is likely loose or damaged. This is a cheaper fix than a full screen replacement.",
        ],
        bullets: [
          "Connect to an external monitor via HDMI or USB-C",
          "Press Fn + the display-switch key to toggle the output to the external monitor",
          "If external works fine → screen or cable fault",
          "If external also has the issue → GPU or motherboard fault",
          "Gently flex the screen hinge — if the image changes, suspect the display cable",
        ],
      },
      {
        heading: "What does a laptop screen replacement cost?",
        paragraphs: [
          "Screen replacement pricing depends on the laptop model, screen resolution, and whether the touchscreen digitizer also needs replacing. A standard 1080p non-touch screen for a common laptop brand typically costs $60–$150 in parts. Labor for a screen swap on most laptops runs 30–60 minutes.",
          "Screens for premium laptops — high-refresh displays, OLED panels, 4K screens — cost more in parts. The labor is similar. A technician can usually give you an accurate quote within minutes of looking up the model number.",
        ],
      },
      {
        heading: "Is it worth replacing a laptop screen?",
        paragraphs: [
          "Screen replacement is usually worth it when the laptop is under 5 years old, the rest of the machine is working well, and the total repair cost is less than 50% of the laptop's current market value. A $150 screen repair on a laptop worth $600 is clearly worth it. The same repair on a 7-year-old laptop worth $100 probably isn't.",
          "A repair technician should give you that honest cost-vs-replacement assessment before taking your money. If they don't, ask directly.",
        ],
      },
    ],
    faqs: [
      { question: "Can a cracked laptop screen be fixed without replacing it?", answer: "No. A cracked LCD panel cannot be repaired — it must be replaced. The display cable and backlight can sometimes be repaired separately, but the panel itself is not serviceable once cracked." },
      { question: "How long does a laptop screen replacement take?", answer: "Most laptop screen replacements take 30–60 minutes once the part is available. We stock screens for many common laptop models and can complete same-day repairs in most cases." },
      { question: "Will my touchscreen work after a screen replacement?", answer: "Yes, if the replacement screen includes a compatible digitizer layer. We confirm touch compatibility before ordering parts for touchscreen models." },
    ],
    sources: [
      { label: "iFixit: Laptop display repair guides", url: "https://www.ifixit.com/Device/Laptop" },
      { label: "Microsoft: Troubleshoot display issues in Windows", url: "https://support.microsoft.com/en-us/windows/troubleshoot-display-issues-in-windows-08e08d8e-0bfa-d9c3-0b6c-4d52e9c71ada" },
    ],
  },
  {
    slug: "water-damage-phone-what-to-do",
    title: "Water Damaged Your Phone? Do These Things Immediately",
    description:
      "Step-by-step guide to what to do in the first minutes and hours after a phone gets wet — and what definitely not to do.",
    answer:
      "When a phone gets wet, the most important step is to power it off immediately and keep it off. Do not charge it, do not press buttons repeatedly, and do not use a hair dryer on it. The corrosion from water damage is progressive — the sooner a technician can clean and dry the board, the better the chance of full recovery.",
    published: "2026-09-15",
    modified: "2026-09-15",
    readingTime: "7 min read",
    sections: [
      {
        heading: "What to do in the first 5 minutes after water damage",
        paragraphs: [
          "Speed matters enormously with water damage. Water itself doesn't destroy electronics — the corrosion that forms when minerals in the water react with the electrical components does. That corrosion process starts within minutes and accelerates if the device is powered on.",
          "The single most important thing to do is power off the phone immediately. If it's still on, hold the power button and shut it down. If the screen is unresponsive, hold power and volume down together for most phones. Once it's off, don't turn it back on until a technician has cleaned and inspected it.",
        ],
        bullets: [
          "Power off immediately — do not wait, do not check if it still works",
          "Remove the SIM card and SIM tray",
          "Do not charge it — this is the fastest way to cause permanent damage",
          "Shake out any visible water from ports gently",
          "Lay it on a dry towel screen-side down",
          "Bring it to a repair shop as soon as possible — same day if you can",
        ],
      },
      {
        heading: "What not to do after your phone gets wet",
        paragraphs: [
          "Misinformation about water damage spreads widely. The rice myth in particular causes people to delay proper treatment while corrosion progresses. Here's what not to do.",
        ],
        table: {
          headers: ["Common advice", "Why it's wrong"],
          rows: [
            ["Put it in rice", "Rice absorbs atmospheric humidity but can't reach internal components. It delays real treatment while corrosion progresses."],
            ["Blow dry it with a hair dryer", "Heat spreads water deeper into the board and can damage components. Never apply heat."],
            ["Press buttons to check if it works", "Powering it on or pressing buttons while wet causes short circuits."],
            ["Charge it to see if it's okay", "Applying current while wet is the fastest way to cause permanent board damage."],
            ["Leave it in the sun", "Excessive heat causes the same problems as a hair dryer."],
          ],
        },
      },
      {
        heading: "What does a professional water damage repair involve?",
        paragraphs: [
          "A proper water damage treatment starts with disassembling the phone and inspecting the board under magnification. A technician looks for corrosion on the connectors, charging circuits, and CPU area. The board is then cleaned with isopropyl alcohol using an ultrasonic cleaner or manual scrubbing to remove corrosion deposits.",
          "After cleaning, the board is dried completely and reassembled for testing. Components that were corroded through may need to be replaced individually — this is called microsoldering and requires specialized equipment. Not all repair shops offer board-level repair, so ask before dropping off.",
        ],
      },
      {
        heading: "What are the chances of recovering a water-damaged phone?",
        paragraphs: [
          "Phones brought in within the first few hours and kept powered off have a significantly higher recovery rate than those that were left on, charged, or brought in days later. A phone that fell into clean fresh water and was immediately powered off can often be fully recovered. A phone that sat in salt water, went through a washing machine cycle, or was charged while wet has lower odds.",
          "A technician can usually give you a realistic recovery assessment within the first inspection without charging for the full repair upfront.",
        ],
      },
    ],
    faqs: [
      { question: "My phone is waterproof. Do I still need to worry about water damage?", answer: "Water resistance ratings (IP67, IP68) degrade over time and don't cover all scenarios. Saltwater, soap, and chlorine break down seals faster. Any phone can fail with enough water exposure." },
      { question: "How much does water damage repair cost?", answer: "Basic cleaning starts at $49–$79. Board-level microsoldering for component replacement is quoted per component after diagnosis. We give you a cost estimate before beginning any paid repair work." },
      { question: "Can my data be recovered from a water-damaged phone?", answer: "Often yes, especially if the phone is brought in quickly. We prioritize data backup as part of the repair process. If the storage chip is undamaged, data recovery is usually possible." },
    ],
    sources: [
      { label: "IEC 60529: IP code moisture protection standard", url: "https://www.iec.ch/ip-ratings" },
      { label: "iFixit: Water damage repair guide", url: "https://www.ifixit.com/Wiki/Water_Damage_Repair" },
    ],
  },
  {
    slug: "virus-removal-vs-factory-reset",
    title: "Virus Removal vs. Factory Reset: Which Is Right for Your PC?",
    description:
      "When your computer is infected, should you run a malware removal or wipe it clean? Here's how to decide — and what each option actually does.",
    answer:
      "Virus removal works for most infections: common malware, adware, spyware, and even many ransomware variants can be cleared without wiping the system. A factory reset is the right choice when the infection is severe, persistent, or involves rootkits that embed in the OS layer. Both options are better than ignoring the infection.",
    published: "2026-09-15",
    modified: "2026-09-15",
    readingTime: "8 min read",
    sections: [
      {
        heading: "What is the difference between virus removal and a factory reset?",
        paragraphs: [
          "Virus removal means a technician — or removal software — identifies and deletes the malicious files, registry entries, and processes causing the infection while leaving your data, programs, and settings intact. It's surgical: target the bad, leave the good.",
          "A factory reset wipes everything and reinstalls a clean copy of the operating system. It's the nuclear option — guaranteed to eliminate any software-based infection, but it also deletes all your installed programs, files, and settings unless they were backed up beforehand.",
        ],
        table: {
          headers: ["Factor", "Virus removal", "Factory reset"],
          rows: [
            ["Data preserved?", "Yes", "No (backup required first)"],
            ["Programs preserved?", "Yes", "No (must reinstall everything)"],
            ["Guarantees infection cleared?", "Usually yes, not 100%", "Yes (software threats only)"],
            ["Right for rootkits?", "Sometimes, not always", "Yes"],
            ["Time to complete", "1–3 hours", "2–4 hours + reinstalling programs"],
            ["Cost", "Lower", "Higher (more labor)"],
          ],
        },
      },
      {
        heading: "When is virus removal the right choice?",
        paragraphs: [
          "Virus removal is appropriate for most common infections: adware causing pop-ups, browser hijackers changing your homepage, spyware monitoring your activity, and even most ransomware variants if caught early. Modern malware removal tools combined with a skilled technician clear the vast majority of infections completely.",
          "The key question is whether the malware has embedded itself into the OS at a deep level (a rootkit), whether it has disabled Windows Defender and security tools, or whether multiple scans have failed to clear it. If the infection keeps coming back after removal attempts, a reset becomes necessary.",
        ],
        bullets: [
          "Adware and browser hijackers → removal is the right first step",
          "Spyware and keyloggers → removal usually works",
          "Cryptominers and botnet infections → removal works in most cases",
          "Ransomware caught early → removal can work; check for a decryption tool first",
          "Rootkits or BIOS-level malware → factory reset or specialized tools required",
          "Recurring infection after multiple cleanings → factory reset recommended",
        ],
      },
      {
        heading: "When is a factory reset the right choice?",
        paragraphs: [
          "A factory reset makes sense when the infection is persistent (keeps returning after removal), when the malware has disabled core Windows security components and they can't be repaired in place, when a rootkit has been confirmed, or when the computer's performance has degraded so badly that a clean install is faster than repairing the damage malware has caused to system files.",
          "A reset is also appropriate as a privacy measure when selling or giving away a computer — regardless of whether it was infected.",
        ],
      },
      {
        heading: "What should you back up before a factory reset?",
        paragraphs: [
          "Before any reset, back up: all documents, photos, and videos from the Desktop, Documents, Downloads, and Pictures folders; browser bookmarks (export them through browser settings); email if using a local client like Outlook; any program license keys you'll need to reinstall; and any game saves or settings that aren't cloud-synced.",
          "Do not back up .exe installer files or program folders — malware can hide in them. Back up data only, then reinstall programs cleanly after the reset.",
        ],
      },
    ],
    faqs: [
      { question: "Can a virus survive a factory reset?", answer: "A standard factory reset eliminates all software-based threats. BIOS-level or firmware rootkits are extremely rare and require specialized tools, but they can survive a standard OS reset in theory." },
      { question: "Will a factory reset fix a slow computer?", answer: "Yes, if the slowdown is caused by software — accumulated junk, malware, corrupted OS files. It won't help if the hardware (RAM, storage, CPU) is the actual bottleneck." },
      { question: "How long does a professional virus removal take?", answer: "Standard malware removal takes 1–3 hours. Severe infections requiring a factory reset and clean OS install take 3–5 hours including reinstalling drivers and software." },
    ],
    sources: [
      { label: "Microsoft: Remove malware from your Windows PC", url: "https://support.microsoft.com/en-us/windows/remove-malware-from-your-windows-pc-c9f5578e-c193-4042-a0f6-ccc65e4dc7fa" },
      { label: "CISA: Understanding anti-virus software", url: "https://www.cisa.gov/news-events/news/understanding-anti-virus-software" },
      { label: "Malwarebytes: What is a rootkit?", url: "https://www.malwarebytes.com/rootkit" },
    ],
  },
  {
    slug: "ipad-cracked-screen-repair-vs-replace",
    title: "iPad Cracked Screen: Repair or Replace? A Cost-Honest Guide",
    description:
      "When an iPad screen cracks, repair is often the smarter financial choice. Here's how to compare the real costs — and what factors make replacement the better call.",
    answer:
      "Repairing a cracked iPad screen costs $80–$250 depending on the model, compared to $300–$1,100 or more to replace the iPad. For any iPad less than 4–5 years old that is otherwise working well, screen repair almost always makes more financial sense than replacement. The exception is when the damage extends to the LCD, the device is out of warranty with AppleCare, and a newer model would offer meaningful functional improvements.",
    published: "2026-09-15",
    modified: "2026-09-15",
    readingTime: "8 min read",
    sections: [
      {
        heading: "How much does iPad screen repair actually cost?",
        paragraphs: [
          "Third-party repair shop prices for iPad screen replacement range from $80 for older standard iPads up to $250 for iPad Pro models with high-resolution displays. Apple's own out-of-warranty repair prices are significantly higher — often $200–$600 depending on the model.",
          "The price difference between repair and replacement is substantial for most models. A cracked iPad Air that would cost $599 to replace can often be repaired for $130–$180.",
        ],
        table: {
          headers: ["iPad model", "Typical repair cost (3rd party)", "Apple out-of-warranty", "Replacement cost (new)"],
          rows: [
            ["iPad (9th/10th gen)", "$80–$120", "$199", "$329–$449"],
            ["iPad Mini (6th gen)", "$100–$150", "$219", "$499"],
            ["iPad Air (5th gen)", "$130–$180", "$299", "$599+"],
            ["iPad Pro 11-inch", "$180–$250", "$479", "$799+"],
            ["iPad Pro 12.9-inch", "$200–$280", "$599", "$1,099+"],
          ],
        },
      },
      {
        heading: "Glass only vs. full screen replacement — what's the difference?",
        paragraphs: [
          "Some cracks are limited to the outer glass layer while the LCD beneath remains undamaged. In this case, the touchscreen still works and the image is clear — only the glass is cracked. Some shops offer glass-only repairs that preserve the original LCD, which can be less expensive.",
          "If the crack has damaged the LCD — visible as dark blotches, dead pixels, or color distortion — the full display assembly (glass + LCD) needs replacement. This is more expensive but the only correct fix when the LCD is involved.",
        ],
        bullets: [
          "Touch still works, display looks normal → glass-only crack → glass or full assembly repair possible",
          "Dark blotches or areas of the screen that don't display correctly → LCD damaged → full assembly replacement required",
          "Touchscreen not responding in areas → digitizer damaged → full assembly replacement required",
          "Ask the repair shop which type of repair you need before approving any work",
        ],
      },
      {
        heading: "When does replacing the iPad make more sense than repairing it?",
        paragraphs: [
          "Replacement beats repair when the device is more than 5–6 years old and no longer receiving iPadOS security updates, when the repair cost exceeds 60% of the replacement value, when the battery is also failing and a repair-plus-battery-swap approaches the cost of a refurbished model, or when the damage is so severe that other components are affected.",
          "A refurbished iPad from Apple or a certified refurbisher is worth considering as a middle ground — cheaper than new, with a warranty, and better long-term software support than a very old device.",
        ],
      },
      {
        heading: "Does Apple warranty or AppleCare cover cracked screens?",
        paragraphs: [
          "Standard Apple warranty does not cover accidental damage including cracked screens. AppleCare+ covers two incidents of accidental damage per year for a service fee — currently $49 per incident for iPads. If you have AppleCare+, an Apple repair for a cracked screen at $49 is the clear choice over a third-party repair.",
          "Without AppleCare+, Apple's out-of-warranty screen replacement prices are significantly higher than most reputable third-party repair shops. A quality third-party repair using good-quality parts is a practical alternative.",
        ],
      },
    ],
    faqs: [
      { question: "Will a third-party screen repair void my Apple warranty?", answer: "A third-party repair may void coverage for the repaired component under Apple's warranty, but it does not legally void the entire device warranty under the Magnuson-Moss Warranty Act. Ask your repair shop about their warranty on the repair itself." },
      { question: "How long does an iPad screen repair take?", answer: "Most iPad screen replacements take 1–2 hours. We stock screens for many iPad models and can complete repairs same-day in most cases." },
      { question: "Will Touch ID or Face ID work after a screen repair?", answer: "Touch ID (on models with a home button) typically works normally after a screen replacement because it's tied to the home button hardware, not the display. Face ID relies on the front camera system — we ensure the front camera assembly is handled carefully during any repair." },
    ],
    sources: [
      { label: "Apple: iPad repair and service pricing", url: "https://support.apple.com/ipad/repair" },
      { label: "FTC: Nixing the Fix — report on right to repair", url: "https://www.ftc.gov/reports/nixing-the-fix-ftc-report-to-congress-on-repair-restrictions" },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
