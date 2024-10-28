import React from "react"
import ReactDOM from "react-dom"
import IFrame from "./IFrame"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <IFrame />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

