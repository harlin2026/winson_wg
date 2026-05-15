import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { heroImages, jobs } from "@/data/site";

export default function JoinUsPage() {
  return (
    <main>
      <PageHero title="Join Us" image={heroImages.join} />
      <Breadcrumbs items={[{ label: "Join Us", href: "/join-us" }, { label: "Join Our Team" }]} />
      <section className="section careersPage" id="concept">
        <div className="container">
          <h1>Join WG Team</h1>
          <p>
            We deeply value decades of professional experience and entrepreneurial spirit. If you are
            eager to pursue your ideals, grow with the group, and create value together, this is a
            place full of opportunity.
          </p>
          <p>
            Please join us and become part of our future. We look forward to creating the next chapter
            with you.
          </p>

          <div className="jobTabs" aria-label="Job location filters">
            <button className="active">All</button>
            <button>Headquarters</button>
            <button>Zhuhai</button>
            <button>Hengqin</button>
          </div>

          <div className="jobList" id="jobs">
            {jobs.map((job) => (
              <article className={job.responsibilities ? "jobItem open" : "jobItem"} key={job.title}>
                <div className="jobHeader">
                  <h2>{job.title}</h2>
                  <div>
                    <a href={`mailto:hr@winson-group.com?subject=${encodeURIComponent(job.title)}`}>Apply Now</a>
                    <span>{job.responsibilities ? "Collapse" : "Details"}</span>
                  </div>
                </div>
                {job.responsibilities ? (
                  <div className="jobDetail">
                    <h3>Responsibilities</h3>
                    <ul>
                      {job.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h3>Requirements</h3>
                    <ul>
                      {job.requirements?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
