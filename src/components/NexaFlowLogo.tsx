import type { SVGProps } from "react";

interface NexaFlowLogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  badge?: boolean;
}

export function NexaFlowLogo({
  size = 32,
  badge = true,
  className = "",
  ...props
}: NexaFlowLogoProps) {
  if (!badge) {
    return (
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        {...props}
      >
        <path
          d="M7.5 24.5V7.5L18.5 24.5V7.5H25.5"
          stroke="url(#nfMarkGrad)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 15.5H24"
          stroke="url(#nfMarkGrad)"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="nfMarkGrad"
            x1="7.5"
            y1="7.5"
            x2="25.5"
            y2="24.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex shrink-0 items-center justify-center rounded-[10px] bg-[#09091B] border border-violet-500/25 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-500/50 dark:bg-[#0A081E] dark:border-white/10 ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        width={Math.round(size * 0.65)}
        height={Math.round(size * 0.65)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300"
        {...props}
      >
        <path
          d="M7.5 24.5V7.5L18.5 24.5V7.5H25.5"
          stroke="url(#nfBadgeGrad)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 15.5H24"
          stroke="url(#nfBadgeGrad)"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="nfBadgeGrad"
            x1="7.5"
            y1="7.5"
            x2="25.5"
            y2="24.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
