import { Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import PocketShop from "./pages/PocketShop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/pocket-shop" element={<PocketShop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
