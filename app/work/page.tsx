import { ProofGallery } from "@/components/proof-gallery";
import { Breadcrumbs, SectionHeader, PrimaryLink } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { websitePreviews, adDesigns } from "@/lib/assets";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, absoluteUrl } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Website and Ad Creative Work", description: "Inspect all supplied CEOTurbo website previews and Meta ad designs in accessible full-size galleries.", path: "/work" });
const itemList={"@context":"https://schema.org","@type":"ItemList",name:"CEOTurbo selected work",itemListElement:[...websitePreviews,...adDesigns].map((item,index)=>({"@type":"ListItem",position:index+1,name:item.title,url:item.href ?? absoluteUrl(item.src)}))};
export default function WorkPage(){return <>
  <JsonLd data={[breadcrumbSchema([{name:"Home",path:"/"},{name:"Work",path:"/work"}]),itemList]}/>
  <section className="service-hero section-dark"><div className="section-shell"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Work"}]}/><p className="eyebrow">Complete supplied portfolio</p><h1>Proof you can inspect.</h1><p className="lede">Every supplied website preview and ad design is shown here with its native framing. Website images open the matching live site, and every piece can still be inspected at full size.</p></div></section>
  <section className="section section-white"><div className="section-shell"><SectionHeader question={`Which ${websitePreviews.length} live websites has CEOTurbo built?`} answer="Every screenshot is matched to its website and shown without cropping. Select an image to open the live site in a new tab."/><ProofGallery items={websitePreviews} label="CEOTurbo website work"/></div></section>
  <section className="section section-paper"><div className="section-shell"><SectionHeader question={`Which ${adDesigns.length} ad designs has CEOTurbo created?`} answer="Creative uses the offer, source imagery, platform format, and one immediate action. Historical examples do not guarantee future performance."/><ProofGallery items={adDesigns} label="CEOTurbo Meta ad creative"/></div></section>
  <section className="final-cta section-dark"><div className="section-shell"><h2>Ready to bring your real offer and proof?</h2><p>CEOTurbo will build around what makes the business credible—not a generic template.</p><PrimaryLink href={SITE.bookingUrl}>Book a visibility call</PrimaryLink></div></section>
  </>}
