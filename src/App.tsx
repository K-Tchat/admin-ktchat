import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}