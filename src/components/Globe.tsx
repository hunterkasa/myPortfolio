"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import createGlobe, { Globe as CobeGlobe } from "cobe";

interface GlobeProps {
  lat?: number;
  lng?: number;
  locationLabel?: string;
}

export default function Globe({
  lat = 23.8103,
  lng = 90.4125,
  locationLabel = "Dhaka, BD [23.81° N, 90.41° E]",
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const velocityRef = useRef(0.002);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Offset so location faces user camera on initial view
  useEffect(() => {
    const initialPhi = (lng * Math.PI) / 180 + Math.PI / 2;
    phiRef.current = initialPhi;
  }, [lng]);

  const updatePointerInteraction = useCallback((clientX: number | null) => {
    if (clientX !== null) {
      pointerInteracting.current = clientX;
      setIsInteracting(true);
    } else {
      pointerInteracting.current = null;
      setIsInteracting(false);
    }
  }, []);

  useEffect(() => {
    let width = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    let globe: CobeGlobe | null = null;
    let animationFrameId: number;

    try {
      const renderWidth = (width || 400) * 2;
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: renderWidth,
        height: renderWidth,
        phi: phiRef.current,
        theta: 0.25,
        dark: 1,
        diffuse: 1.15,
        mapSamples: 13000,
        mapBrightness: 3.2,
        baseColor: [0.15, 0.13, 0.22], // Dusky purple midnight
        markerColor: [0.655, 0.545, 0.98], // Sad Purple #a78bfa
        glowColor: [0.15, 0.1, 0.28], // Melancholic ambient violet
        markers: [
          { location: [lat, lng], size: 0.08 },
        ],
      });

      setIsLoaded(true);

      const animate = () => {
        if (!pointerInteracting.current) {
          phiRef.current += velocityRef.current;
          // Melancholic slow rotation decay
          velocityRef.current = velocityRef.current * 0.96 + 0.0018 * 0.04;
        } else {
          phiRef.current += pointerInteractionMovement.current;
          pointerInteractionMovement.current = 0;
        }

        const currentRenderWidth = (canvas.offsetWidth || 400) * 2;
        globe?.update({
          phi: phiRef.current,
          width: currentRenderWidth,
          height: currentRenderWidth,
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
    } catch (e) {
      console.error("Globe init fallback:", e);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (globe) {
        globe.destroy();
      }
    };
  }, [lat, lng]);

  return (
    <div className="relative w-full aspect-square max-w-[380px] mx-auto flex items-center justify-center select-none group">
      {/* Decorative Technical Crosshairs with Sad Purple tint */}
      <div className="absolute inset-0 pointer-events-none border border-[#2a2442] rounded-xl">
        <div className="absolute top-2 left-2 text-[10px] font-mono text-purple-300/50 tracking-wider">
          + LAT {lat.toFixed(4)}°
        </div>
        <div className="absolute top-2 right-2 text-[10px] font-mono text-purple-300/50 tracking-wider">
          LON {lng.toFixed(4)}° +
        </div>
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-[10px] font-mono text-purple-300/60">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>DHAKA • 03:00 AM</span>
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-purple-300/40">
          [DRAG]
        </div>

        {/* Framing tick marks in sad purple */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-purple-400/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-purple-400/40" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-4 w-[1px] bg-purple-400/40" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-4 w-[1px] bg-purple-400/40" />
      </div>

      {/* Melancholic Radial glow */}
      <div 
        className="absolute inset-4 rounded-full pointer-events-none opacity-40 transition-opacity duration-700"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.09) 0%, rgba(11, 9, 20, 0) 70%)"
        }}
      />

      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        aria-label="Interactive 3D dot-matrix globe"
        onPointerDown={(e) => {
          updatePointerInteraction(e.clientX);
          canvasRef.current?.setPointerCapture(e.pointerId);
        }}
        onPointerUp={(e) => {
          updatePointerInteraction(null);
          canvasRef.current?.releasePointerCapture(e.pointerId);
        }}
        onPointerOut={() => {
          updatePointerInteraction(null);
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = (e.clientX - pointerInteracting.current) * 0.005;
            pointerInteractionMovement.current = delta;
            velocityRef.current = delta * 0.35;
            pointerInteracting.current = e.clientX;
          }
        }}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
        }}
      />

      {/* Bottom Telemetry Tag */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono text-purple-200/80 bg-[#141024]/90 border border-[#2a2442] rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
          <span>{locationLabel}</span>
          <span className="text-purple-400/30">|</span>
          <span className="text-purple-300 font-medium">{isInteracting ? "ACTIVE_DRAG" : "LOFI_SPIN"}</span>
        </span>
      </div>
    </div>
  );
}
