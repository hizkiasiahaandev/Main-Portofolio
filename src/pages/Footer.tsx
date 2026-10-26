import CustomTooltip from "@/components/ui/common/CustomTooltip";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footerpage() {
    return (
        <div className="max-w-7xl w-full mx-auto px-4 py-6 flex justify-between gap-4">
            <div>
                <p className="text-sm font-semibold text-slate-800">
                    Hizkia Portolio
                </p>
                <p className="text-xs text-slate-400 mt-1">
                    © 2026 All rights reserved.
                </p>
            </div>

            <div className="flex items-center gap-3">
                <CustomTooltip content="Github">
                    <a
                        href="https://github.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white/10 transition-all duration-300"
                    >
                        <FaGithub size={18} />
                    </a>

                </CustomTooltip>
               <CustomTooltip content="LinkedIn">
                 <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all duration-300"
                >
                    <FaLinkedin size={18} />
                </a>
               </CustomTooltip>

              <CustomTooltip content="Instagram">
                  <a
                    href="https://instagram.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-xl text-gray-400 hover:text-pink-400 hover:bg-white/10 transition-all duration-300"
                >
                    <FaInstagram size={18} />
                </a>
              </CustomTooltip>

              <CustomTooltip content="Email">
                  <a
                    href="mailto:email@example.com"
                    aria-label="Email"
                    className="p-2 rounded-xl text-gray-400 hover:text-green-400 hover:bg-white/10 transition-all duration-300"
                >
                    <FaEnvelope size={18} />
                </a>
              </CustomTooltip>

            </div>
        </div>
    )
}