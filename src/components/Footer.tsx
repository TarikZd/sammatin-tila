import { Mail } from "lucide-react";
import { useContent } from "../hooks/useLang";

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const iconMap: Record<string, (size: number) => React.ReactNode> = {
  facebook: (s) => <FacebookIcon size={s} />,
  instagram: (s) => <InstagramIcon size={s} />,
  email: (s) => <Mail size={s} />,
};

export default function Footer() {
  const c = useContent();

  return (
    <footer className="bg-charcoal text-cream/80 py-12">
      <div className="content-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">{c.footer.copyright}</p>

          <div className="flex items-center gap-4">
            {c.footer.social.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full hover:bg-cream/10 transition-colors"
              >
                {iconMap[link.icon](18)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
