interface SectionHeaderProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
  readonly centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, centered = true }: Readonly<SectionHeaderProps>) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow && <p className="mb-2 text-lg font-medium text-orange-400">{eyebrow}</p>}
      <h2 className="mb-4 text-4xl font-light text-gray-800">{title}</h2>
      {description && <p className="mx-auto max-w-[600px] text-lg leading-7 text-gray-600">{description}</p>}
    </div>
  );
}
