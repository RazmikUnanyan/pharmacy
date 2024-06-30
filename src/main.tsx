import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./styles/reset.scss";

ReactDOM.createRoot(document.getElementById("widget-pharmacy")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// declare global {
//   interface Window {
//     renderPharmacyWidget: () => void;
//   }
// }
//
// const renderPharmacyWidget = () => {
//   ReactDOM.createRoot(document.getElementById("widget-pharmacy")!).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// };
//
// window.renderPharmacyWidget = renderPharmacyWidget;
