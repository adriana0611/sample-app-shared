import { useEffect } from "react";

import { useAppData } from "./hooks/useAppData";
import { Module } from "./components";

function App() {
  const [data, setData] = useAppData();

  useEffect(() => {
    setData({ category: "product2" });
  }, [setData]);

  return (
    <div style={{ padding: 16 }}>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to sample-app-shared</h1>
        <p>Category: {data.category}</p>
      </div>

      <div style={{ marginTop: 32 }}>
        <Module name="Module Name">
          <p>Module Content</p>
        </Module>
      </div>
    </div>
  );
}

export default App;
