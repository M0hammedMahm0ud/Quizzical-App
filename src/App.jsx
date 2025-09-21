import IntroPage from "./components/IntroPage";
import Questions from "./components/Questions";
import { categories } from "./Contexts/categoryContext";
import { Route, Routes, Navigate } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
function App() {
  const categoriesD = [
    { category: "Sports", apiId: 21 },
    { category: "Comics", apiId: 29 },
    { category: "Film", apiId: 11 },
    { category: "Art", apiId: 25 },
    { category: "General", apiId: 9 },
    { category: "Books", apiId: 10 },
    { category: "Computers", apiId: 18 },
    { category: "History", apiId: 23 },
    { category: "Anime & Manga", apiId: 31 },
    { category: "Cartoon & Animations", apiId: 32 },
    { category: "Geography", apiId: 22 },
  ];

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
