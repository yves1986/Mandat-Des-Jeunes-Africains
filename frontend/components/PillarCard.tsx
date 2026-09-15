type PillarCardProps = {
  index: number;
  title: string;
  description: string;
};

export default function PillarCard({ index, title, description }: PillarCardProps) {
  return (
    <div className="card flex flex-col gap-4 p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-lg font-extrabold text-white">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-xl font-bold text-brand-brown-dark">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-brown-dark/70">{description}</p>
    </div>
  );
}
