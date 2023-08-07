import React from "react";

import { Module } from "./components/Module";
import {
  SampleAppContext,
  SampleAppContextProvider,
} from "./contexts/sample-app";

function App() {
  return (
    <SampleAppContextProvider>
      <SampleAppContext.Consumer>
        {(data) => {
          return (
            <div style={{ padding: 16 }}>
              <div style={{ textAlign: "center" }}>
                <h1>Welcome to sample-app-shared</h1>
                <p>Category: {data.product}</p>
              </div>

              <div style={{ marginTop: 32 }}>
                <Module name="Module Name">
                  <p>Module Content</p>
                </Module>
              </div>
            </div>
          );
        }}
      </SampleAppContext.Consumer>
    </SampleAppContextProvider>
  );
}

export default App;
