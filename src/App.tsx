import './App.css';

const App = () => {
  return (
    <div className="game-container">
      {/* Navigation */}
      <nav className="navbar">
        <button className="nav-btn menu-btn">
          MENU <span className="coin">🪙</span>
        </button>
        <button className="nav-btn">MY WORK</button>
        <button className="nav-btn">CONTACT ME</button>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Social Icons */}
        <div className="social-icons">
          <a href="mailto:" className="icon-box gmail">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" />
          </a>
          <a href="#" className="icon-box discord">
            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" />
          </a>
          <a href="#" className="icon-box signal">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.svg" alt="Signal" style={{display:'none'}} />
            <span style={{color:'white', fontWeight:'bold', fontSize:'18px'}}>S</span>
          </a>
        </div>

        {/* Character + Name */}
        <div className="hero-section">
          {/* Red box placeholder - ضع الشخصية هنا */}
          <div className="character-placeholder">
            <span>ضع الشخصية هنا</span>
          </div>
          <div className="hero-name">YOUNiS</div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="bottom-controls">
        <button className="arrow-btn">👈</button>
        <button className="start-btn">START</button>
        <button className="arrow-btn">👉</button>
      </div>
    </div>
  );
};

export default App;
