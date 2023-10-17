"use client";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";

export default function SplineComponent({
  weight,
  onLoadedCb,
}: {
  weight: number;
  onLoadedCb: () => void;
}) {
  const splineRef = useRef<Application | null>(null);
  const { width } = useWindowSize();
  const [isZoomedIn, setIsZoomedIn] = useState(true);

  function onLoad(spline: Application) {
    splineRef.current = spline;
    onLoadedCb();
  }

  useEffect(() => {
    if (splineRef.current) {
      console.log("set variable weight");
      splineRef.current.setVariable("vWeight", weight);
    }
  }, [weight]);

  useEffect(() => {
    if (splineRef.current) {
      if (width < 1024 && isZoomedIn) {
        setIsZoomedIn(false);
        splineRef.current.setZoom(0.5);
      } else if (width >= 1024 && !isZoomedIn) {
        splineRef.current.setZoom(2);
        setIsZoomedIn(true);
      }
    }
  }, [width, splineRef.current]);

  return (
    <>
      <Spline
        scene="https://draft.spline.design/gLDm6kMIfslul6GK/scene.splinecode"
        onLoad={onLoad}
        className="fixed !w-screen !h-screen  z-10 left-0 lg:left-[10vw]"
      />
    </>
  );
}
