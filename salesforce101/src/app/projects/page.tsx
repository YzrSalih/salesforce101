export const metadata = { title: "Projects • Salesforce101" };

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh px-6 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-2 text-base opacity-80">Örnek projeler, demolar ve eğitim içerikleri.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Örnek Proje {i}</h3>
            <p className="mt-2 opacity-80 text-sm">Kısa açıklama metni burada.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
