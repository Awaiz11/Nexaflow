import Image from "next/image";

interface NexaFlowLogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  textSize?: string;
}

export function NexaFlowLogo({
  size = 40,
  showWordmark = true,
  className = "",
  textSize = "text-[22px]",
}: NexaFlowLogoProps) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* 3D Ribbon 'NF' Emblem */}
      <div
        style={{ width: size, height: size }}
        className="relative flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105"
      >
        <Image
          src="/icon-512.png"
          alt="NexaFlow NF Emblem"
          width={size * 2}
          height={size * 2}
          priority
          className="h-full w-full object-contain drop-shadow-[0_2px_12px_rgba(37,99,235,0.25)]"
        />
      </div>

      {/* 'NexaFlow' Wordmark & 'WEBSITE-AS-A-SERVICE' Tagline */}
      {showWordmark && (
        <div className="flex flex-col justify-center">
          <div className={`flex items-baseline font-bold tracking-tight leading-none text-[#09091B] dark:text-[#FFFFFF] ${textSize}`}>
            <span>Nexa</span>
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Flow
            </span>
          </div>
          <span className="mt-1 font-mono text-[7px] font-bold tracking-[0.26em] text-slate-500 dark:text-slate-400 uppercase leading-none">
            WEBSITE-AS-A-SERVICE
          </span>
        </div>
      )}
    </div>
  );
}
