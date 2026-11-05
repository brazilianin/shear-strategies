export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-2">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gold">Plan Your Growth</h1>
          <p className="text-white/90 mt-4 text-lg max-w-xl">
            Unlock your potential with Shear Strategies. Schedule a consultation to define your
            roadmap and start building for success.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8">Send a Message</h2>
            <form
              action="https://formspree.io/f/Brad@shearstrategies.com"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Organization</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Enter your organization name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                />
              </div>
              <button type="submit" className="btn-gold w-full text-center py-4 text-base">
                Submit
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch Directly</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">Email</p>
                  <a href="mailto:Brad@shearstrategies.com" className="text-gold hover:underline">
                    Brad@shearstrategies.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">Location</p>
                  <p className="text-[#4A4A4A] text-sm">United States &amp; Online</p>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-8">
              <h3 className="font-bold text-navy text-xl mb-3">What to Expect</h3>
              <ul className="space-y-3 text-sm text-[#4A4A4A]">
                {[
                  "A response within one business day",
                  "A no-pressure discovery conversation",
                  "Honest advice about what your organization actually needs",
                  "A clear proposal if we decide to move forward together",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
