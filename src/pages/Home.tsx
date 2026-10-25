import { TypeAnimation } from "react-type-animation";
import kia from "../assets/kia.jpg";
import { ArrowUpRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Cv from "../assets/CV_Hizkia_Siahaan.pdf";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
];


export default function Homepage() {
    return (
        <section id="home" className="flex min-h-screen items-center px-4  py-25">
            <div className="grid w-full max-w-7xl mx-auto items-center gap-12 md:grid-cols-2">

                <div>
                    <p className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-blue-600">
                        <span className="h-px w-8 bg-blue-600" />
                        Hello, I'm a Fresh Graduate
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                        Hizkia Siahaan
                    </h1>

                    <h2 className="mt-3 text-xl font-medium text-slate-500 md:text-2xl">
                        <TypeAnimation
                            sequence={roles.flatMap((role) => [role, 2000])}
                            wrapper="span"
                            speed={50}
                            deletionSpeed={50}
                            repeat={Infinity}
                            className="text-slate-500"
                        />
                    </h2>

                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <p className="max-w-lg leading-relaxed text-slate-600">
                            A recent graduate passionate about software development,
                            building modern web applications, and continuously
                            improving my programming skills.
                        </p>

                        <div className="shrink-0 relative border-l-2 border-slate-300 pl-4">
                            <p className="tect-[10px] font-medium tracking-wider text-slate-400">
                                GPA
                            </p>
                            <p className="text-lg font-bold text-slate-800">
                                3.73 <span className="text-xs font-medium text-slate-400"> / 4.00</span>
                            </p>
                            <div className="absolute  left-0 -top-5 -translate-x-1/2 translate-y-1/2  z-20 size-6 rounded-full border-4 border-white bg-blue-500" />
                        </div>
                    </div>

                    <Badge
                        variant="outline"
                        className="mt-6 flex h-auto w-fit items-center gap-4 rounded-full border-emerald-200/70 bg-emerald-50/70 px-4 py-3 text-xs font-medium tracking-wide text-emerald-800"
                    >
                        {/* Status */}
                        <span className="flex items-center gap-2 whitespace-nowrap">
                            <span className="relative flex size-2.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                            </span>

                            Open to Internship Opportunities
                        </span>

                        <Separator
                            orientation="vertical"
                            className="h-5 bg-emerald-300/80"
                        />
                       <Tooltip>
                        <TooltipTrigger
                        render={
                             <a
                            href="mailto:siahaanhizkia548@gmail.com"
                            className="whitespace-nowrap transition-colors hover:text-emerald-600"
                        >
                            siahaanhizkia548@gmail.com
                        </a>
                        }
                        />
                        <TooltipContent>
                            <p>Go to my email</p>
                        </TooltipContent>
                       </Tooltip>
                    </Badge>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Tooltip>
                            <TooltipTrigger render={
                                <a
                                    href={Cv}
                                    download
                                    className="group inline-flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-sm font-medium text-white shadow-xl shadow-slate-500/30 ring-2 ring-slate-500 ring-offset-2 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900"
                                >
                                    <Download size={16} />
                                    Download My CV
                                </a>
                            }
                            />
                            <TooltipContent>
                                <p> Download My CV</p>
                            </TooltipContent>
                        </Tooltip>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            <ArrowUpRight size={16} />
                            My Projects
                        </a>
                    </div>

                </div>



                <div className="relative group flex justify-center md:justify-end">
                    <div className="absolute inset-1 rounded-full bg-blue-200/40 blur-3xl" />

                    <div className="absolute right-3 top-3 hidden aspect-square w-full max-w-sm rounded-3xl border-2 border-slate-200 md:block" />

                    <img
                        src={kia}
                        alt="Hizkia Siahaan"
                        className="relative z-10 group-hover:translate-x-2 group-hover:-rotate-4 aspect-square w-full max-w-sm rounded-3xl border-4 border-white object-cover object-[center_20%] shadow-xl shadow-slate-900/10 transition-all duration-500 ease-in-out hover:saturate-0 hover:scale-105 hover:shadow-2xl"
                    />
                </div>


            </div>
        </section>
    );
}
