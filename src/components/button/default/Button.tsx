import { Cormorant_Garamond } from "@next/font/google";
import Link from "next/link";
import React from "react";

import styles from "./Button.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
  alternate?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, className, alternate, href } = props;
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
