import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
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
      <Sequence from={0} durationInFrames={150}>
        <Scene1Title />
      </Sequence>
      <Sequence from={150} durationInFrames={150}>
        <Scene2Problem />
      </Sequence>
      <Sequence from={300} durationInFrames={240}>
        <Scene3Analogy />
      </Sequence>
      <Sequence from={540} durationInFrames={210}>
        <Scene4Technical />
      </Sequence>
      <Sequence from={750} durationInFrames={150}>
        <Scene5Summary />
      </Sequence>
    </AbsoluteFill>
  );
};
