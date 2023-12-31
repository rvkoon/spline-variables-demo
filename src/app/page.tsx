"use client";

import { useState } from "react";
import { anton, spaceMono } from "@/fonts/fonts";
import Link from "next/link";
import SplineComponent from "./variables/_components/Spline";
import { TagLink } from "./_components/TagLink";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col gap-4 justify-center items-center fadeIn">
      <h1
        className={`${spaceMono.className} text-[10vh] leading-[10vh] text-white text-center`}
      >
        SPLINE DESIGN DEMOS
      </h1>
      <TagLink label="Variables" href="/variables" />
      <div className="text-center">
        <p className="text-purple-400 text-[6vw] font-[700] lg:text-[2vw] relative z-50">
          made by{" "}
          <Link
            href="https://www.linkedin.com/in/romain-philippe-milleret/"
            className="underline"
            target="_blank"
          >
            @rvkoon
          </Link>
        </p>
        <Link
          href="https://spline.design/"
          className="underline text-white"
          target="_blank"
        >
          Spline.design
        </Link>
      </div>
    </main>
  );
}
