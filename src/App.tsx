import { useEffect } from "react";
import { useAppData } from "./hooks/useAppData";

function App() {
  const [data, setData] = useAppData();

  useEffect(() => {
    setData({ category: "product2" });
  }, [setData]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to sample-app-shared</h1>
      <p>Category: {data.category}</p>
    </div>
  );
}

export default App;
