import React from "react";

type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const InstagramIcon = ({
  className,
  width = 20,
  height = 20,
}: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.51 5.51 0 0012 7.5zm0 9A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 16.5zm5.25-9.75a1.25 1.25 0 11-1.25-1.25 1.25 1.25 0 011.25 1.25z" />
  </svg>
);

export const FacebookIcon = ({
  className,
  width = 20,
  height = 20,
}: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
  </svg>
);

export const TikTokIcon = ({
  className,
  width = 20,
  height = 20,
}: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M21 8.1a6.6 6.6 0 01-3.8-1.2v7.2a5.9 5.9 0 11-5.9-5.9c.2 0 .4 0 .6.1v3a2.9 2.9 0 10 2.9 2.9V2h2.7a6.6 6.6 0 003.5 3.6z" />
  </svg>
);

export const TwitterXIcon = ({
  className,
  width = 20,
  height = 20,
}: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M18.9 2H22l-7.3 8.4L23.3 22h-6.8l-5.3-6.6L5.5 22H2.4l7.8-9L1 2h6.9l4.8 6L18.9 2z" />
  </svg>
);

export const YouTubeIcon = ({
  className,
  width = 20,
  height = 20,
}: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-2-1-2.5-1C16.2 4 12 4 12 4h0s-4.2 0-7.6.2c-.5 0-1.6.1-2.5 1C1.2 5.9 1 7.5 1 7.5S.8 9.3.8 11v2c0 1.7.2 3.5.2 3.5s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 7.5.2 7.5.2s4.2 0 7.6-.2c.5 0 1.6-.1 2.5-1 .7-.7.9-2.3.9-2.3s.2-1.7.2-3.5v-2c0-1.7-.2-3.5-.2-3.5zM9.8 14.7V8.8l5.4 3z" />
  </svg>
);

export const LinkedInIcon = ({
  className,
  width = 20,
  height = 20,
}: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
