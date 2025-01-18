import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

// Lazy load components
const AboutUs = lazy(() => import("./components/AboutUs"));
const AdoptionGallery = lazy(() => import("./components/AdoptionGallery"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const Contact = lazy(() => import("./components/Contact"));
const Login = lazy(() => import("./components/Login"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const ToygerBreed = lazy(() => import("./components/breeds/ToygerBreed").then(module => ({ default: module.ToygerBreed })));
const BengalBreed = lazy(() => import("./components/breeds/BengalBreed").then(module => ({ default: module.BengalBreed })));
const CatDetailsPage = lazy(() => import("./pages/CatDetailsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adoption" element={<AdoptionGallery />} />
        <Route path="/adoption/:slug" element={<CatDetailsPage />} />
        <Route path="/breeds/toyger" element={<ToygerBreed />} />
        <Route path="/breeds/bengal" element={<BengalBreed />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
