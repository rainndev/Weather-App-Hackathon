import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchCityProvider } from "./context/SearchCity.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchCityProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SearchCityProvider>
  </StrictMode>,
);
