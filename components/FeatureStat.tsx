export default function FeatureStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="lg:text-right">
      <p className="eyebrow mb-1">{label}</p>
      <p className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">{value}</p>
    </div>
  );
}
