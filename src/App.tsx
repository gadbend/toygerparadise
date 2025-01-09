import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/AboutUs";
import AdoptionGallery from "./components/AdoptionGallery";
import AdminDashboard from "./components/AdminDashboard";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToygerBreed } from "./components/breeds/ToygerBreed";
import { BengalBreed } from "./components/breeds/BengalBreed";
import CatDetailsPage from "./pages/CatDetailsPage";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adoption" element={<AdoptionGallery />} />
        <Route path="/breeds/toyger" element={<ToygerBreed />} />
        <Route path="/breeds/bengal" element={<BengalBreed />} />
        <Route path="/cats/:slug" element={<CatDetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
