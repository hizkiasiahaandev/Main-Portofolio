import { FaCode } from "react-icons/fa";

type PageLoaderProps = {
    title?: string;
    subtitle: string
};

export default function PageLoader({
    title,
    subtitle
}: PageLoaderProps) {
    return (
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white to-slate-900">
            <div className="relative mb-6 flex size-22 items-center justify-center">
                <span className="absolute inline-flex size-16 animate-ping rounded-full bg-slate-400 opacity-30" />
                <span className="absolute inline-flex size-16 animate-ping rounded-full bg-slate-400 opacity-30 [animation-delay:700ms]" />
                <span className="absolute inline-flex size-16 animate-ping rounded-full bg-slate-400 opacity-30 [animation-delay:1400ms]" />

                <div className="relative flex size-16 items-center justify-center rounded-full bg-slate-800">
                    <FaCode
                        size={32}
                        className="text-slate-50"
                    />
                </div>
            </div>

            <h1 className="text-xl font-semibold tracking-tight">
                {title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
                {subtitle}
            </p>

            <div className="mt-5 flex gap-1.5">
                {[0, 1, 2, 3, 4].map((dot) => (
                    <span
                        key={dot}
                        className="size-1.5 animate-bounce rounded-full bg-slate-800"
                        style={{
                            animationDelay: `${dot + 150}ms`
                        }}
                    />
                ))}
            </div>
        </div>
    )
}