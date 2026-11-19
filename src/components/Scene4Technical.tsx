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

export const Scene4Technical: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 110 },
  });

  // 0..70: Request travels left -> right
  // 70..120: Server processes
  // 120..190: Response travels right -> left
  const reqProgress = interpolate(frame, [20, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const resProgress = interpolate(frame, [115, 170], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const showResponseCard = frame >= 155;
  const responsePop = spring({
    frame: frame - 155,
    fps,
    config: { damping: 12, stiffness: 130 },
  });

  const fadeOut = interpolate(frame, [250, 270], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        padding: 80,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut * enter,
      }}
    >
      <Img
        src={staticFile("assets/http-request-response.jpg")}
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
          fontSize: 24,
          color: THEME.primary,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        Under The Hood
      </div>
      <div
        style={{
          fontSize: 54,
          fontWeight: 800,
          color: THEME.text,
          marginTop: 8,
          marginBottom: 56,
        }}
      >
        Request &amp; Response Over HTTP
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 1620,
          gap: 32,
        }}
      >
        {/* Client Box */}
        <div
          style={{
            width: 440,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.primary}`,
            borderRadius: 24,
            padding: 32,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: THEME.primary }}>
            CLIENT (Weather App)
          </div>
          <div
            style={{
              marginTop: 20,
              padding: 20,
              borderRadius: 14,
              backgroundColor: "#090D16",
              fontFamily: THEME.fontMono,
              fontSize: 20,
              color: THEME.warning,
              lineHeight: 1.5,
            }}
          >
            <div>GET /v1/weather?city=London</div>
            <div style={{ color: THEME.textMuted }}>Host: api.weather.io</div>
          </div>

          {showResponseCard && (
            <div
              style={{
                marginTop: 20,
                padding: 20,
                borderRadius: 14,
                backgroundColor: "rgba(52, 211, 153, 0.12)",
                border: `1px solid ${THEME.accent}`,
                transform: `scale(${responsePop})`,
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: THEME.accent,
                }}
              >
                Rendered on Screen:
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, color: THEME.text, marginTop: 6 }}>
                London: 18°C Sunny
              </div>
            </div>
          )}
        </div>

        {/* Animated Wire & Packets */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 48,
            position: "relative",
          }}
        >
          {/* Top track: Request */}
          <div style={{ position: "relative", height: 50, display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                height: 4,
                backgroundColor: THEME.border,
                borderRadius: 4,
              }}
            />
            {frame >= 20 && frame <= 85 && (
              <div
                style={{
                  position: "absolute",
                  left: `${reqProgress * 82}%`,
                  padding: "10px 20px",
                  borderRadius: 12,
                  backgroundColor: THEME.warning,
                  color: "#0B0F19",
                  fontFamily: THEME.fontMono,
                  fontWeight: 800,
                  fontSize: 20,
                  boxShadow: "0 0 24px rgba(251,191,36,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                GET Request →
              </div>
            )}
          </div>

          {/* Center API Endpoint Badge */}
          <div
            style={{
              alignSelf: "center",
              padding: "14px 36px",
              borderRadius: 18,
              backgroundColor: THEME.bgCardLight,
              border: `2px solid ${THEME.accent}`,
              color: THEME.accent,
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 1.5,
            }}
          >
            API ENDPOINT
          </div>

          {/* Bottom track: Response */}
          <div style={{ position: "relative", height: 50, display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                height: 4,
                backgroundColor: THEME.border,
                borderRadius: 4,
              }}
            />
            {frame >= 115 && (
              <div
                style={{
                  position: "absolute",
                  left: `${(1 - resProgress) * 78}%`,
                  padding: "10px 20px",
                  borderRadius: 12,
                  backgroundColor: THEME.accent,
                  color: "#0B0F19",
                  fontFamily: THEME.fontMono,
                  fontWeight: 800,
                  fontSize: 20,
                  boxShadow: "0 0 24px rgba(52,211,153,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                ← 200 OK JSON
              </div>
            )}
          </div>
        </div>

        {/* Server Box */}
        <div
          style={{
            width: 460,
            backgroundColor: THEME.bgCard,
            border: `2px solid ${THEME.secondary}`,
            borderRadius: 24,
            padding: 32,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: THEME.secondary }}>
            SERVER (Weather API)
          </div>
          <div
            style={{
              marginTop: 20,
              padding: 20,
              borderRadius: 14,
              backgroundColor: "#090D16",
              fontFamily: THEME.fontMono,
              fontSize: 20,
              color: THEME.accent,
              lineHeight: 1.5,
            }}
          >
            <div style={{ color: THEME.textMuted }}>// JSON Response</div>
            <div>{"{"}</div>
            <div>&nbsp;&nbsp;"city": "London",</div>
            <div>&nbsp;&nbsp;"temp": "18°C",</div>
            <div>&nbsp;&nbsp;"condition": "Sunny"</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
