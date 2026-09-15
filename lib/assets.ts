export type ProofAsset = {
  src: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
  href?: string;
};

const previewBase = "/images/Website Previews Use These";
const adBase = "/images/Ads I Designed";
const resultBase = "/images/Ad Results";

export const websitePreviews: ProofAsset[] = [
  { src: `${previewBase}/1stikkmobile.png`, href: "https://1stikkmobile.com", title: "1Stikk Mobile", alt: "Mobile medical service website with service photography and booking actions", width: 1739, height: 917 },
  { src: `${previewBase}/7uvhavin.png`, href: "https://7uvhavin.com", title: "7UVHavin", alt: "Dark artist website homepage with neon green identity and media previews", width: 2940, height: 1492 },
  { src: `${previewBase}/applianceking.png`, href: "https://appliancekingrepair.com", title: "Appliance King Repair", alt: "Appliance repair website with a clear service menu and estimate action", width: 2938, height: 1492 },
  { src: `${previewBase}/Arestireandauto.png`, href: "https://arestireandauto.com", title: "Ares Tire & Auto", alt: "Automotive service website with dark navy layout and appointment action", width: 2900, height: 1412 },
  { src: `${previewBase}/bamsprinklers.png`, href: "https://bamsprinklers.com", title: "BAM Sprinklers & Landscaping", alt: "Denver landscaping website with local service positioning and quote actions", width: 2938, height: 1402 },
  { src: `${previewBase}/beyondlabelsgifts.png`, href: "https://beyondlabelsgifts.com", title: "Beyond Labels Gifts", alt: "Dark ecommerce product page for a personalized necklace", width: 1802, height: 1044 },
  { src: `${previewBase}/bigzo.png`, href: "https://bigzomusic.com", title: "BigZO Music", alt: "Music artist website with black and gold branding and booking action", width: 2666, height: 1440 },
  { src: `${previewBase}/cleardump.png`, href: "https://cleardump.com", title: "ClearDump", alt: "Driveway cleaning and house washing website with a direct estimate action", width: 2940, height: 1512 },
  { src: `${previewBase}/focusmodeshop.png`, href: "https://focusmodeshop.com", title: "Focus Mode Shop", alt: "Bright ecommerce website for focus and productivity products", width: 1804, height: 965 },
  { src: `${previewBase}/joscarturf.png`, href: "https://joscarturf.com", title: "Joscar Turf", alt: "Local turf delivery website with readable service and delivery information", width: 2710, height: 1478 },
  { src: `${previewBase}/kingstonelandscaping.png`, href: "https://kingstonelandscaping.com", title: "Kingstone Landscaping", alt: "Premium landscaping website with dark green and gold brand direction", width: 2686, height: 1476 },
  { src: `${previewBase}/laynefitness.png`, href: "https://laynefitness.com", title: "Layne Fitness", alt: "Fitness coaching website with a blue and green identity and visible booking action", width: 2940, height: 1486 },
  { src: `${previewBase}/mehdicohen.png`, href: "https://mehdicohen.com", title: "Mehdi Cohen", alt: "Bilingual personal brand website with dark blue international layout", width: 1578, height: 1458 },
  { src: `${previewBase}/MorHandy.png`, href: "https://morhandy.com", title: "Mor Handy", alt: "Home services website with direct estimate actions and review proof", width: 3036, height: 1614 },
  { src: `${previewBase}/ojjunkremoval.png`, href: "https://ojjunkremoval.net", title: "OJ Junk Removal", alt: "Custom junk removal website homepage with service proof and clear quote actions", width: 1684, height: 1020 },
  { src: `${previewBase}/phoenixfreedomfirearms.png`, href: "https://phoenixfreedomfirearms.com", title: "Phoenix Freedom Firearms", alt: "Firearms service website with dark product photography and visible pricing", width: 1666, height: 982 },
  { src: `${previewBase}/ryanpoolsr.png`, href: "https://ryanpoolsr.com", title: "Ryan Pool Sr.", alt: "Light blue water product website with event photography and product callouts", width: 1777, height: 1042 },
  { src: `${previewBase}/swolejd.png`, href: "https://swolejd.com", title: "Swole JD", alt: "Fitness transformation website with before and after proof", width: 2532, height: 1494 },
  { src: `${previewBase}/truelegacyworld.png`, href: "https://truelegacyworld.com", title: "True Legacy World", alt: "Global health mission website with deep blue brand presentation", width: 2204, height: 1390 },
  { src: `${previewBase}/yaribeats.png`, href: "https://yaribeats.com", title: "YARI.WTF Beats", alt: "Orange and black music production website with portrait media", width: 2938, height: 1492 }
];

