import { Badge } from "@/components/ui/badge";
import { Code2, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Software Development",
        description:
            "Interested in building modern, responsive, and maintainable web applications.",
    },
    {
        icon: Lightbulb,
        title: "Continuous Learning",
        description:
            "Always exploring new technologies and improving my problem-solving skills.",
    },
    {
        icon: Rocket,
        title: "Career Growth",
        description:
            "Looking for opportunities to gain practical experience and grow as a developer.",
    },
];

export default function Aboutpage() {
    return (
        <section id="about" className="px-4">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-blue-600">
                        <span className="h-px w-8 bg-blue-600" />
                        About Me
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        A little more about{" "}
                        <span className="text-slate-500">me.</span>
                    </h2>


                    <p className="mt-5 leading-relaxed text-slate-600">
                        I graduated from Universitas Sumatera Utara (USU) in 2026
                        with a Diploma (D3) in Informatics Engineering. I'm passionate
                        about software development and building modern web applications
                        while continuously improving my technical skills.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
                            >
                                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-800 group-hover:text-white">
                                    <Icon size={21} />
                                </div>

                                <p className="mb-2 text-xs font-medium tracking-widest text-slate-400">
                                    0{index + 1}
                                </p>

                                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 shadow-sm">
                            <GraduationCap size={22} />
                        </div>


                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Education & Background
                            </h3>
                            <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
                                Graduated in 2026 with a Diploma (D3) in Informatics
                                Engineering. Achieved a GPA of 3.73/4.00 and am ready
                                to apply my technical knowledge and grow as a software
                                developer.
                            </p>
                        </div>

                    </div>

                    <Badge
                        variant="outline"
                        className="w-fit shrink-0 gap-2 rounded-full border-emerald-200 bg-emerald-50 px-3 py-3 text-xs font-medium text-emerald-700"
                    >
                        <span className="size-2 rounded-full bg-emerald-500" />
                        Open to Opportunities
                    </Badge>
                </div>
            </div>
        </section>
    );
}
