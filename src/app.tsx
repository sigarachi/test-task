import { ThemeProvider } from "@shared/ui/theme";
import { Router } from "@shared/router";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
