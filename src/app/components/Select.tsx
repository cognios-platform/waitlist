"use client";

import React, {
  forwardRef,
  SelectHTMLAttributes,
  ReactNode,
  useId,
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { ChevronDown, Search, X } from "lucide-react";
import styles from "./Select.module.scss";

export type SelectSize = "small" | "medium" | "large";
export type SelectVariant = "default" | "outlined" | "filled";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  error?: string;
  hint?: string;
  helperText?: string;
  fullWidth?: boolean;
  size?: SelectSize;
  variant?: SelectVariant;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
  children: ReactNode;
  searchable?: boolean;
  searchPlaceholder?: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      hint,
      helperText,
      fullWidth = true,
      size = "medium",
      variant = "default",
      containerClassName,
      labelClassName,
      selectClassName,
      errorClassName,
      hintClassName,
      className,
      disabled,
      required,
      id,
      children,
      searchable = false,
      searchPlaceholder = "Search options...",
      value,
      onChange,
      placeholder = "Select an option",
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const hasError = !!error;
    const displayText = error || hint || helperText;
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const options = useMemo(() => {
      if (!children) return [];

      const extracted: Array<{
        value: string;
        label: string;
        content: ReactNode;
        disabled?: boolean;
      }> = [];

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === "option") {
          const props = child.props as {
            value: string;
            children: ReactNode;
            disabled?: boolean;
          };

          let label = "";
          if (typeof props.children === "string") {
            label = props.children;
          } else if (typeof props.children === "number") {
            label = String(props.children);
          } else if (props.children) {
            const childrenArray = React.Children.toArray(props.children);
            label = childrenArray
              .map((c) => {
                if (typeof c === "string") return c;
                if (typeof c === "number") return String(c);
                return "";
              })
              .join("");
          }

          extracted.push({
            value: props.value || "",
            label: label,
            content: props.children,
            disabled: props.disabled,
          });
        }
      });

      return extracted;
    }, [children]);

    const filteredOptions = useMemo(() => {
      if (!searchable || !searchQuery.trim()) return options;
      const query = searchQuery.toLowerCase();
      return options.filter(
        (opt) =>
          opt.label.toLowerCase().includes(query) ||
          opt.value.toLowerCase().includes(query)
      );
    }, [options, searchQuery, searchable]);

    const selectedOption = useMemo(() => {
      if (value === undefined || value === null || value === "") return null;
      const option = options.find((opt) => String(opt.value) === String(value));
      return option?.content || option?.label || "";
    }, [options, value]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setSearchQuery("");
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 0);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const handleOptionSelect = (optionValue: string) => {
      if (onChange) {
        const syntheticEvent = {
          target: { value: optionValue },
        } as React.ChangeEvent<HTMLSelectElement>;
        onChange(syntheticEvent);
      }
      setIsOpen(false);
      setSearchQuery("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    return (
      <div
        className={`${styles.container} ${fullWidth ? styles.fullWidth : ""} ${
          containerClassName || ""
        }`}
      >
        {label && (
          <label
            htmlFor={selectId}
            className={`${styles.label} ${labelClassName || ""}`}
          >
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div
          ref={dropdownRef || ref}
          className={`${styles.selectWrapper} ${styles[size]} ${
            styles[variant]
          } ${hasError ? styles.error : ""} ${
            disabled ? styles.disabled : ""
          } ${isOpen ? styles.open : ""}`}
        >
          <button
            type="button"
            id={selectId}
            className={`${styles.selectButton} ${selectClassName || ""} ${
              className || ""
            }`}
            disabled={disabled}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-describedby={
              displayText ? `${selectId}-description` : undefined
            }
          >
            <span className={styles.selectButtonText}>
              {selectedOption || placeholder || "Select an option"}
            </span>
            <ChevronDown
              size={16}
              className={`${styles.chevron} ${
                isOpen ? styles.chevronOpen : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {isOpen && (
            <div className={styles.dropdown}>
              {searchable && (
                <div className={styles.searchContainer}>
                  <Search size={16} className={styles.searchIcon} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    className={styles.searchInput}
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setIsOpen(false);
                        setSearchQuery("");
                      }
                    }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className={styles.clearSearch}
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              )}

              <div className={styles.optionsList} role="listbox">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      aria-selected={String(value) === String(option.value)}
                      className={`${styles.option} ${
                        String(value) === String(option.value)
                          ? styles.optionSelected
                          : ""
                      } ${option.disabled ? styles.optionDisabled : ""}`}
                      disabled={option.disabled}
                      onClick={() =>
                        !option.disabled && handleOptionSelect(option.value)
                      }
                    >
                      {option.content}
                    </button>
                  ))
                ) : (
                  <div className={styles.noResults}>
                    {searchable && searchQuery
                      ? "No options found"
                      : "No options available"}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {displayText && (
          <div
            id={`${selectId}-description`}
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

Select.displayName = "Select";

export default Select;
