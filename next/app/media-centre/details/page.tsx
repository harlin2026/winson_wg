import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { heroImages, newsDetail } from "@/data/site";

export default function MediaDetailPage() {
  return (
    <main>
      <PageHero title="Media Centre" image={heroImages.media} />
      <Breadcrumbs items={[{ label: "Media Centre", href: "/media-centre/details" }, { label: "Details" }]} />
      <article className="section articlePage">
        <div className="container articleContainer">
          <h1>{newsDetail.title}</h1>
          <time>{newsDetail.date}</time>
          <div className="articleMedia">
            <button aria-label="Previous news">{"<"}</button>
            <div>
              <Image src={newsDetail.image} alt="" fill sizes="(max-width: 768px) 90vw, 760px" />
            </div>
            <button aria-label="Next news">{">"}</button>
          </div>
          <div className="articleBody">
            {newsDetail.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
