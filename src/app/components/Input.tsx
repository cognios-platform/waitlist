"use client";

import React, {
  forwardRef,
  useId,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Input.module.scss";

export type InputSize = "small" | "medium" | "large";
export type InputVariant = "default" | "outlined" | "filled";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  hint?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rightIconClickable?: boolean;
  fullWidth?: boolean;
  size?: InputSize;
  variant?: InputVariant;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      helperText,
      leftIcon,
      rightIcon,
      rightIconClickable = false,
      fullWidth = true,
      size = "medium",
      variant = "default",
      containerClassName,
      labelClassName,
      inputClassName,
      errorClassName,
      hintClassName,
      className,
      disabled,
      required,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const hasError = !!error;
    const displayText = error || hint || helperText;

    // Character counter logic
    const maxLength = props.maxLength;
    const value = props.value ?? props.defaultValue ?? "";
    const currentLength = typeof value === "string" ? value.length : 0;
    const showCounter = maxLength !== undefined && maxLength > 0;
    const remainingChars = showCounter ? maxLength - currentLength : 0;
    const isNearLimit = showCounter && remainingChars <= maxLength * 0.1; // Warning at 10% remaining
    const isAtLimit = showCounter && remainingChars === 0;

    return (
      <div
        className={`${styles.container} ${fullWidth ? styles.fullWidth : ""} ${
          containerClassName || ""
        }`}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={`${styles.label} ${labelClassName || ""}`}
          >
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div
          className={`${styles.inputWrapper} ${styles[size]} ${
            styles[variant]
          } ${hasError ? styles.error : ""} ${
            disabled ? styles.disabled : ""
          } ${leftIcon ? styles.withLeftIcon : ""} ${
            rightIcon ? styles.withRightIcon : ""
          } ${rightIconClickable ? styles.rightIconClickable : ""}`}
        >
          {leftIcon && (
            <span className={styles.leftIcon} aria-hidden="true">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`${styles.input} ${inputClassName || ""} ${
              className || ""
            }`}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              displayText ? `${inputId}-description` : undefined
            }
            {...props}
          />

          {rightIcon && (
            <span className={styles.rightIcon} aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>

        {(displayText || showCounter) && (
          <div className={styles.footer}>
            {displayText && (
              <div
                id={`${inputId}-description`}
                className={`${styles.footerText} ${
                  hasError ? styles.errorText : styles.hintText
                } ${errorClassName || hintClassName || ""}`}
                role={hasError ? "alert" : undefined}
              >
                {displayText}
              </div>
            )}
            {showCounter && (
              <div
                className={`${styles.counter} ${
                  isAtLimit
                    ? styles.counterError
                    : isNearLimit
                    ? styles.counterWarning
                    : ""
                }`}
                aria-live="polite"
              >
                {currentLength}/{maxLength}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
