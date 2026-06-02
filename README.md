# Eras of AI History: An Exploration

A modern interactive timeline exploring the history of Artificial Intelligence, built with React and Tailwind CSS.

## Architecture

### Tech Stack
*   **Framework**: React 19 (via ES Modules)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS (Runtime Configuration via CDN)
*   **Icons**: Lucide React
*   **Fonts**: Inter (Google Fonts)

### Project Structure
The application follows a modular, component-based architecture:

*   **`index.html`**: Entry point. Handles dependency resolution via `importmap` and configures global Tailwind settings (colors, fonts).
*   **`data.ts`**: Centralized content store. Contains the `appData` object with all historical eras, descriptions, and events to keep content separate from presentation logic.
*   **`App.tsx`**: The main controller component.
    *   Manages layout.
    *   Implements `IntersectionObserver` to track scroll position and highlight the active era in the navigation.
    *   Passes data down to child components.
*   **`components/`**:
    *   `Hero.tsx`: Visual landing section with animated gradients and glassmorphism effects.
    *   `Navigation.tsx`: Sticky top bar handling smooth scrolling to anchors and mobile menu toggling.
    *   `TimelineSection.tsx`: Renders individual historical periods. Features a sticky left column for the era title that stays visible while scrolling through long descriptions.

### Data Flow
Data is unidirectional. `App.tsx` imports the static `appData`, renders the `Navigation` (passing the full list of eras), and maps over the eras to render `TimelineSection` components.

## Deployment

This application is designed as a client-side static web app utilizing modern browser features.

*   **Module Loading**: It uses native ES Modules. Third-party dependencies (React, ReactDOM, Lucide) are loaded directly from a CDN (`aistudiocdn.com`) as defined in the `importmap` in `index.html`.
*   **No Build Process**: The application is configured to run without a traditional build step (like Webpack or Vite) in environments that support on-the-fly TSX compilation or native ES module serving.
*   **Hosting**: Can be deployed to any static web host. Ensure the server serves the files with the correct MIME types.
