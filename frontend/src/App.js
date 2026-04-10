import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://20.219.240.243:5000")
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