interface NexaFlowLogoProps {
  size?: number;
  className?: string;
}

export function NexaFlowLogo({ size = 36, className = "" }: NexaFlowLogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex shrink-0 items-center justify-center rounded-[10px] bg-[#0E0C22] shadow-[0_2px_10px_rgba(124,58,237,0.12)] border border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-violet-500/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] dark:bg-[#070514] dark:border-white/10 ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300"
      >
        <defs>
          <linearGradient
            id="nexaLogoMonogram"
            x1="10"
            y1="10"
            x2="30"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#DDD6FE" />
            <stop offset="70%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient
            id="nexaLogoBar"
            x1="22"
            y1="19.5"
            x2="28"
            y2="19.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
        </defs>

        {/* NexaFlow 'N' and 'F' Unified Monogram */}
        <path
          d="M10.5 29.5V10.5L22.5 29.5V10.5H29.5"
          stroke="url(#nexaLogoMonogram)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 'F' Horizontal Speed Stream */}
        <path
          d="M22.5 19.5H27.5"
          stroke="url(#nexaLogoBar)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
