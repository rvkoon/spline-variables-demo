"use client";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useEffect, useRef, useState } from "react";

export default function SplineComponent({
  weight,
  onLoadedCb,
}: {
  weight: number;
  onLoadedCb: () => void;
}) {
  const splineRef = useRef<Application | null>(null);

  function onLoad(spline: Application) {
    splineRef.current = spline;
    onLoadedCb();
  }

  useEffect(() => {
    if (splineRef.current) {
      splineRef.current.setVariable("vWeight", weight);
    }
  }, [weight]);

  return (
    <>
      <Spline
        scene="https://prod.spline.design/pkoS9bbEbFRa6NqM/scene.splinecode"
        onLoad={onLoad}
        className="fixed w-screen h-screen lg:h-screen z-10 left-0 lg:left-[10vw]"
      />
    </>
  );
}
