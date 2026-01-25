import { useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage";

function App() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const BASE_URL = "https://video-platform-ejj3.onrender.com";

  const initializeAccount = async () => {
    try {
      await fetch(`${BASE_URL}/authentication/initialize-account`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setMessage("📩 OTP sent to your email");
      setStep(2);
    } catch {
      setMessage("❌ Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      await fetch(`${BASE_URL}/authentication/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      setMessage("✅ OTP verified");
      setStep(3);
    } catch {
      setMessage("❌ Invalid OTP");
    }
  };

  const confirmLogin = async () => {
    try {
      await fetch(`${BASE_URL}/authentication/confirm-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setMessage("🎉 Login successful");
      setIsLoggedIn(true);
    } catch {
      setMessage("❌ Login failed");
    }
  };

  if (isLoggedIn) {
  return <LandingPage />;
}

  return (
    <div className="app-container">
      <div className="login-card">
        <h2>🎬 Video Platform Login</h2>

        {step === 1 && (
          <>
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button" onClick={initializeAccount}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              className="input"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="button" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <button className="button" onClick={confirmLogin}>
            Confirm Login
          </button>
        )}

        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
