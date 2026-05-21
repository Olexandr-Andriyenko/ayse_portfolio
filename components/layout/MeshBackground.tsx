export function MeshBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-50"
    >
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-yellow-100/50 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
    </div>
  );
}
