import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100">
      <Header />
      <Hero />
      <Footer companyName="Acme Corp" contactEmail="info@acmecorp.com" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
