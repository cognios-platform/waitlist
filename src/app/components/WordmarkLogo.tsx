import React from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

const WordmarkLogo = ({
  isWhite = false,
  containerClassName = "",
}: {
  isWhite?: boolean;
  containerClassName?: string;
}) => {
  const router = useRouter();

  return (
    <div
      className={`${styles.logoContainer} ${containerClassName}`}
      onClick={() => router.push("/")}
    >
      <span className={isWhite ? styles.logoTextWhite : styles.logoTextAccent}>
        cognios
      </span>
    </div>
  );
};

export default WordmarkLogo;
