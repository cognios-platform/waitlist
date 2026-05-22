"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "delete";
  size?: "extra-small" | "small" | "medium" | "large";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  title?: string;
}

export default function Button({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  title,
  ...props
}: ButtonProps) {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${
    fullWidth ? styles.fullWidth : ""
  } ${isLoading ? styles.loading : ""} ${
    disabled || isLoading ? styles.disabled : ""
  } ${className || ""}`.trim();

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      title={title}
      aria-label={title}
      {...props}
    >
      {isLoading && (
        <span className={styles.spinner} aria-hidden="true">
          <svg
            className={styles.spinnerIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="2s"
                values="0 32;16 16;0 32;0 32"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                values="0;-16;-32;-32"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </span>
      )}
      {!isLoading && leftIcon && (
        <span className={styles.leftIcon} aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span className={styles.content}>{children}</span>
      {!isLoading && rightIcon && (
        <span className={styles.rightIcon} aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
