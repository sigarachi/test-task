import { ThemeProvider } from "@shared/ui/theme";
import { Router } from "@shared/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