export const adDesigns: ProofAsset[] = [
  { src: `${adBase}/1080X1080 Computer Repair.jpg`, title: "Computer Repair", alt: "Square computer repair advertisement comparing replacement and repair cost", width: 1080, height: 1080 },
  { src: `${adBase}/appliance king.jpg`, title: "Appliance King", alt: "Vertical washer and dryer repair advertisement", width: 1080, height: 1350 },
  { src: `${adBase}/download (2).png`, title: "Uprise Electric", alt: "Square electrician advertisement with Chicago service call to action", width: 691, height: 691 },
  { src: `${adBase}/1080x1080 Rich Alone.jpg`, title: "Rich Alone Apparel", alt: "Apparel advertisement with black shirt and yellow call to action", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1080 Before and After Set.jpg`, title: "Water System Comparison", alt: "Water system advertisement comparing bottled water and a filtration system", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1080 Before and After.jpg`, title: "Xilly PC Performance", alt: "Computer performance advertisement comparing before and after frame rates", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1350 Layne.png`, title: "Layne Fitness", alt: "Vertical personal training advertisement with client transformation photos", width: 896, height: 1152 },
  { src: `${adBase}/1200x1200 ffl transfer ad.jpg`, title: "FFL Transfers", alt: "Square firearms transfer advertisement with price and phone action", width: 1200, height: 1200 },
  { src: `${adBase}/1080x1080 Electrician.jpg`, title: "Mor Handy Electrical", alt: "Electrical safety advertisement showing a replaced outlet", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1350.jpg`, title: "ClearDump Driveway Cleaning", alt: "Vertical driveway cleaning advertisement using real before and after photography", width: 1080, height: 1350 },
  { src: `${adBase}/1080x1080 Wall Replacement.jpg`, title: "Mor Handy Outlet Repair", alt: "Outlet replacement advertisement with same-day service offer", width: 1080, height: 1080 },
  { src: `${adBase}/1200x675 silencer approval.jpg`, title: "Silencer Fingerprinting", alt: "Wide firearms fingerprinting advertisement", width: 1200, height: 675 },
  { src: `${adBase}/1080x1080 square set 4.jpg`, title: "Kava Construction", alt: "Backyard deck construction advertisement with before and after photography", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1080 carpet cleaning.jpg`, title: "Mor Handy Carpet Cleaning", alt: "Carpet repair and cleaning advertisement with before and after sofa imagery", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1080 Mock Kit Run.jpg`, title: "1Stikk Mobile Mock Kit", alt: "Medical testing kit advertisement with service features and price", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1080 set 3.jpg`, title: "Enagic Water", alt: "Water system advertisement with product and lifestyle imagery", width: 1080, height: 1080 },
  { src: `${adBase}/download.png`, title: "BMW Sales", alt: "Automotive sales advertisement featuring a BMW and consultation action", width: 691, height: 691 },
  { src: `${adBase}/1080X1080 Ad Love.jpg`, title: "Beyond Label Gifts", alt: "Gift advertisement for a personalized necklace", width: 1080, height: 1080 },
  { src: `${adBase}/1080x1080 Test Messages Mocks.jpg`, title: "Medical Courier Hiring", alt: "Medical courier recruiting advertisement with application details", width: 1080, height: 1080 },
  { src: `${adBase}/1200x675 custom gun build.jpg`, title: "Custom Firearm Builds", alt: "Wide custom firearm build advertisement", width: 1200, height: 675 },
  { src: `${adBase}/Heres_your_reusable_ad-generation_prompt._202605151720.jpeg`, title: "Flowery Branch Listing", alt: "Real estate listing advertisement with home photo and agent contact", width: 2048, height: 2048 },
  { src: `${adBase}/download (1).png`, title: "Kingstone Transformation", alt: "Landscaping transformation advertisement with before and after lawn photos", width: 691, height: 691 }
];

export type ResultAsset = ProofAsset & {
  metric: string;
  result: string;
  cost: string;
  spend: string;
  note: string;
};

export const adResults: ResultAsset[] = [
  { src: `${resultBase}/Appliance King Ads/Appliance King Ads.png`, title: "Appliance King campaign", alt: "Meta Ads Manager screenshot showing 13 form leads at 7 dollars and 36 cents per lead", width: 1206, height: 1104, metric: "Leads", result: "13", cost: "$7.36", spend: "$95.73", note: "Form-lead campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/BigZO Ads/Big ZO Ad Set 1.png`, title: "BigZO campaign", alt: "Meta Ads Manager screenshot showing 165 profile and page visits at 32 cents each", width: 1210, height: 1102, metric: "Profile + page visits", result: "165", cost: "$0.32", spend: "$53.59", note: "Profile and page visit campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/Mor Handy Ads/carpet cleaning set 1 morhandy.png`, title: "Mor Handy carpet campaign", alt: "Meta Ads Manager screenshot showing 13 form leads at 5 dollars and 36 cents per lead", width: 1210, height: 1104, metric: "Leads", result: "13", cost: "$5.36", spend: "$69.72", note: "Form-lead campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/Mor Handy Ads/electrical socket replacement set 2.png`, title: "Mor Handy electrical campaign", alt: "Meta Ads Manager screenshot showing 14 form leads at 19 dollars and 91 cents per lead", width: 1208, height: 1104, metric: "Leads", result: "14", cost: "$19.91", spend: "$278.69", note: "Form-lead campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/Ryan Pool Enagic/Ryan Pool ad set 1.png`, title: "Ryan Pool campaign", alt: "Meta Ads Manager screenshot showing 29 form leads at 4 dollars and 89 cents per lead", width: 1210, height: 1108, metric: "Leads", result: "29", cost: "$4.89", spend: "$141.70", note: "Form-lead campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/Stackmodechris Ads/stackmode repair set 2.png`, title: "Stackmode repair campaign", alt: "Meta Ads Manager screenshot showing 12 form leads at 4 dollars and 31 cents per lead", width: 1212, height: 1100, metric: "Leads", result: "12", cost: "$4.31", spend: "$51.77", note: "Form-lead campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/Stackmodechris Ads/stackmode saxaphone set 1 results.png`, title: "Stackmode saxophone campaign", alt: "Meta Ads Manager screenshot showing 16 form leads at 7 dollars and 48 cents per lead", width: 1208, height: 1098, metric: "Leads", result: "16", cost: "$7.48", spend: "$119.64", note: "Form-lead campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/Stackmodechris Ads/stackmode set 3.png`, title: "Stackmode campaign set three", alt: "Meta Ads Manager screenshot showing 8 form leads at 10 dollars and 50 cents per lead", width: 1210, height: 1094, metric: "Leads", result: "8", cost: "$10.50", spend: "$84.01", note: "Form-lead campaign screenshot supplied by CEOTurbo." },
  { src: `${resultBase}/Xilly Ads/xilly set 1 results.png`, title: "Xilly campaign", alt: "Meta Ads Manager screenshot showing 18 website checkout initiations at 15 dollars and 47 cents each", width: 1218, height: 1112, metric: "Checkout initiations", result: "18", cost: "$15.47", spend: "$278.53", note: "Website checkout-initiation campaign screenshot supplied by CEOTurbo." }
];

export const searchConsoleProof: ProofAsset = {
  src: "/generated/search-console-proof.jpg",
  title: "Stackmode Search Console visibility",
  alt: "Google Search Console twelve-month screenshot showing 83 clicks, 3.34 thousand impressions, 2.5 percent click-through rate, and 25.4 average position with stronger activity later in the period",
  width: 2048,
  height: 708
};
