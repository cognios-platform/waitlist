"use client";

import React, { ReactNode } from "react";
import styles from "./PublicLayout.module.scss";

interface PublicPageWrapperProps {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  headerActions?: ReactNode;
  maxWidth?: string;
  children: ReactNode;
  className?: string;
  useBreadcrumbs?: boolean;
  hint?: string | ReactNode;
}

type Props = {
  children: React.ReactNode;
  pageTitle?: string | ReactNode;
  pageSubtitle?: string | ReactNode;
  pageHeaderActions?: ReactNode;
  pageMaxWidth?: string;
  pageClassName?: string;
  usePageWrapper?: boolean;
  pageHint?: string | ReactNode;
};

export const PublicLayout: React.FC<Props> = ({
  children,
  pageTitle,
  pageSubtitle,
  pageHeaderActions,
  pageMaxWidth,
  pageClassName,
  usePageWrapper = false,
  pageHint,
}) => {
  return (
    <>
      {usePageWrapper || pageTitle || pageSubtitle || pageHeaderActions ? (
        <PublicPageWrapper
          title={pageTitle}
          subtitle={pageSubtitle}
          headerActions={pageHeaderActions}
          maxWidth={pageMaxWidth}
          className={pageClassName}
          hint={pageHint}
        >
          {children}
        </PublicPageWrapper>
      ) : (
        children
      )}
    </>
  );
};

function PublicPageWrapper({
  title,
  subtitle,
  headerActions,
  maxWidth,
  children,
  className,
  hint,
}: PublicPageWrapperProps) {
  return (
    <div
      className={`${styles.container} ${className || ""}`}
      style={{ maxWidth: maxWidth }}
    >
      {(title || subtitle || headerActions) && (
        <div className={styles.header}>
          {(title || subtitle) && (
            <div>
              {title && (typeof title === "string" ? <h1>{title}</h1> : title)}
              {subtitle &&
                (typeof subtitle === "string" ? <h2>{subtitle}</h2> : subtitle)}
              {hint &&
                (typeof hint === "string" ? (
                  <p className={styles.hint}>{hint}</p>
                ) : (
                  hint
                ))}
            </div>
          )}
          {headerActions && (
            <div className={styles.headerActions}>{headerActions}</div>
          )}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
