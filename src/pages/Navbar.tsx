import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Code2, Menu, Tag, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  description: string;
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "#home",
    description: "Welcome to my portfolio",
  },
  {
    label: "About",
    href: "#about",
    description: "Get to know me better",
  },
  {
    label: "Projects",
    href: "#projects",
    description: "Explore my work and projects",
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Let's connect and collaborate",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="w-full border-b border-slate-200/70 bg-white/90 text-slate-700 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a
            href="#home"
            className="group relative isolate flex shrink-0 items-center gap-2.5 p-1"
          >
            <div className="pointer-events-none absolute -inset-px -z-10 overflow-hidden rounded-xl">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#94a3b8_330deg,#fff_350deg,transparent_360deg)]" />
            </div>
            <div className="pointer-events-none absolute inset-px -z-10 rounded-[11px] bg-white" />

            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-800">
                Hizkia Portfolio
              </span>
              <span className="text-[12px] font-medium text-slate-500 sm:text-xs">
                Fresh Graduate · 2026
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-700 sm:px-3 sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-xs md:hidden"
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white p-6 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <div>
          <p className="text-base font-bold text-slate-900">Navigation</p>
          <span className="text-xs text-slate-500">Explore my portfolio</span>
        </div>


        <Separator className="my-2 h-px bg-slate-100" />

        <div className="mt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-xl p-3 transition-all hover:bg-slate-50 active:bg-slate-100"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-950">
                  {link.label}
                </span>
                <span className="text-[11px] text-slate-500">
                  {link.description}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-900"
              />
            </a>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex size-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Code2 size={16} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Technologies
              </span>
            </div>

            <p className="text-xs font-bold text-slate-900">My Tech Stack</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
              Tools and technologies I use to build applications.
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {["React", "TypeScript", "Node.js", "Prisma", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md inline-flex border gap-1 border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-700 shadow-2xs"
                  >
                    <Tag size={12} className="text-slate-700" /> {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-4 text-center">
            <Separator className="mb-3 h-px bg-slate-100" />
            <p className="text-[11px] font-medium text-slate-400">
              © 2026 Hizkia Portfolio
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}