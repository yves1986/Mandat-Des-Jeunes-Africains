export default function VideoCard({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl2 bg-brand-brown-dark shadow-card">
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand-green-dark to-brand-brown-dark">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-brown-dark shadow-lg transition-transform group-hover:scale-110">
          ▶
        </span>
        <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-0.5 text-xs font-semibold text-white">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-brand-cream">{title}</p>
      </div>
    </div>
  );
}
