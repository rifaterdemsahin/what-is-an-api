import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { THEME } from "../theme";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.04) * 0.15 + 0.85;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.bg,
        overflow: "hidden",
        fontFamily: THEME.fontSans,
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Top-left ambient glow */}
      <div
        style={{
          position: "absolute",
          top: -250,
          left: -200,
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0) 70%)",
          transform: `scale(${pulse})`,
        }}
      />
      {/* Bottom-right ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: -300,
          right: -200,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.16) 0%, rgba(129,140,248,0) 70%)",
          transform: `scale(${1.9 - pulse})`,
        }}
      />
    </AbsoluteFill>
  );
};
