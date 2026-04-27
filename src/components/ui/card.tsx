export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)]">
      {children}
    </div>
  );
}