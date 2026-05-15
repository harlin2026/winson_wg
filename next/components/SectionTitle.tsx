type SectionTitleProps = {
  children: string;
  lead?: string;
};

export function SectionTitle({ children, lead }: SectionTitleProps) {
  return (
    <div className="sectionTitle">
      <h2>{children}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}
