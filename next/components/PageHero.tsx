import Image from "next/image";

type PageHeroProps = {
  title: string;
  image: string;
  align?: "left" | "center";
};

export function PageHero({ title, image, align = "left" }: PageHeroProps) {
  return (
    <section className={`pageHero pageHero-${align}`}>
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="pageHeroShade" />
      <div className="container pageHeroContent">
        <span className="slash slashOne" />
        <span className="slash slashTwo" />
        <h1>{title}</h1>
      </div>
    </section>
  );
}
