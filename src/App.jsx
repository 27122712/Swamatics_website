import { useState } from "react";
import { Toaster } from "react-hot-toast";
import OptimizedRoutes from "./components/ProtectedRoutes/OptimizedRoutes";
import AnalyticsTracker from "./analytics/AnalyticsTracker";
import { TranslationProvider } from "./contexts/TranslationContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TranslationProvider>
      <AnalyticsTracker />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1 rem",
          },
        }}
      ></Toaster>
      <OptimizedRoutes />
    </TranslationProvider>
  );
}

export default App;
