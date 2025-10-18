import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { FaYoutube, FaMedium } from 'react-icons/fa';
import { SiSlack, SiTableau, SiMulesoft, SiHeroku, SiQuip } from 'react-icons/si';
import salesforceLogo from '@/../Images/salesforcelogo4.svg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Salesforce Releases', href: '/salesforce-releases' },
  { name: 'Career Paths', href: '/career-paths' },
];

const resourceLinks = [
  { name: 'Articles', href: '/resources' },
  { name: 'Youtube', href: 'https://www.youtube.com/@salesforce101' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/samet-yazar-17bb8817b/' },
];

const social = [
  { Icon: FaMedium, href: 'https://medium.com/@road.to.salesforce', label: 'Medium' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/samet-yazar-17bb8817b/', label: 'LinkedIn' },
  { Icon: FaYoutube, href: 'https://www.youtube.com/@salesforce101', label: 'YouTube' },
];

// Helper to get rgba from hex for translucent backgrounds/borders
function hexToRgba(hex: string, alpha = 1) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function isDarkColor(hex: string) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  // perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000; // 0-255
  return brightness < 140; // threshold for dark
}

// Only brands with official icons
const brands = [
  { name: 'Slack', color: '#4A154B', Icon: SiSlack },
  { name: 'Tableau', color: '#E97627', Icon: SiTableau },
  { name: 'MuleSoft', color: '#00A1DF', Icon: SiMulesoft },
  { name: 'Heroku', color: '#430098', Icon: SiHeroku },
  { name: 'Quip', color: '#2E9FFF', Icon: SiQuip },
] as const;

// Build a longer base then duplicate once for seamless -50% translate
const marqueeBase = Array.from({ length: 3 }).flatMap(() => brands);
const marqueeItems = marqueeBase.concat(marqueeBase);

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-gray-200/30 dark:border-gray-800/80 bg-[#0b0727] dark:bg-[#0b0727] text-white/90">
      {/* Decorative belt with animated subsidiaries */}
      <div className="footer-belt w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 relative">
          {/* edge fades for modern look */}
          <div className="marquee__fade marquee__fade--left" aria-hidden />
          <div className="marquee__fade marquee__fade--right" aria-hidden />
          {/* subtle particles */}
          <div className="belt-particles" aria-hidden />

          <div className="marquee" aria-label="Salesforce subsidiaries and brands">
            <div className="marquee__track">
              {marqueeItems.map((b, i) => {
                const forceWhite = ['Slack', 'Heroku'].includes(b.name);
                const useWhite = forceWhite || isDarkColor(b.color);
                const iconColor = useWhite ? '#ffffff' : b.color;
                const wrapperStyle = {
                  filter: `drop-shadow(0 0 10px ${hexToRgba(b.color, 0.28)}) drop-shadow(0 0 24px ${hexToRgba(b.color, 0.18)})`,
                } as React.CSSProperties;
                const glowStyle = {
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '9999px',
                  background: `radial-gradient(closest-side, ${hexToRgba(b.color, 0.16)}, transparent 70%)`,
                  filter: 'blur(12px)',
                  opacity: 0.9,
                  pointerEvents: 'none',
                } as React.CSSProperties;
                const Icon = b.Icon;
                return (
                  <span
                    key={`${b.name}-${i}`}
                    className="brand-float relative inline-flex items-center justify-center"
                    style={wrapperStyle}
                    aria-label={b.name}
                    title={b.name}
                  >
                    <span className="-z-10 absolute" style={glowStyle} aria-hidden />
                    <Icon size={28} className="md:scale-110 lg:scale-125" color={iconColor} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <Image
                src={salesforceLogo}
                alt="Salesforce101 Logo"
                width={360}
                height={110}
                className="h-24 w-auto md:h-28 lg:h-32 max-w-none"
                priority={false}
              />
              <span className="sr-only">Salesforce 101</span>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Designing clear Salesforce learning experiences and scalable content. Open for impactful collaboration.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-6 font-semibold tracking-widest text-sm uppercase flex items-center gap-2 -ml-4">
              <span className="inline-block w-2 h-2 rounded-full bg-salesforce-indigo" />
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-white/80 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 font-semibold tracking-widest text-sm uppercase flex items-center gap-2 -ml-4">
              <span className="inline-block w-2 h-2 rounded-full bg-salesforce-indigo" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-white/80 hover:text-white transition-colors" target={l.href.startsWith('http') ? '_blank' : undefined}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-semibold tracking-widest text-sm uppercase flex items-center gap-2 -ml-4">
              <span className="inline-block w-2 h-2 rounded-full bg-salesforce-indigo" />
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <FiMail className="text-salesforce-indigo" />
                <a href="mailto:yzr.salih@gmail.com" className="hover:text-white">salesforce101@gmail.com</a>
              </li>
              <li className="text-white/70">Warsaw / Remote</li>
              <li className="flex items-center gap-3 text-white/80">
                <FiLinkedin className="text-salesforce-indigo" />
                <Link href="https://www.linkedin.com/in/samet-yazar-17bb8817b/" target="_blank" className="hover:text-white">
                  Profile ↗
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Social pills */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {social.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition"
              aria-label={label}
            >
              <Icon className="text-white" />
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-white/60">© {new Date().getFullYear()} Salesforce101. All rights reserved.</p>
      </div>
    </footer>
  );
}
