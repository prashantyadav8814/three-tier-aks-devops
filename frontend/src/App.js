import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://4.224.185.10:5000")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Three Tier DevOps App 🚀</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;