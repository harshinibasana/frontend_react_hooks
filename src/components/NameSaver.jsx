import React from "react";
import useLocalStorage from "./useLocalStorage";

function NameSaver() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div style={{ padding: 20 }}>
      <h2> Save Your Name</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button
        onClick={() => setName("")}
        style={{
          background: "lightcoral",
          color: "white",
          border: "none",
          padding: "8px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clear
      </button>

      <p style={{ marginTop: "10px" }}>
        {name ? `Hello, ${name}!` : "No name saved yet."}
      </p>
    </div>
  );
}

export default NameSaver;
