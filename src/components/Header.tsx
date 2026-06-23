import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { useStore } from "@/store";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setUser } = useStore();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "jobs", label: "Jobs" },
    { id: "companies", label: "Companies" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => onNavigate("home")} className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-extrabold">
              B
            </div>
            BULLOM
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden sm:flex items-center gap-4">
                <button
                  onClick={() => onNavigate(user.role === "admin" ? "admin" : "dashboard")}
                  className="text-sm font-medium text-white hover:text-yellow-400"
                >
                  {user.role === "admin" ? "Admin" : "Dashboard"}
                </button>
                <button onClick={() => setUser(null)} className="p-2 text-white hover:text-yellow-400">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <button
                  onClick={() => onNavigate("login")}
                  className="text-sm font-medium text-white hover:text-yellow-400"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate("register")}
                  className="text-sm font-bold px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
                >
                  Sign Up
                </button>
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-yellow-400/20 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg text-white ${
                  currentPage === item.id
                    ? "bg-yellow-400 text-black"
                    : "hover:bg-zinc-900"
                }`}
              >
                {item.label}
              </button>
            ))}
            {!user && (
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => {
                    onNavigate("login");
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 px-4 py-2 border border-yellow-400 text-white rounded-lg"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    onNavigate("register");
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
