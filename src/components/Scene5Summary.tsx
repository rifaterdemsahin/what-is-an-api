import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { THEME } from "../theme";

const EXAMPLES = [
  {
    title: "Weather Apps",
    desc: "Pull live forecasts from meteorological servers.",
    color: THEME.primary,
    tag: "GET /forecast",
  },
  {
    title: "Maps & Rideshare",
    desc: "Embed live GPS routes, traffic, and ETAs.",
    color: THEME.accent,
    tag: "GET /directions",
  },
  {
    title: "Online Payments",
    desc: "Process cards securely via Stripe or PayPal.",
    color: THEME.warning,
    tag: "POST /checkout",
  },
  {
    title: "Social Login",
    desc: "Sign in safely with Google or GitHub.",
    color: THEME.secondary,
    tag: "OAuth 2.0",
  },
];

export const Scene5Summary: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  const bannerSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        padding: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        src={staticFile("assets/api-real-world.jpg")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          opacity: headerOpacity,
          fontSize: 56,
          fontWeight: 800,
          color: THEME.text,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        APIs Power Everything You Use
      </div>
      <div
        style={{
          opacity: headerOpacity,
          fontSize: 28,
          color: THEME.textMuted,
          marginBottom: 54,
          textAlign: "center",
        }}
      >
        Every modern app connects to dozens of APIs behind the scenes.
      </div>

      {/* 4 Example Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 28,
          width: "100%",
          maxWidth: 1640,
        }}
      >
        {EXAMPLES.map((item, i) => {
          const cardSpring = spring({
            frame: frame - (10 + i * 8),
            fps,
            config: { damping: 14, stiffness: 120 },
          });
          return (
            <div
              key={item.title}
              style={{
                backgroundColor: THEME.bgCard,
                border: `2px solid ${item.color}`,
                borderRadius: 24,
                padding: 32,
                transform: `translateY(${(1 - cardSpring) * 40}px) scale(${
                  0.92 + 0.08 * cardSpring
                })`,
                opacity: cardSpring,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 260,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    borderRadius: 10,
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: item.color,
                    fontFamily: THEME.fontMono,
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 18,
                  }}
                >
                  {item.tag}
                </div>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 800,
                    color: THEME.text,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    color: THEME.textMuted,
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Final Takeaway */}
      <div
        style={{
          marginTop: 64,
          padding: "24px 52px",
          borderRadius: 24,
          background: `linear-gradient(135deg, rgba(56,189,248,0.18), rgba(129,140,248,0.18))`,
          border: `2px solid ${THEME.primary}`,
          transform: `scale(${bannerSpring})`,
          opacity: bannerSpring,
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 34, fontWeight: 800, color: THEME.text }}>
          API ={" "}
        </span>
        <span style={{ fontSize: 34, fontWeight: 800, color: THEME.primary }}>
          The Universal Messenger Between Software
        </span>
      </div>
    </AbsoluteFill>
  );
};
