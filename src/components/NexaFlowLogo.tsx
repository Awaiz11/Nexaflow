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
  textSize = "text-xl sm:text-2xl",
}: NexaFlowLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Ribbon 'NF' Emblem */}
      <div
        style={{ width: size, height: size }}
        className="relative flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105"
      >
        <Image
          src="/icon-512.png"
          alt=""
          width={size * 2}
          height={size * 2}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      {/* 'NexaFlow' Wordmark */}
      {showWordmark && (
        <span
          className={`flex items-baseline font-bold tracking-tight text-ink ${textSize}`}
        >
          <span>Nexa</span>
          <span className="text-brand">
            Flow
          </span>
        </span>
      )}
    </div>
  );
}
