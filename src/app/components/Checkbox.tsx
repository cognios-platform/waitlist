"use client";

import React, {
  forwardRef,
  InputHTMLAttributes,
  useId,
  useEffect,
  useImperativeHandle,
  ReactNode,
} from "react";
import { Check } from "lucide-react";
import styles from "./Checkbox.module.scss";

export type CheckboxSize = "small" | "medium" | "large";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string | ReactNode;
  description?: string;
  error?: string;
  hint?: string;
  helperText?: string;
  size?: CheckboxSize;
  containerClassName?: string;
  labelClassName?: string;
  checkboxClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
  labelPosition?: "left" | "right";
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      hint,
      helperText,
      size = "medium",
      containerClassName,
      labelClassName,
      checkboxClassName,
      errorClassName,
      hintClassName,
      className,
      disabled,
      required,
      id,
      checked,
      indeterminate,
      labelPosition: labelPos,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;
    const hasError = !!error;
    const displayText = error || hint || helperText;
    const labelPosition = labelPos || "right";
    const inputRef = React.useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    useEffect(() => {
      if (inputRef.current && indeterminate !== undefined) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, checked]);

    return (
      <div
        className={`${styles.container} ${styles[size]} ${
          containerClassName || ""
        } ${disabled ? styles.disabled : ""} ${hasError ? styles.error : ""}`}
      >
        {label && labelPosition === "left" && (
          <div className={styles.labelContainer}>
            <label
              htmlFor={checkboxId}
              className={`${styles.label} ${labelClassName || ""}`}
            >
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
            {description && (
              <div className={styles.description}>{description}</div>
            )}
          </div>
        )}
        <div
          className={styles.checkboxWrapper}
          onClick={(e) => {
            if (
              !disabled &&
              inputRef.current &&
              e.target !== inputRef.current
            ) {
              e.preventDefault();
              inputRef.current.click();
            }
          }}
        >
          <div className={styles.inputWrapper}>
            <input
              ref={inputRef}
              type="checkbox"
              id={checkboxId}
              className={`${styles.checkbox} ${styles[size]} ${
                hasError ? styles.error : ""
              } ${checkboxClassName || ""} ${className || ""}`}
              disabled={disabled}
              required={required}
              checked={checked}
              aria-invalid={hasError}
              aria-describedby={
                displayText ? `${checkboxId}-description` : undefined
              }
              {...props}
            />
            <div
              className={`${styles.checkboxIndicator} ${styles[size]} ${
                checked ? styles.checked : ""
              } ${indeterminate ? styles.indeterminate : ""} ${
                disabled ? styles.disabled : ""
              }`}
              aria-hidden="true"
            >
              {checked && !indeterminate && (
                <Check size={14} className={styles.checkIcon} />
              )}
              {indeterminate && <div className={styles.indeterminateLine} />}
            </div>
          </div>
        </div>
        {label && labelPosition === "right" && (
          <div className={styles.labelContainer}>
            <label
              htmlFor={checkboxId}
              className={`${styles.label} ${labelClassName || ""}`}
            >
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
            {description && (
              <div className={styles.description}>{description}</div>
            )}
          </div>
        )}

        {displayText && (
          <div
            id={`${checkboxId}-description`}
            className={`${styles.footerText} ${
              hasError ? styles.errorText : styles.hintText
            } ${errorClassName || hintClassName || ""}`}
            role={hasError ? "alert" : undefined}
          >
            {displayText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
