import Navigation from "../../../components/navigation/Navigation.js";
import { toolHubSettings, toolHubVICE } from "../../../assets/Videos.js";
import useFadeIn from '../../../effects/FadeIn/useFadeIn.js';
import Footer from "../../../components/footer/Footer.js";
import React, { useRef, useEffect } from 'react';
import '../css/sigparser.css';

const HeroSection = () => {
  return (
    <div className = "sigparser-hero-container text-align-left">
      <div className = "grid-1-3-col-container">
        <div className = "text-xs" style={{ paddingTop: '12px' }}>LLM Tool Development</div>
        <div className = "text-m">Enhancing Customer experience  through AI</div>
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div className = "sigparser-overview-container text-align-left">
      <div className = "grid-1-3-col-container">
        <div className = "sigparser-overview-details" style={{ paddingTop: '12px' }}>
          <div>
            <div className = "text-xs">Company</div>
            <div className = "text-muted text-s">SigParser</div>
          </div>
          <div>
            <div className = "text-xs">Role</div>
            <div className = "text-muted text-s">Developer</div>
          </div>
          <div>
            <div className = "text-xs">Year</div>
            <div className = "text-muted text-s">2023-2024</div>
          </div>
        </div>
        <div className = "sigparser-overview-details text-s">
          <div>
            For my senior capstone project, I had the distinct opportunity to collaborate with SigParser. 
            Over the course of this year-long endeavor, my team and I developed a suite of internal LLM tools 
            designed to enhance operational efficiency and streamline workflows.
          </div>
          <div>
            We adopted a robust <span className = "underline text-muted">CI/CD pipeline</span>, leveraging Amazon Bedrock services to ensure security 
            while optimizing cost-effectiveness. This foundation enabled us to deploy a centralized 
            platform, built with <span className = "underline text-muted">React</span>, that provided SigParser's staff with seamless access to manage and adapt 
            their tools effectively. This project not only honed my technical skills but also reinforced the 
            importance of <span className = "underline text-muted">agile methodologies</span> in real-world software development.
          </div>        
        </div>
      </div>
    </div>
  );
};

const HomeSection = () => {
  return (
    <div className = "sigparser-phase-container">
      <video autoPlay loop muted playsInline>
        <source src= { toolHubSettings } type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "text-muted text-s text-align-left">Phase 1: The Home Page</div>
      <div className = "grid-1-3-col-container text-align-left">
        <div></div>
        <div className = "text-s">
          The UI, built with React, prioritizes user experience. Each tool has customizable settings 
          for modifying LLMs and, uniquely, our Chatbot (VICE) allows database updates. Transparent 
          pricing is provided for developer convenience. This hub empowers developers to refine LLM 
          tools for Sigparser's systems, with the Chatbot serving as a proof of concept.
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className = "sigparser-hero-container text-align-left">
      <div className = "grid-1-3-col-container">
        <div className = "text-xs" style={{ paddingTop: '12px' }}>Tech Stack</div>
        <div className = "text-m">Technologies</div>
      </div>
    </div>
  );
};

const ViceSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <div className = "sigparser-phase-container">
      <video ref={videoRef} autoPlay loop muted playsInline>
        <source src= { toolHubVICE } type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "text-muted text-s text-align-left">Phase 2: VICE</div>
      <div className = "grid-1-3-col-container text-align-left">
        <div></div>
        <div className = "text-s">
          VICE (Virtual Interface for Customer Enhancement) served as a playful 
          acronym for our Chatbot. Leading its backend development, I orchestrated 
          the integration with AWS, managed web scraping, and crafted conversation logic.
        </div>
      </div>
    </div>
  );
};

function SigParser () {
  const fadeIn = useFadeIn();

  return (
    <div className= {`${fadeIn ? 'fade-in' : ''}`}>
      <Navigation />
      <div className = "content-grid">
        <HeroSection />
        <OverviewSection />
        <HomeSection />
        <TechStack />
        <ViceSection />
        <Footer />
      </div> 
    </div>
  );
}

export default SigParser;