import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ImageTooltip() {
  return (
    <TooltipProvider>
      <div className="relative inline-block">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-21%20at%2011.46.54%E2%80%AFAM-sS4uG3rAyuSKuHovNTKDu0Uk8q74El.png"
          alt="Two people posing in front of a building"
          width={1920}
          height={1080}
          className="block w-full opacity-100 grayscale"
          priority
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 scale-[2] animate-pulse">
              💡
            </div>
          </TooltipTrigger>
          <TooltipContent>Person 1</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="absolute top-[20%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 animate-pulse scale-[2]">
              💡
            </div>
          </TooltipTrigger>
          <TooltipContent>Person 2</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
