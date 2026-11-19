import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { THEME } from "../theme";

export const Scene3Analogy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const intro = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // Waiter movement:
  // 0..45: Waiter at Customer (x = -380)
  // 45..105: Waiter walks to Kitchen (x = -380 -> +380) carrying Order
  // 105..145: Kitchen prepares dish
  // 145..205: Waiter walks back to Customer (x = +380 -> -380) carrying Dish
  const waiterX = interpolate(
    frame,
    [0, 45, 105, 145, 205],
    [-380, -380, 380, 380, -380],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const stepIndex =
    frame < 45 ? 0 : frame < 105 ? 1 : frame < 145 ? 2 : 3;

  const steps = [
    "1. Customer orders from Menu",
    "2. Waiter (API) delivers Request to Kitchen",
    "3. Kitchen (Server) prepares the Data",
    "4. Waiter (API) returns the Response!",
  ];

  const fadeOut = interpolate(frame, [220, 240], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const carryingOrder = frame >= 30 && frame < 115;
  const carryingDish = frame >= 140;

  return (
    <AbsoluteFill
      style={{
        padding: 80,
        justifyContent: "space-between",
        alignItems: "center",
        opacity: fadeOut * intro,
      }}
    >
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 24,
            color: THEME.warning,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          The Classic Analogy
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: THEME.text,
            marginTop: 8,
          }}
        >
          Think of an API Like a Restaurant Waiter
        </div>
      </div>

      {/* Stage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1560,
          height: 460,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        {/* Floor Line */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            left: 60,
            right: 60,
            height: 4,
            backgroundColor: THEME.border,
            borderRadius: 4,
          }}
        />

        {/* Customer (Client) */}
        <div
          style={{
            width: 320,
            height: 360,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.primary}`,
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            padding: 24,
            boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Customer SVG */}
          <svg width="110" height="110" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="18" r="10" fill={THEME.primary} />
            <path
              d="M14 52C14 40 22 34 32 34C42 34 50 40 50 52"
              fill={THEME.primary}
              opacity="0.85"
            />
            <rect
              x="20"
              y="38"
              width="24"
              height="18"
              rx="3"
              fill={THEME.bg}
              stroke={THEME.text}
              strokeWidth="2"
            />
            <text
              x="32"
              y="51"
              textAnchor="middle"
              fill={THEME.text}
              fontSize="9"
              fontWeight="bold"
            >
              MENU
            </text>
          </svg>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: THEME.text,
              marginTop: 16,
            }}
          >
            Customer
          </div>
          <div
            style={{
              fontSize: 22,
              color: THEME.primary,
              fontWeight: 600,
              marginTop: 4,
            }}
          >
            (Client / App)
          </div>
        </div>

        {/* Moving Waiter (API) */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${waiterX}px), -55%)`,
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Speech / Tray Bubble */}
          {carryingOrder && (
            <div
              style={{
                marginBottom: 12,
                padding: "10px 20px",
                borderRadius: 14,
                backgroundColor: THEME.warning,
                color: "#0B0F19",
                fontWeight: 800,
                fontSize: 22,
                boxShadow: "0 8px 24px rgba(251,191,36,0.35)",
              }}
            >
              Order (Request) →
            </div>
          )}
          {carryingDish && (
            <div
              style={{
                marginBottom: 12,
                padding: "10px 20px",
                borderRadius: 14,
                backgroundColor: THEME.accent,
                color: "#0B0F19",
                fontWeight: 800,
                fontSize: 22,
                boxShadow: "0 8px 24px rgba(52,211,153,0.35)",
              }}
            >
              ← Dish (Response)
            </div>
          )}

          {/* Waiter Card */}
          <div
            style={{
              width: 190,
              height: 190,
              borderRadius: "50%",
              backgroundColor: THEME.bgCardLight,
              border: `4px solid ${THEME.accent}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 45px rgba(52,211,153,0.3)",
            }}
          >
            <svg width="72" height="72" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="16" r="9" fill={THEME.accent} />
              <path
                d="M16 50C16 38 23 32 32 32C41 32 48 38 48 50"
                fill={THEME.accent}
              />
              <polygon points="27,34 37,34 32,40" fill={THEME.bg} />
            </svg>
            <div
              style={{
                fontSize: 24,
                fontWeight: 900,
                color: THEME.text,
                marginTop: 4,
              }}
            >
              API
            </div>
            <div style={{ fontSize: 16, color: THEME.accent, fontWeight: 700 }}>
              (Waiter)
            </div>
          </div>
        </div>

        {/* Kitchen (Server) */}
        <div
          style={{
            width: 320,
            height: 360,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.secondary}`,
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            padding: 24,
            boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Kitchen SVG */}
          <svg width="110" height="110" viewBox="0 0 64 64" fill="none">
            <rect
              x="12"
              y="26"
              width="40"
              height="26"
              rx="4"
              fill={THEME.secondary}
              opacity="0.85"
            />
            <path
              d="M20 20C20 14 26 10 32 10C38 10 44 14 44 20H20Z"
              fill={THEME.text}
            />
            <circle cx="24" cy="39" r="4" fill={THEME.bg} />
            <circle cx="40" cy="39" r="4" fill={THEME.bg} />
          </svg>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: THEME.text,
              marginTop: 16,
            }}
          >
            Kitchen
          </div>
          <div
            style={{
              fontSize: 22,
              color: THEME.secondary,
              fontWeight: 600,
              marginTop: 4,
            }}
          >
            (Server / System)
          </div>
        </div>
      </div>

      {/* Bottom Step Indicator */}
      <div
        style={{
          padding: "18px 40px",
          borderRadius: 20,
          backgroundColor: THEME.bgCardLight,
          border: `1px solid ${THEME.border}`,
          fontSize: 28,
          fontWeight: 700,
          color: THEME.text,
        }}
      >
        {steps[stepIndex]}
      </div>
    </AbsoluteFill>
  );
};
