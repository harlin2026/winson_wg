import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { heroImages } from "@/data/site";

const people = ["Chairman of the Board", "CEO", "Deputy General Manager", "CEO", "HR Director"];
const cultureImages = [
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
];

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Us" image={heroImages.about} />
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <section className="section innerSection" id="overview">
        <div className="container">
          <SectionTitle>Group Overview</SectionTitle>
          <p className="wideLead">
            Winson Group Limited, originating from the real estate industry, has continually expanded
            its scope of operations, transforming into a diverse and integrated enterprise.
          </p>
          <div className="overviewGrid">
            <div className="overviewImage">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </div>
            <article>
              <p>
                Having deep roots in Macau, the group has witnessed simultaneous progress in its
                business development, while also extending its reach into mainland China.
              </p>
              <p>
                Moving forward, the group remains steadfast in actively integrating with the national
                market and exploring opportunities for growth in Southeast Asia.
              </p>
            </article>
            <article className="statsCard">
              <div>
                <strong>3278</strong>
                <span>Title</span>
              </div>
              <div>
                <strong>3278</strong>
                <span>Title</span>
              </div>
              <div>
                <strong>3278</strong>
                <span>Title</span>
              </div>
              <p>
                The group has witnessed simultaneous progress and keeps moving toward new regional
                opportunities.
              </p>
            </article>
            <div className="overviewImage">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section philosophy" id="philosophy">
        <div className="container philosophyGrid">
          <article>
            <p className="eyebrow">Philosophy</p>
            <p>
              Winson Group has kept pace with the times while staying focused on business growth,
              excellence, and social contribution.
            </p>
          </article>
          {["News Title 1", "Explore opportunities with innovations", "Build a better future with care"].map((title, index) => (
            <article className="darkCard" key={title}>
              <Image src={cultureImages[index]} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" />
              <div>
                <h3>{title}</h3>
                <p>This is a brief introduction of the company.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="culture">
        <div className="container">
          <SectionTitle>Group Culture</SectionTitle>
          <div className="cultureGrid">
            {cultureImages.map((image, index) => (
              <div className={index === 0 ? "cultureLarge" : ""} key={image}>
                <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
                {index === 0 ? <p>This is a brief introduction of the company.</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section management" id="management">
        <div className="container">
          <SectionTitle>Group Management</SectionTitle>
          <div className="peopleRow">
            {people.map((role, index) => (
              <article key={`${role}-${index}`}>
                <div className="avatar">
                  <Image
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? "1507003211169-0a1dd7228f2d" : "1494790108377-be9c29b29330"}?auto=format&fit=crop&w=400&q=80`}
                    alt=""
                    fill
                    sizes="160px"
                  />
                </div>
                <h3>Name</h3>
                <p>Winson Group</p>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section milestones" id="milestones">
        <div className="container">
          <SectionTitle>Milestones</SectionTitle>
          <p className="wideLead">
            The group&apos;s business ventures encompass a broad spectrum and continue to evolve
            across generations.
          </p>
          <div className="timeline">
            <span>2024</span>
            <strong>2025</strong>
          </div>
          <div className="milestoneCards">
            {[1, 2, 3].map((item) => (
              <article key={item}>
                <div>
                  <Image src={cultureImages[item]} alt="" fill sizes="300px" />
                </div>
                <p>Winson Group Limited continues transforming into a diverse and integrated enterprise.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
