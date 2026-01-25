import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <h1>🎬 VideoPlatform</h1>
        <button className="logout-btn">Logout</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Unlimited Videos, Anytime 🎥</h2>
        <p>Watch, upload, and explore trending videos from creators worldwide.</p>
        <button className="primary-btn">Explore Now</button>
      </section>

      {/* Video Sections */}
      <section className="videos">
        <h3>🔥 Trending</h3>
        <div className="video-grid">
          <div className="video-card">🎞️ Video 1</div>
          <div className="video-card">🎞️ Video 2</div>
          <div className="video-card">🎞️ Video 3</div>
          <div className="video-card">🎞️ Video 4</div>
        </div>

        <h3>✨ Recommended for You</h3>
        <div className="video-grid">
          <div className="video-card">📺 Video A</div>
          <div className="video-card">📺 Video B</div>
          <div className="video-card">📺 Video C</div>
          <div className="video-card">📺 Video D</div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
