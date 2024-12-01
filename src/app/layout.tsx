import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { MotionConfig } from "motion/react";

export const metadata: Metadata = {
  title: "State Guessing Game",
  description: "Guess each US state with a fun interface",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <MotionConfig
          transition={{
            layout: { duration: 0.9, bounce: 0, type: "spring" },
          }}
        >
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
