import IntroPage from "./components/IntroPage";
import Questions from "./components/Questions";
import { categories, categoriesD } from "./Contexts/categoryContext";
import { Route, Navigate, Router, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
function App() {
  return (
    <categories.Provider value={categoriesD}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<IntroPage />} />
          <Route path="questions/:diff/:cat/:num" element={<Questions />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </categories.Provider>
  );
}

export default App;
