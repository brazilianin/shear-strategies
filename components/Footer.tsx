import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src="https://static.wixstatic.com/media/af7a90_2f13bc015f7f4cbbb65b56136435c59b~mv2.png"
              alt="Shear Strategies"
              width={56}
              height={56}
              className="mb-4"
            />
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Practical, mission-focused guidance for nonprofits ready to grow with confidence.
            </p>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {[["Home","/"],["About","/about"],["Services","/services"],["Contact","/contact"],["Blog","/blog"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/80 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <p className="text-sm text-white/80 mb-2">
              <a href="mailto:Brad@shearstrategies.com" className="hover:text-gold transition-colors">
                Brad@shearstrategies.com
              </a>
            </p>
            <p className="text-sm text-white/80">United States & Online</p>
            <Link href="/contact" className="mt-4 inline-block btn-outline text-sm py-2 px-5">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Shear Strategies LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
