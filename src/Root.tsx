import React from "react";
import { Composition } from "remotion";
import { WhatIsAnApi } from "./WhatIsAnApi";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WhatIsAnApi"
        component={WhatIsAnApi}
        durationInFrames={1140}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
