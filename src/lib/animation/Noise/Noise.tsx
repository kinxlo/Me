"use client";

import React, { useEffect, useRef } from "react";

interface NoiseProperties {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const Noise: React.FC<NoiseProperties> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainReference = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainReference.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;

    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const patternContext = patternCanvas.getContext("2d");
    if (!patternContext) return;

    const patternData = patternContext.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;

      context.scale(patternScaleX, patternScaleY);
    };

    const updatePattern = () => {
      for (let index = 0; index < patternPixelDataLength; index += 4) {
        const value = Math.random() * 255;
        patternData.data[index] = value;
        patternData.data[index + 1] = value;
        patternData.data[index + 2] = value;
        patternData.data[index + 3] = patternAlpha;
      }
      patternContext.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const pattern = context.createPattern(patternCanvas, "repeat");
      if (pattern) {
        context.fillStyle = pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        updatePattern();
        drawGrain();
      }
      frame++;
      window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return <canvas className="fixed top-0 left-0 h-screen w-screen" ref={grainReference} />;
};

export default Noise;
