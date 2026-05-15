import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/data/site";

export function BusinessGrid() {
  return (
    <div className="businessGrid">
      {businesses.map((business) => (
        <Link className="businessTile" href={business.href} key={business.title}>
          <Image src={business.image} alt="" fill sizes="(max-width: 768px) 50vw, 16vw" />
          <span>{business.title}</span>
        </Link>
      ))}
    </div>
  );
}
