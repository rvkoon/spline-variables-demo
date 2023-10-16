"use client";

import { useState } from "react";
import { anton, spaceMono } from "@/fonts/fonts";
import Link from "next/link";
import SplineComponent from "./variables/_components/Spline";
import { TagLink } from "./_components/TagLink";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
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
      <p
        className={`fixed w-auto bottom-[24px] left-1/2 translate-x-[-50%] text-white ${spaceMono.className} p-[24px] rounded-lg bg-[#101014] border border-purple-400`}
      >
        <span>{"> Spline.design is a tool to create"}</span>
        <br />
        <span>&nbsp;&nbsp;{"3D scenes and animations in the browser."}</span>
        <br />
        <span>{"> It can now be used to create interactive"}</span>
        <br />
        <span>&nbsp;&nbsp;{"experiences with variables."}</span>
        <br />
      </p>
    </main>
  );
}
