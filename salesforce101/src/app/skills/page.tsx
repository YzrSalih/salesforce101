export const metadata = { title: "Skills • Salesforce101" };

export default function SkillsPage() {
  return (
    <main className="min-h-dvh px-6 py-16">
      <h1 className="text-4xl font-bold">Skills</h1>
      <p className="mt-2 text-base opacity-80">Salesforce ekosisteminde teknik ve iş odaklı yetenekler.</p>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Admin", desc: "Objeler, alanlar, güvenlik, otomasyon." },
          { title: "Developer", desc: "Apex, LWC, API, entegrasyon." },
          { title: "Architect", desc: "Tasarım desenleri, ölçeklenebilirlik, yönetim." },
          { title: "DevOps", desc: "CI/CD, paketleme, sürümleme." },
          { title: "Analytics", desc: "Reports, Dashboards, CRM Analytics." },
          { title: "Platform", desc: "Sales, Service, Experience Cloud vb." },
        ].map((item) => (
          <article key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 opacity-80 text-sm">{item.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
