import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-slate py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-2">About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gold">Background &amp; Approach</h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Image
              src="https://static.wixstatic.com/media/bec794_99e8cb90f9994f6c8d5e56617acaf94b~mv2.jpg"
              alt="Photo of Brad Shear"
              width={480}
              height={600}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
          <div className="pt-4">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Brad Shear, Principal</p>
            <h2 className="text-3xl font-bold text-navy mb-6 leading-tight">
              My mission is to strengthen nonprofits through experience, clarity, and purpose.
            </h2>
            <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
              <p>
                Shear Strategies is a nonprofit consulting practice built on 30 years of work in
                nonprofits — starting in direct service programmatic work and for the last 25 years,
                in hands-on leadership in mission-driven organizations.
              </p>
              <p>
                I help nonprofits sharpen their strategy, strengthen operations, and elevate
                leadership performance so they can deliver greater impact with confidence.
              </p>
              <p>
                I&apos;ve focused much of my career on all aspects of Animal Welfare organizations and
                have experience that applies to any nonprofit that wants to grow.
              </p>
              <p>
                My work is grounded in real world experience, guiding organizations through growth,
                transition, financial challenges, board development, and complex community
                expectations. Whether you need a strategic plan that actually gets used, an
                operational assessment that reveals what&apos;s holding you back, or leadership coaching
                that builds capacity across your team, Shear Strategies provides practical,
                actionable guidance shaped by decades of executive insight.
              </p>
              <p>
                I partner with nonprofits of all sizes to create clarity, align people and
                processes, and move organizations forward with purpose.
              </p>
            </div>
            <Link href="/contact" className="btn-gold mt-8 inline-block">
              Work with Brad
            </Link>
          </div>
        </div>
      </section>

      {/* Key strengths */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: "30", label: "Years in Nonprofits" },
              { n: "25", label: "Years Executive Leadership" },
              { n: "Animal\nWelfare", label: "Sector Specialist" },
              { n: "All\nSizes", label: "Organizations Served" },
            ].map(({ n, label }) => (
              <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-navy font-bold text-2xl whitespace-pre-line leading-tight">{n}+</p>
                <p className="text-[#4A4A4A] text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">Ready to work together?</h2>
          <p className="text-white/80 mb-8">
            Let&apos;s talk about where your organization is now and where you want to go.
          </p>
          <Link href="/contact" className="btn-gold">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
