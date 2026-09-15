import Link from "next/link";
import { Breadcrumbs } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { articles } from "@/lib/articles";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "@/lib/seo";
export const metadata=buildMetadata({title:"Business Visibility Insights",description:"Primary-source guides to SEO, AEO, GEO, Google reviews, custom-coded websites, and QR conversion paths.",path:"/insights"});
const listSchema={"@context":"https://schema.org","@type":"ItemList",name:"CEOTurbo Insights",itemListElement:articles.map((article,index)=>({"@type":"ListItem",position:index+1,name:article.title,url:absoluteUrl(`/insights/${article.slug}`)}))};
export default function InsightsPage(){return <>
  <JsonLd data={[breadcrumbSchema([{name:"Home",path:"/"},{name:"Insights",path:"/insights"}]),listSchema]}/>
  <section className="service-hero section-dark"><div className="section-shell"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Insights"}]}/><p className="eyebrow">Primary-source business guides</p><h1>Answers without the shortcuts.</h1><p className="lede">Direct explanations of how visibility systems work, where the limits are, and which source supports the claim.</p></div></section>
  <section className="section section-paper"><div className="section-shell"><div className="article-grid">{articles.map((article,index)=><Link className="article-card" href={`/insights/${article.slug}`} key={article.slug}><small>Guide 0{index+1} · {article.readingTime}</small><h2>{article.title}</h2><p>{article.description}</p><b>Read the guide →</b></Link>)}</div></div></section>
  </>}
