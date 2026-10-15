import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Certificates,
  Chatbot,
} from "./components";
import StoryBackground from "./components/story/StoryBackground";
import StoryProgress from "./components/story/StoryProgress";
import OracleChapter from "./components/story/OracleChapter";
import GestureChapter from "./components/story/GestureChapter";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Site-wide animated background and story navigation */}
        <StoryBackground />
        <StoryProgress />

        <Navbar />
        <Hero />

        <About />
        <OracleChapter />
        <GestureChapter />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Certificates />
        <Contact />

        {/* Chatbot Component */}
        <Chatbot />
      </div>
    </BrowserRouter>
  );
};

export default App;
