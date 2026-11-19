import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Background } from "./components/Background";
import { Scene1Title } from "./components/Scene1Title";
import { Scene2Problem } from "./components/Scene2Problem";
import { Scene3Analogy } from "./components/Scene3Analogy";
import { Scene4Technical } from "./components/Scene4Technical";
import { Scene5Summary } from "./components/Scene5Summary";

export const WhatIsAnApi: React.FC = () => {
  return (
    <AbsoluteFill>
      <Background />

      {/* Subtle ambient background bed */}
      <Audio src={staticFile("audio/sfx-ambient.wav")} volume={0.12} />

      {/* Scene 1: Intro (0s - 7s) */}
      <Sequence from={0} durationInFrames={210}>
        <Scene1Title />
        <Audio src={staticFile("audio/sfx-whoosh.wav")} volume={0.3} />
      </Sequence>
      <Sequence from={6} durationInFrames={204}>
        <Audio src={staticFile("audio/vo-scene1.wav")} volume={0.95} />
      </Sequence>

      {/* Scene 2: The Problem (7s - 14s) */}
      <Sequence from={210} durationInFrames={210}>
        <Scene2Problem />
        <Audio src={staticFile("audio/sfx-whoosh.wav")} volume={0.3} />
      </Sequence>
      <Sequence from={216} durationInFrames={204}>
        <Audio src={staticFile("audio/vo-scene2.wav")} volume={0.95} />
      </Sequence>

      {/* Scene 3: Restaurant Analogy (14s - 22.5s) */}
      <Sequence from={420} durationInFrames={255}>
        <Scene3Analogy />
        <Audio src={staticFile("audio/sfx-whoosh.wav")} volume={0.3} />
      </Sequence>
      <Sequence from={426} durationInFrames={249}>
        <Audio src={staticFile("audio/vo-scene3.wav")} volume={0.95} />
      </Sequence>
      <Sequence from={560} durationInFrames={60}>
        <Audio src={staticFile("audio/sfx-chime.wav")} volume={0.28} />
      </Sequence>

      {/* Scene 4: Technical HTTP & JSON (22.5s - 31.5s) */}
      <Sequence from={675} durationInFrames={270}>
        <Scene4Technical />
        <Audio src={staticFile("audio/sfx-whoosh.wav")} volume={0.3} />
      </Sequence>
      <Sequence from={681} durationInFrames={264}>
        <Audio src={staticFile("audio/vo-scene4.wav")} volume={0.95} />
      </Sequence>
      <Sequence from={830} durationInFrames={60}>
        <Audio src={staticFile("audio/sfx-chime.wav")} volume={0.3} />
      </Sequence>

      {/* Scene 5: Real-World Examples (31.5s - 38s) */}
      <Sequence from={945} durationInFrames={195}>
        <Scene5Summary />
        <Audio src={staticFile("audio/sfx-whoosh.wav")} volume={0.3} />
      </Sequence>
      <Sequence from={951} durationInFrames={189}>
        <Audio src={staticFile("audio/vo-scene5.wav")} volume={0.95} />
      </Sequence>
      <Sequence from={1000} durationInFrames={60}>
        <Audio src={staticFile("audio/sfx-chime.wav")} volume={0.32} />
      </Sequence>
    </AbsoluteFill>
  );
};
