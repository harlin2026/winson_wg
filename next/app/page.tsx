import Image from "next/image";
import Link from "next/link";
import { BusinessGrid } from "@/components/BusinessGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { heroImages } from "@/data/site";

const landscape = [
  { place: "Zhuhai", copy: "Gateway operations and regional support for cross-border business development." },
  { place: "Malaysia", copy: "Strategic partnerships spanning hospitality, technology, and service delivery." },
  { place: "Macau", copy: "Headquarters for integrated management, investment, and operational excellence." },
  { place: "Greater Bay Area", copy: "A connected business network serving new opportunities across the region." }
];

export default function Home() {
  return (
    <main>
      <section className="homeHero" id="home">
        <Image
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2400&q=85"
          alt="Macau city skyline at night"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroShade" />
        <div className="container homeHeroContent">
          <h1>Winson Group Macau</h1>
          <p>Innovate. Solve. Succeed</p>
        </div>
      </section>

      <section className="section aboutHome" id="about">
        <div className="container twoColumn">
          <div className="copyBlock">
            <p className="eyebrow">About</p>
            <p>
              Winson Group Limited, originating from the real estate industry, has continually expanded
              across generations, transforming into a diverse and integrated enterprise.
            </p>
            <p>
              With deep roots in Macau, the group integrates with the national market and explores
              opportunities in Southeast Asia.
            </p>
            <Link className="textLink" href="/about-us">
              More
            </Link>
          </div>
          <div className="imagePanel">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Modern meeting room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section" id="businesses">
        <div className="container">
          <SectionTitle lead="The group's business ventures encompass a broad spectrum, including information technology services, corporate solutions, project management, catering, engineering, and entertainment.">
            Businesses
          </SectionTitle>
          <BusinessGrid />
        </div>
      </section>

      <section className="section newsHome" id="media">
        <div className="container">
          <SectionTitle>News</SectionTitle>
          <div className="newsFeature">
            <div className="newsImage">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80"
                alt="Community event"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <article className="newsCopy">
              <h2>News Title 1</h2>
              <p>
                This content area can later be managed from Strapi as latest news, media notes, or
                event updates.
              </p>
              <Link className="textLink" href="/media-centre/details">
                More
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="joinBand" id="join">
        <div className="joinImage">
          <Image src={heroImages.join} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="joinCopy">
          <p className="eyebrow">Join Us</p>
          <p>
            Talent, ideas, and long-term teamwork are always welcome. Join us and become part of the
            group&apos;s next chapter.
          </p>
          <Link className="textLink" href="/join-us">
            More
          </Link>
        </div>
      </section>

      <section className="section landscape">
        <div className="container">
          <SectionTitle lead="A connected regional footprint from Macau to Zhuhai, Malaysia, and the wider Greater Bay Area.">
            Business Landscape
          </SectionTitle>
          <div className="mapCanvas">
            <span className="pin pinOne">Macau</span>
            <span className="pin pinTwo">Zhuhai</span>
            <span className="pin pinThree">Malaysia</span>
            <span className="pin pinFour">Greater Bay Area</span>
          </div>
          <div className="landscapeGrid">
            {landscape.map((item) => (
              <article key={item.place}>
                <span className="pinIcon" />
                <h3>{item.place}</h3>
                <p>{item.copy}</p>
                <Link className="textLink" href="/our-businesses">
                  More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
