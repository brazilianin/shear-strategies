import Image from "next/image";
import Link from "next/link";

const coreServices = [
  {
    title: "Organizational Assessment",
    desc: "Your programs address the essential needs of the community; they should be as effective and efficient as possible. I can help you understand where bottlenecks are forming, help you meet industry standards, and implement best practices. I'll take you from assessment to implementation for better operations.",
    img: "https://static.wixstatic.com/media/11062b_2a999823c0db4a729d2f1e8cece8acfd~mv2.jpeg",
    imgAlt: "Volunteer with animals",
  },
  {
    title: "Strategic Planning",
    desc: "I provide in-depth strategic planning tailored to nonprofit organizations. Effective organizations define clear goals, develop actionable roadmaps, and align organizational resources for sustainable growth. Clients receive strategic documents and implementation guidelines to advance their mission.",
    img: "https://static.wixstatic.com/media/11062b_43a3f02d0fc047d98b072772f69ced0e~mv2_d_3879_2787_s_4_2.jpg",
    imgAlt: "Office meeting",
  },
  {
    title: "Board Development",
    desc: "Good governance is the baseline for effective nonprofit organizations. I will help your board understand their roles and responsibilities to create positive relationships with the staff and community. Your board should be your biggest advocates — I help them focus on how they can help your organization grow.",
    img: "https://static.wixstatic.com/media/11062b_aed04672a6304ceca0e3c34540ac2a89~mv2.jpg",
    imgAlt: "Professional team",
  },
];

const specializedServices = [
  {
    title: "Executive Succession Planning",
    desc: "Executive succession is vital to the continued success of your organization. Our Executive Succession Planning services provide a structured approach that not only mitigates risks but also positions your nonprofit for sustained growth. Make your executive transition a launching pad, not a burden.",
    img: "https://static.wixstatic.com/media/5da6025daca645e7baee50a929fe5b82.jpg",
    imgAlt: "Business discussion",
  },
  {
    title: "Interim CEO / Executive Director",
    desc: "My Interim CEO/Executive Director service offers expert leadership for nonprofits, leveraging over 25 years of experience to navigate transitions smoothly. I conduct a comprehensive organizational assessment to identify strengths and areas for growth, ensuring your mission remains on track. We also provide executive search services to find permanent leaders who align with your vision.",
    img: "https://static.wixstatic.com/media/ea2ded871fb834580ae155324f58345d.jpg",
    imgAlt: "Team high five",
  },
  {
    title: "Animal Welfare Operations",
    desc: "I've spent more than 25 years running animal welfare organizations — from municipal animal control and high-volume urban shelters to regional humane societies with veterinary clinics and community programs. That experience lets me get to work on day one, whether the challenge is intake flow, length of stay, spay/neuter programs, or municipal contracts. I ensure your organization follows HSUS, ASPCA, and ASV best practices and builds practical policies your team can actually use.",
    img: "https://static.wixstatic.com/media/11062b_2a999823c0db4a729d2f1e8cece8acfd~mv2.jpeg",
    imgAlt: "Animal welfare operations",
  },
];

const whyUs = [
  "With over 25 years of leadership experience in nonprofits, I've gathered experience that can benefit you with actionable advice.",
  "With a specialization in Animal Welfare, I can help you improve your organization's impact on your community.",
  "It can be lonely at the top. Nonprofit leaders need an experienced confidant to provide feedback and guidance when you face your most difficult challenges.",
  "My background is in doing hands-on work, so I understand how important it is to walk away with real-world tools you can use today.",
];

const faqs = [
  { q: "What kind of nonprofits do you work with?", a: "I work with nonprofits of all sizes, from small community organizations to large regional agencies. My background is deepest in animal welfare but I bring value to any mission-driven organization." },
  { q: "How do we know what services we need?", a: "We'll start with a conversation about your organization's current state and goals. From there I can recommend which services would be most impactful." },
  { q: "What does your process look like?", a: "Every engagement starts with a listening phase — understanding your mission, your team, and your challenges. Then we move to assessment, then to co-creating actionable solutions you'll actually use." },
  { q: "Do you work remotely or on site?", a: "Both. I work across the United States and can deliver most services remotely, with on-site visits when the work calls for it." },
  { q: "What makes you different?", a: "I'm not a traditional consultant who delivers a report and disappears. My goal is to leave you with practical tools and increased capacity, not dependency." },
  { q: "Do you work with staff or boards?", a: "Both. Many of my engagements involve working with the entire leadership team — executive staff and board — to align strategy and strengthen governance." },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-2">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">What We Do</h1>
          <p className="text-white/90 max-w-2xl text-lg leading-relaxed">
            No matter what service I provide, I am grounded in practical, real world solutions.
            For 30 years I have been working in nonprofits that deliver services 365 days a year no
            matter the challenges. I cut through consultant speak to actionable solutions customized
            to your needs and capabilities.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-2">Core Services</p>
            <h2 className="text-3xl font-bold text-navy">Strategy, Operations & Governance</h2>
          </div>
          <div className="space-y-16">
            {coreServices.map(({ title, desc, img, imgAlt }, i) => (
              <div key={title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <Image
                    src={img}
                    alt={imgAlt}
                    width={560}
                    height={300}
                    className="rounded-xl object-cover w-full h-64 shadow-md"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-2">Specialized Services</p>
            <h2 className="text-3xl font-bold text-navy">Leadership & Specialized Support</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specializedServices.map(({ title, desc, img, imgAlt }) => (
              <div key={title} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={img}
                  alt={imgAlt}
                  width={400}
                  height={220}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partners choose us */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-white">Why Partners Choose Shear Strategies</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyUs.map((point, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-gold text-2xl font-bold leading-none mt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/80 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="section-label mb-2">FAQ</p>
            <h2 className="text-3xl font-bold text-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-navy text-lg mb-2">{q}</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Schedule a consultation and let&apos;s build a roadmap for your organization&apos;s success.
          </p>
          <Link href="/contact" className="btn-gold text-lg px-10 py-4">
            Contact Brad
          </Link>
        </div>
      </section>
    </>
  );
}
