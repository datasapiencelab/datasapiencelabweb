import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Navigate,
} from "react-router-dom";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import ExpertisePage from "./pages/ExpertisePage";
import PricingPage from "./pages/PricingPage";
import FAQsPage from "./pages/FAQsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function AppContent() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="w-full">
            <ScrollToTop />
            <Header isHomePage={isHomePage} />
            <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route
                    path="/projects/:slug"
                    element={<ProjectDetailsPage />}
                />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Additional Pages */}
                <Route path="/expertise" element={<ExpertisePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faqs" element={<FAQsPage />} />

                {/* Catch-all Redirect to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
