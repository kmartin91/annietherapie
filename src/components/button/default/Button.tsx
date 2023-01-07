import { Cormorant_Garamond } from "@next/font/google";
import Link from "next/link";
import React, { ReactElement } from "react";

import styles from "components/button/default/Button.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  alternate?: boolean;
  useButtonMarkup?: boolean;
  type?: "button" | "submit" | "reset";
  // All other props
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  alternate,
  href,
  useButtonMarkup = false,
  type,
  ...rest
}: ButtonProps): ReactElement => {
  if (useButtonMarkup) {
    return (
      <button
        className={[
          styles.btn,
          className,
          cormorant.className,
          alternate && styles.alternate,
        ]
          .filter(Boolean)
          .join(" ")}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (!href) return <></>;
  return (
    <Link
      className={[
        styles.btn,
        className,
        cormorant.className,
        alternate && styles.alternate,
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
      data-name={children}
    >
      {children}
    </Link>
  );
};

export default Button;
