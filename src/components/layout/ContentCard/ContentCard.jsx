export default function ContentCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl shadow-2xl p-6 sm:p-12 space-y-10 border border-white/20 bg-white/75 ${className}`}
    >
      {children}
    </div>
  );
}
