import Link from "next/link";

type LogoProps = {
  brandName?: string;
  brandSubtitle?: string;
  logoUrl?: string;
};

export function Logo({ brandName = "Winson Group", brandSubtitle = "WINSON GROUP", logoUrl }: LogoProps) {
  return (
    <Link className="brand" href="/" aria-label={`${brandName} home`}>
      {logoUrl ? (
        // Strapi logo files can be SVG/PNG/JPG and may come from the private CMS host.
        // A plain img keeps this small brand mark flexible without Next image config churn.
        // eslint-disable-next-line @next/next/no-img-element
        <img className="brandLogo" src={logoUrl} alt="" />
      ) : (
        <span className="brandMark">{brandName.charAt(0).toUpperCase()}</span>
      )}
      <span>
        <strong>{brandName}</strong>
        <small>{brandSubtitle}</small>
      </span>
    </Link>
  );
}
