export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-2">Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gold">Blog &amp; Resources</h1>
          <p className="text-white/90 mt-4 text-lg max-w-xl">
            Practical perspectives on animal welfare leadership, organizational growth, and
            effective nonprofit strategy.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">Content Coming Soon</h2>
            <p className="text-[#4A4A4A] text-lg mb-8">
              Brad shares practical insights for animal welfare professionals on topics including
              strategic planning, board governance, succession planning, and organizational
              transformation. Check back soon for new articles.
            </p>
            <a href="/contact" className="btn-gold inline-block">
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* Topics preview */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-10 text-center">Topics We Cover</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Planning",
                desc: "Building multi-year roadmaps that actually get executed — not just filed away.",
              },
              {
                title: "Board Development",
                desc: "Structuring governance for accountability, engagement, and long-term impact.",
              },
              {
                title: "Succession Planning",
                desc: "Preparing for leadership transitions before they become crises.",
              },
              {
                title: "Organizational Assessment",
                desc: "Diagnosing what's working, what isn't, and where to focus first.",
              },
              {
                title: "Animal Welfare Operations",
                desc: "Applying shelter medicine and industry standards to improve outcomes.",
              },
              {
                title: "Executive Leadership",
                desc: "Reflections on serving as interim CEO/ED during organizational pivots.",
              },
            ].map((topic) => (
              <div key={topic.title} className="border border-gray-200 rounded-xl p-6 hover:border-gold/50 transition-colors">
                <h3 className="font-bold text-navy mb-2">{topic.title}</h3>
                <p className="text-sm text-[#4A4A4A]">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
