import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Briefcase, CheckCircle, AlertCircle } from "lucide-react";

interface RegisterPageProps {
  onNavigate: (page: string) => void;
}

export default function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [userType, setUserType] = useState<"job_seeker" | "employer">("job_seeker");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.password === formData.confirmPassword
    ) {
      setStatus("success");
      setTimeout(() => {
        onNavigate("login");
      }, 1500);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
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
            <h1 className="text-3xl font-bold text-white">Create Account</h1>
            <p className="text-white/70 mt-2">Join BULLOM today</p>
          </div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-green-500/10 border border-green-500 rounded-lg p-4 flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <p className="text-green-500 text-sm font-medium">
                Account created! Redirecting to login...
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-center gap-2"
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-500 text-sm font-medium">
                Please fill all fields correctly
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setUserType("job_seeker")}
              className={`px-4 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                userType === "job_seeker"
                  ? "bg-yellow-400 text-black"
                  : "bg-black border border-yellow-400/30 text-white hover:border-yellow-400"
              }`}
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Job Seeker</span>
            </button>
            <button
              onClick={() => setUserType("employer")}
              className={`px-4 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                userType === "employer"
                  ? "bg-yellow-400 text-black"
                  : "bg-black border border-yellow-400/30 text-white hover:border-yellow-400"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="hidden sm:inline">Employer</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-yellow-400/30 rounded-lg text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition"
                  required
                />
              </div>
            </div>

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

            <div>
              <label className="block text-white font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-black border border-yellow-400/30 rounded-lg text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition"
                  required
                />
              </div>
            </div>

            <label className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 bg-black border border-yellow-400/30 rounded checked:bg-yellow-400 cursor-pointer"
                required
              />
              <span className="text-white text-sm">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition mt-6"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70">
              Already have an account?{" "}
              <button
                onClick={() => onNavigate("login")}
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}