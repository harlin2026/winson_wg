import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="container breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label}>
          <span>/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <b>{item.label}</b>}
        </span>
      ))}
    </div>
  );
}
