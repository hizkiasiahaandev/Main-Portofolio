import { Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="w-full border-b border-slate-200/70 bg-white/90 text-slate-700 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5">
          <a href="#home" className="flex shrink-0 items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-teal-600 text-white">
              <Code2 size={19} strokeWidth={2} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-800 sm:text-base">
                Hizkia Portfolio
              </span>
              <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Fresh Graduate · 2026
              </span>
            </div>
          </a>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-700 sm:px-3 sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}