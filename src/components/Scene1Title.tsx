import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { THEME } from "../theme";

export const Scene1Title: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const subtitleOpacity = interpolate(frame, [22, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [22, 42], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const diagramProgress = spring({
    frame: frame - 35,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const packetX = interpolate(frame, [65, 110, 145], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(frame, [190, 210], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
        padding: 80,
      }}
    >
      {/* Acronym Pill */}
      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          padding: "10px 28px",
          borderRadius: 999,
          backgroundColor: "rgba(56, 189, 248, 0.12)",
          border: `1px solid ${THEME.primary}`,
          color: THEME.primary,
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 28,
        }}
      >
        Application Programming Interface
      </div>

      {/* Main Title */}
      <div
        style={{
          transform: `scale(${titleScale})`,
          fontSize: 112,
          fontWeight: 800,
          color: THEME.text,
          letterSpacing: -2,
          textAlign: "center",
          lineHeight: 1.05,
        }}
      >
        What is an{" "}
        <span
          style={{
            background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          API
        </span>
        ?
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          fontSize: 34,
          color: THEME.textMuted,
          marginTop: 24,
          textAlign: "center",
          maxWidth: 960,
        }}
      >
        The invisible bridge that lets software talk to software.
      </div>

      {/* Visual Node Connection */}
      <div
        style={{
          marginTop: 72,
          display: "flex",
          alignItems: "center",
          gap: 36,
          opacity: diagramProgress,
          transform: `scale(${0.9 + 0.1 * diagramProgress})`,
        }}
      >
        {/* App Node */}
        <div
          style={{
            width: 240,
            height: 140,
            borderRadius: 24,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.primary}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 40px rgba(56,189,248,0.18)",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <rect
              x="5"
              y="2"
              width="14"
              height="20"
              rx="3"
              stroke={THEME.primary}
              strokeWidth="2"
            />
            <circle cx="12" cy="18" r="1" fill={THEME.primary} />
          </svg>
          <span
            style={{
              color: THEME.text,
              fontSize: 24,
              fontWeight: 700,
              marginTop: 10,
            }}
          >
            Your App
          </span>
        </div>

        {/* Connection Line + API Badge */}
        <div
          style={{
            position: "relative",
            width: 340,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: 4,
              background: `linear-gradient(90deg, ${THEME.primary}, ${THEME.secondary})`,
              borderRadius: 4,
            }}
          />
          {/* Moving Data Dot */}
          <div
            style={{
              position: "absolute",
              left: `${packetX * 100}%`,
              transform: "translateX(-50%)",
              width: 18,
              height: 18,
              borderRadius: "50%",
              backgroundColor: THEME.accent,
              boxShadow: `0 0 18px ${THEME.accent}`,
            }}
          />
          <div
            style={{
              zIndex: 2,
              padding: "12px 30px",
              borderRadius: 16,
              backgroundColor: THEME.bgCardLight,
              border: `2px solid ${THEME.accent}`,
              color: THEME.accent,
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 2,
              boxShadow: "0 0 30px rgba(52,211,153,0.25)",
            }}
          >
            API
          </div>
        </div>

        {/* Server Node */}
        <div
          style={{
            width: 240,
            height: 140,
            borderRadius: 24,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.secondary}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 40px rgba(129,140,248,0.18)",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="4"
              width="18"
              height="6"
              rx="2"
              stroke={THEME.secondary}
              strokeWidth="2"
            />
            <rect
              x="3"
              y="14"
              width="18"
              height="6"
              rx="2"
              stroke={THEME.secondary}
              strokeWidth="2"
            />
            <circle cx="7" cy="7" r="1" fill={THEME.secondary} />
            <circle cx="7" cy="17" r="1" fill={THEME.secondary} />
          </svg>
          <span
            style={{
              color: THEME.text,
              fontSize: 24,
              fontWeight: 700,
              marginTop: 10,
            }}
          >
            Server & Data
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
