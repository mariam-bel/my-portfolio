import React from "react";

interface CompanyLogoProps {
    name?: string;
    className?: string;
    showText?: boolean;
}

export function CompanyLogo({
                                name = "Herascientific",
                                className = "h-8 w-8",
                                showText = true,
                            }: CompanyLogoProps) {
    return (
        <span className="inline-flex items-center gap-2.5">
      <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={className}
      >
        <rect
            width="36"
            height="36"
            rx="10"
            className="fill-blue-600 dark:fill-blue-500"
        />
        <path
            d="M10 11.5V24.5M10 18H17.5M17.5 11.5V24.5"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M25.5 13.2C24.7 12.2 23.4 11.7 22 11.7C20.2 11.7 19 12.7 19 14.1C19 15.6 20.2 16.3 22.3 16.9C24.5 17.5 26 18.4 26 20.6C26 22.9 24.2 24.3 21.7 24.3C19.8 24.3 18.3 23.5 17.5 22.2"
            stroke="#BAE6FD"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
            {showText && (
                <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
          {name}
        </span>
            )}
    </span>
    );
}