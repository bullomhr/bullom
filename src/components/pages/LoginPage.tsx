import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, CheckCircle, AlertCircle } from "lucide-react";

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setStatus("success");
      setTimeout(() => {
        onNavigate("dashboard");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-extrabold text-black">B</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-white/70 mt-2">Sign in to your BULLOM account</p>
          </div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-green-500/10 border border-green-500 rounded-lg p-4 flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <p className="text-green-500 text-sm font-medium">
                Login successful! Redirecting...
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-yellow-400/30 rounded-lg text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-black border border-yellow-400/30 rounded-lg text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-black border border-yellow-400/30 rounded checked:bg-yellow-400 cursor-pointer"
                />
                <span className="text-white text-sm">Remember me</span>
              </label>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 text-sm">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-400/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-zinc-900 text-white/70">Or</span>
            </div>
          </div>

          <button className="w-full px-6 py-3 bg-black border border-yellow-400/30 text-white font-semibold rounded-lg hover:border-yellow-400 transition">
            Continue with Google
          </button>

          <div className="mt-8 text-center">
            <p className="text-white/70">
              Don't have an account?{" "}
              <button
                onClick={() => onNavigate("register")}
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/50 text-sm mt-6"
        >
          By signing in, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </motion.div>
    </div>
  );
}