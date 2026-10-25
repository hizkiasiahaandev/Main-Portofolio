import { Separator } from "@/components/ui/separator";
import { ArrowRight, ArrowUpRight, Code2, Mail, Menu, Sparkles, X } from "lucide-react";
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

    window.removeEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="w-full border-b border-slate-200/70 bg-white/90 text-slate-700 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="#home" className="flex group relative isolate p-1 shrink-0 items-center gap-2.5">

            <div className="pointer-events-none absolute -inset-px -z-10 overflow-hidden rounded-xl">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#94a3b8_330deg,#fff_350deg,transparent_360deg)]" />
            </div>
            <div className="pointer-events-none absolute inset-px -z-10 rounded-[11px] bg-white" />

            <div className="inline-flex size-11 items-center justify-center rounded-lg bg-slate-800 text-white">
              <Code2 size={19} strokeWidth={2} />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-800">
                Hizkia Portfolio
              </span>
              <span className="text-[12px] font-medium text-slate-500 sm:text-xs">
                Fresh Graduate · 2026
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
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
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}


      <div className={`fixed flex flex-col inset-y-0 right-0 z-50 w-64 bg-white p-6 shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
        }`}>

        <div className="mb-6 leading-none">
          <p className="text-lg font-bold text-slate-800">Navigation</p>
          <span className="text-[11px] text-slate-500">
            Explore my portfolio
          </span>
          <Separator className="h-px my-3 bg-slate-200" />
        </div>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between gap-3  rounded-xl transition-colors px-3 py-3 text-slate-700 hover:bg-slate-50"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold">
                {link.label}
              </span>
              <span className="text-[11px] text-slate-500">
                {link.description}
              </span>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0 group-hover:text-slate-700"
            />
          </a>
        ))}

        <div className="mt-auto pt-8">

          <div className="rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                <Code2 size={18} />
              </div>

              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Technologies
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-800">
              My Tech Stack
            </p>

            <p className="text-xs leading-relaxed text-slate-500">
              Tools and technologies I use to build applications.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Prisma", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-600 transition-all hover:border-slate-400 hover:text-slate-900"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-5 pt-4">
            <Separator className="my-3 h-px bg-slate-200" />
            <p className="text-center text-[11px] text-slate-400">
              © 2026 Hizkia Portfolio
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}