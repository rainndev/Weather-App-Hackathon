import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchCityProvider } from "./context/SearchCity.tsx";
import { ImperialSwitcherProvider } from "./context/ImperialSwitcherContext.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchCityProvider>
      <ImperialSwitcherProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ImperialSwitcherProvider>
    </SearchCityProvider>
  </StrictMode>,
);
