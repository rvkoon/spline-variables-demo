import "./globals.css";
import type { Metadata } from "next";
import { clashDisplay } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Spline Design Demos",
  description: "Spline Design Demos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>{children}</body>
    </html>
  );
}
