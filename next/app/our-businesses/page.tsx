import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BusinessGrid } from "@/components/BusinessGrid";
import { PageHero } from "@/components/PageHero";
import { heroImages } from "@/data/site";

export default function OurBusinessesPage() {
  return (
    <main>
      <PageHero title="Our Businesses" image={heroImages.businesses} />
      <Breadcrumbs items={[{ label: "Our Businesses" }]} />
      <section className="section innerSection">
        <div className="container">
          <BusinessGrid />
        </div>
      </section>
    </main>
  );
}
