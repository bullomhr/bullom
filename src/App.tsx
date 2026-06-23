import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/pages/HomePage";
import JobsPage from "@/components/pages/JobsPage";
import CompaniesPage from "@/components/pages/CompaniesPage";
import AboutPage from "@/components/pages/AboutPage";
import BlogPage from "@/components/pages/BlogPage";
import ContactPage from "@/components/pages/ContactPage";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import DashboardPage from "@/components/pages/DashboardPage";
import AdminDashboard from "@/components/pages/AdminDashboard";
import PricingPage from "@/components/pages/PricingPage";
import FeaturesPage from "@/components/pages/FeaturesPage";
import NotFoundPage from "@/components/pages/NotFoundPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "jobs":
        return <JobsPage onNavigate={handleNavigate} />;
      case "companies":
        return <CompaniesPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      case "pricing":
        return <PricingPage onNavigate={handleNavigate} />;
      case "features":
        return <FeaturesPage onNavigate={handleNavigate} />;
      case "login":
        return <LoginPage onNavigate={handleNavigate} />;
      case "register":
        return <RegisterPage onNavigate={handleNavigate} />;
      case "dashboard":
        return <DashboardPage />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {currentPage !== "login" && currentPage !== "register" && (
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
      )}
      <main className="flex-grow">{renderPage()}</main>
      {currentPage !== "login" && currentPage !== "register" && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
}
