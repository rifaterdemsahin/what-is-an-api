import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { THEME } from "../theme";

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  const leftCard = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const rightCard = spring({
    frame: frame - 18,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const bridgeProgress = spring({
    frame: frame - 70,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const fadeOut = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        padding: 90,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          opacity: headerOpacity,
          fontSize: 56,
          fontWeight: 800,
          color: THEME.text,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Why Do We Need an API?
      </div>
      <div
        style={{
          opacity: headerOpacity,
          fontSize: 30,
          color: THEME.textMuted,
          marginBottom: 70,
          textAlign: "center",
        }}
      >
        Apps and databases live on separate machines and speak different languages.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1500,
          gap: 40,
        }}
      >
        {/* Client App */}
        <div
          style={{
            flex: 1,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.primary}`,
            borderRadius: 28,
            padding: 44,
            transform: `translateX(${(1 - leftCard) * -80}px)`,
            opacity: leftCard,
          }}
        >
          <div style={{ fontSize: 22, color: THEME.primary, fontWeight: 700 }}>
            CLIENT
          </div>
          <div
            style={{
              fontSize: 40,
              color: THEME.text,
              fontWeight: 800,
              marginTop: 8,
            }}
          >
            Mobile / Web App
          </div>
          <div
            style={{
              marginTop: 28,
              padding: 24,
              borderRadius: 16,
              backgroundColor: THEME.bgCardLight,
              fontFamily: THEME.fontMono,
              fontSize: 22,
              color: THEME.textMuted,
            }}
          >
            "I need today's weather for London!"
          </div>
        </div>

        {/* Middle Gap -> Bridge */}
        <div
          style={{
            width: 340,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {frame < 70 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  backgroundColor: "rgba(248, 113, 113, 0.15)",
                  border: `2px dashed ${THEME.danger}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: THEME.danger,
                  fontSize: 40,
                  fontWeight: 800,
                }}
              >
                ?
              </div>
              <div
                style={{
                  color: THEME.danger,
                  fontSize: 22,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                No direct access!
              </div>
            </div>
          ) : (
            <div
              style={{
                transform: `scale(${bridgeProgress})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "20px 28px",
                  borderRadius: 20,
                  background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})`,
                  color: "#0B0F19",
                  fontSize: 28,
                  fontWeight: 900,
                  textAlign: "center",
                  boxShadow: "0 0 40px rgba(52, 211, 153, 0.35)",
                }}
              >
                API CONTRACT
              </div>
              <div
                style={{
                  color: THEME.accent,
                  fontSize: 22,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Safe, structured rules
              </div>
            </div>
          )}
        </div>

        {/* Remote Database / Server */}
        <div
          style={{
            flex: 1,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.secondary}`,
            borderRadius: 28,
            padding: 44,
            transform: `translateX(${(1 - rightCard) * 80}px)`,
            opacity: rightCard,
          }}
        >
          <div style={{ fontSize: 22, color: THEME.secondary, fontWeight: 700 }}>
            SERVER
          </div>
          <div
            style={{
              fontSize: 40,
              color: THEME.text,
              fontWeight: 800,
              marginTop: 8,
            }}
          >
            Cloud Database
          </div>
          <div
            style={{
              marginTop: 28,
              padding: 24,
              borderRadius: 16,
              backgroundColor: THEME.bgCardLight,
              fontFamily: THEME.fontMono,
              fontSize: 22,
              color: THEME.textMuted,
            }}
          >
            SQL / Private Data / Logic
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
