import useHoverScale from '../../../effects/useHoverScale.js';
import { headshot } from '../../../assets/Images.js';
import resume from "../../../assets/resume/Resume.pdf"
import '../css/heroSection.css'

function HeroSection () {
  const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

  return (
    <div className = "paddingGlobal">
      <div id = "home" className = "largeContainer">
        <div className = "heroSection">
          <div className= "heroSection-Left textAlign-Left">
            <h2 className = "textSizeM">Hello, I'm</h2>
            <h1 className = "textSizeL">Guadalupe Cruz</h1>
            <h2 className = "textSizeM">Software Engineer</h2>
            <div className = "paddingXS"></div>
            <div className="resumeButton" style={getScaleStyle('resume')} onMouseEnter={() => handleMouseEnter('resume')} onMouseLeave={handleMouseLeave}>
              <a href= {resume} download="Guadalupes_Resume.pdf" className="resumeButtonLink">
                <div className="textSizeS textColor-Secondary">View My Resume</div>
              </a>
            </div>
          </div>
          <div className = "heroSection-Right">
            <div class="heroSection-imageWrapper">
              <div className = "heroSection-backgroundShape"></div>
              <img src={headshot} alt="Guadalupe Cruz" loading = "lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HeroSection;