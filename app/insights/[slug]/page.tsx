import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs, FaqList, PrimaryLink } from "@/components/page-elements";
import { articles, getArticle } from "@/lib/articles";
import { SITE } from "@/lib/site";
import { absoluteUrl, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

export function generateStaticParams(){return articles.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const article=getArticle(slug);if(!article)return {};return buildMetadata({title:article.title,description:article.description,path:`/insights/${slug}`});}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const article=getArticle(slug); if(!article) notFound();
  const schema={"@context":"https://schema.org","@type":"BlogPosting",headline:article.title,description:article.description,datePublished:article.published,dateModified:article.modified,mainEntityOfPage:absoluteUrl(`/insights/${article.slug}`),author:{"@type":"Person",name:SITE.founder,alternateName:SITE.founderAlias},publisher:{"@id":`${SITE.url}/#organization`},inLanguage:"en-US"};
  return <>
    <JsonLd data={[schema,breadcrumbSchema([{name:"Home",path:"/"},{name:"Insights",path:"/insights"},{name:article.title,path:`/insights/${article.slug}`}]),faqSchema(article.faqs)]}/>
    <article>
      <header className="service-hero section-dark"><div className="section-shell"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Insights",href:"/insights"},{label:article.title}]}/><p className="eyebrow">Updated {article.modified} · {article.readingTime}</p><h1>{article.title}</h1><p className="lede">{article.answer}</p></div></header>
      <div className="section section-white"><div className="section-shell article-layout"><div className="article-body">
        {article.sections.map((section,index)=><section key={section.heading} id={`section-${index+1}`}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}{section.table&&<div role="region" aria-label={`${section.heading} comparison table`} tabIndex={0}><table><thead><tr>{section.table.headers.map(cell=><th key={cell}>{cell}</th>)}</tr></thead><tbody>{section.table.rows.map((row,rowIndex)=><tr key={rowIndex}>{row.map(cell=><td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}</section>)}
        <section><h2>What questions come up most often?</h2><FaqList faqs={article.faqs}/></section>
        <section><h2>Which primary sources support this guide?</h2><ul className="source-list">{article.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>
      </div><aside className="article-aside"><strong>In this guide</strong>{article.sections.map((section,index)=><a href={`#section-${index+1}`} key={section.heading}>{section.heading}</a>)}<hr/><span>Written by {SITE.founder}<br/>Updated {article.modified}</span></aside></div></div>
    </article>
    <section className="final-cta section-dark"><div className="section-shell"><h2>Ready to turn the guidance into a clear next step?</h2><p>CEOTurbo will confirm fit without promising rankings, reviews, leads, or citations.</p><PrimaryLink href={SITE.bookingUrl}>Book a visibility call</PrimaryLink></div></section>
  </>;
}
