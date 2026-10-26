import type { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

type CustomTooltipProps = {
    content: string;
    children: ReactNode
};


export default function CustomTooltip({
    content,
    children
}: CustomTooltipProps) {
    return (
        <Tooltip>
            <TooltipTrigger>
                {children}
            </TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    )
}