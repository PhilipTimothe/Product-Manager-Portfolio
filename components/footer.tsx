import { Container } from './container';
import Link from 'next/link';

export function Footer() {
  const sectionLinks = [
    { number: '1', name: 'Home', href: '/' },
    { number: '2', name: 'About', href: '/about' },
    { number: '3', name: 'LinkedIn', href: 'https://www.linkedin.com/in/philiptimothe/' },
  ];

  return (
    <>
      <footer className="bg-cream py-16">
        <Container>
          <div className="grid grid-cols-6 gap-8">
            {/* Left column: Personal info and section links - spans 3 columns */}
            <div className="col-span-3 space-y-4">
              {/* Personal info */}
              <div>
                <h3 className="text-[14px] font-sans font-light text-black">
                  Philip Timothe
                </h3>
                <p className="text-[14px] text-black/50 font-light">
                  Building tools, telling stories, finding patterns.
                </p>
                <p className="text-[14px] text-black/50 font-light">
                  © 2025 – A small story in the vast web.
                </p>
              </div>
              
              {/* Section links */}
              <div className="space-y-3">
                {sectionLinks.map((link) => (
                  <div key={link.number} className="flex items-center gap-4">
                    <span className="text-[12px] text-black/40 font-mono w-4">
                      {link.number}
                    </span>
                    <div className="flex-1 border-t border-black/10"></div>
                    <Link
                      href={link.href}
                     target={link.href.startsWith('http') ? '_blank' : undefined}
                     rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[14px] text-black/70 hover:text-black transition-colors duration-200 font-light"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Middle column: Empty for spacing */}
            <div></div>
            
            {/* Right column: Empty for now */}
            <div></div>
          </div>
        </Container>
      </footer>
    </>
  );
}