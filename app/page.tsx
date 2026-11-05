import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Strategic Planning",
    desc: "I design comprehensive roadmaps that align your mission, vision, and resources so your organization can grow with confidence.",
    icon: "https://static.wixstatic.com/media/bec794_1acb51ff50e04a96be3c374e3de3b11b~mv2.png",
  },
  {
    title: "Operational Excellence",
    desc: "I optimize internal workflows to maximize efficiency, improve collaboration, and ensure your team has what it needs to deliver impact.",
    icon: "https://static.wixstatic.com/media/bec794_56a1c5571a714b4e8e4998e86d83b0e3~mv2.png",
  },
  {
    title: "Board Development",
    desc: "A strong board governance structure is vital to any organization. I help align the board and staff to set you up for success.",
    icon: "https://static.wixstatic.com/media/bec794_32286fec67ca4e2b9eb0af8d2aa5fcff~mv2.png",
  },
];

const stats = [
  { number: "30+", label: "Years in Nonprofits" },
  { number: "25+", label: "Years in Executive Leadership" },
  { number: "6", label: "Core Service Areas" },
  { number: "100%", label: "Mission-Focused" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">Nonprofit Consulting</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gold leading-tight mb-6">
              Guidance That Moves You Forward
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-lg">
              Shear Strategies helps nonprofits move forward with clear strategy, practical
              solutions, and support tailored to your organization&apos;s needs. Led by an experienced
              nonprofit professional with more than 25 years of executive experience, I provide
              practical, mission-focused guidance in strategy, operations, and leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-gold">
                Explore Services
              </Link>
              <Link href="/about" className="btn-outline text-white border-white hover:bg-white hover:text-navy">
                Learn About Brad
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://static.wixstatic.com/media/bec794_da1bdbdbb02c4be999875fb9ac74a6bb~mv2.jpg"
              alt="Strategic guidance for nonprofits"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ number, label }) => (
            <div key={label}>
              <p className="text-gold text-3xl font-bold">{number}</p>
              <p className="text-white/70 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-cream-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Expertise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ title, desc, icon }) => (
              <div key={title} className="bg-cream rounded-xl p-8 flex flex-col items-start">
                <Image src={icon} alt={title} width={80} height={80} className="mb-6" />
                <h3 className="text-navy font-bold text-xl mb-3">{title}</h3>
                <p className="text-[#4A4A4A] leading-relaxed text-sm flex-1">{desc}</p>
                <Link href="/services" className="mt-6 text-gold font-semibold text-sm hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-gold">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Ready to Move Your Organization Forward?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule a consultation and start building the roadmap your nonprofit needs.
          </p>
          <Link href="/contact" className="btn-gold text-lg px-10 py-4">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
