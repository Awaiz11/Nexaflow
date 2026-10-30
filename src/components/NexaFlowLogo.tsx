import Image from "next/image";

interface NexaFlowLogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  textSize?: string;
}

export function NexaFlowLogo({
  size = 38,
  showWordmark = true,
  className = "",
  textSize = "text-xl",
}: NexaFlowLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
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
          className="h-full w-full object-contain drop-shadow-[0_2px_10px_rgba(37,99,235,0.25)]"
        />
      </div>

      {/* 'NexaFlow' Wordmark */}
      {showWordmark && (
        <span
          className={`flex items-baseline font-bold tracking-tight text-[#09091B] dark:text-white ${textSize}`}
        >
          <span>Nexa</span>
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Flow
          </span>
        </span>
      )}
    </div>
  );
}
