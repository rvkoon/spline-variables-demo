import { Anton, Space_Mono } from "next/font/google";
import localFont from "next/font/local";

export const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  display: "swap",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
