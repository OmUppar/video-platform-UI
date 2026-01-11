import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1=email, 2=otp, 3=confirm
  const [message, setMessage] = useState("");

  // const BASE_URL = "http://localhost:3000"; // change to your backend port
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  // 1️⃣ Initialize Account
  const initializeAccount = async () => {
    try {
      // const res = await fetch(`${BASE_URL}/authentication/initialize-account`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      const res = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage("OTP sent to your email");
      setStep(2);
    } catch (err) {
      setMessage("Error sending OTP");
    }
  };

  // 2️⃣ Verify OTP
  const verifyOtp = async () => {
    try {
      const res = await fetch(`${BASE_URL}/authentication/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      setMessage("OTP verified");
      setStep(3);
    } catch (err) {
      setMessage("Invalid OTP");
    }
  };

  // 3️⃣ Confirm Login
  const confirmLogin = async () => {
    try {
      const res = await fetch(`${BASE_URL}/authentication/confirm-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage("Login successful 🎉");
    } catch (err) {
      setMessage("Login failed");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Login Flow</h2>

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <button onClick={initializeAccount}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <br />
          <br />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {step === 3 && (
        <>
          <button onClick={confirmLogin}>Confirm Login</button>
        </>
      )}

      <p>{message}</p>
    </div>
  );
}

export default App;
