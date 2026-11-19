# What is an API? — Remotion Visual Explainer

An animated video and interactive web explainer that teaches **what an API (Application Programming Interface) is** using custom visuals, analogies, and real-world examples.

---

## How It Was Built

1. **Project Setup (Remotion + TypeScript + React)**
   - Initialized a Node/TypeScript project with `remotion`, `@remotion/cli`, `react`, and `react-dom`.
   - Configured the 1920×1080 @ 30fps (900 frames / 30 seconds) composition `WhatIsAnApi` in `src/Root.tsx` and `src/WhatIsAnApi.tsx`.

2. **Animated Scenes (`src/components/`)**
   - `Scene1Title.tsx`: Introduces **API (Application Programming Interface)** with animated node connections.
   - `Scene2Problem.tsx`: Shows why separate client apps and cloud databases need a structured API contract.
   - `Scene3Analogy.tsx`: Animates the **Restaurant Waiter** analogy (Customer → Waiter/API → Kitchen/Server → Dish).
   - `Scene4Technical.tsx`: Visualizes an HTTP `GET /v1/weather?city=London` request and `200 OK` JSON response.
   - `Scene5Summary.tsx`: Highlights real-world APIs (Weather, Maps, Payments, Social Login).

3. **Previewed in Remotion Studio UI**
   - Launched `npx remotion studio src/index.ts --port 3000` to inspect and preview the animation in the Remotion Studio UI before rendering.

4. **Rendered to MP4**
   - Rendered the composition with `npx remotion render src/index.ts WhatIsAnApi what-is-an-api.mp4`.

5. **Generated Custom Visuals (`assets/`) & Deployed to `index.html`**
   - Generated custom dark-mode illustrations for each explanation section and saved them in `assets/`:
     - `assets/restaurant-analogy.jpg`
     - `assets/http-request-response.jpg`
     - `assets/api-real-world.jpg`
   - Built `index.html` with the embedded `what-is-an-api.mp4` player, clickable chapter jump buttons, and illustrated explanation cards.

---

## Run Locally

```bash
# Install dependencies
npm install

# Open Remotion Studio UI
npx remotion studio src/index.ts --port 3000

# Render the MP4 video
npx remotion render src/index.ts WhatIsAnApi what-is-an-api.mp4

# Serve index.html locally
python3 -m http.server 8080
```
