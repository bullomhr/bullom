import { motion } from "framer-motion";
import { Award, Target, Zap, TrendingUp, Shield, Users } from "lucide-react";

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}

export default function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const features = [
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "AI-powered recommendations based on your skills and preferences",
    },
    {
      icon: TrendingUp,
      title: "Career Analytics",
      description: "Track your application progress and get insights on market trends",
    },
    {
      icon: Award,
      title: "Verified Employers",
      description: "All companies are verified to ensure legitimate opportunities",
    },
    {
      icon: Users,
      title: "Networking Hub",
      description: "Connect with professionals and industry experts",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your data is encrypted and protected with enterprise-level security",
    },
    {
      icon: Zap,
      title: "One-Click Apply",
      description: "Apply to jobs instantly without filling repetitive forms",
    },
  ];

  const premiumFeatures = [
    {
      title: "Resume Builder",
      description: "Create ATS-optimized resumes with professional templates",
      benefit: "Increase your chances of passing through automated screening",
    },
    {
      title: "Interview Prep",
      description: "Practice with AI-powered mock interviews",
      benefit: "Prepare confidently for your dream job interviews",
    },
    {
      title: "Salary Negotiation",
      description: "Data-driven salary ranges for every position",
      benefit: "Negotiate with confidence based on market data",
    },
    {
      title: "Portfolio Showcase",
      description: "Display your work and projects to employers",
      benefit: "Stand out from other candidates with your best work",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-black text-white py-20 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Powerful <span className="text-yellow-400">Features</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Everything you need to succeed in your career journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-8 hover:border-yellow-400 transition group"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 mb-3">{feature.description}</p>
                    <p className="text-yellow-400 font-semibold text-sm">
                      ✓ {feature.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-black mb-4">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-xl text-black mb-8">
            Start with free access and upgrade anytime to unlock premium features
          </p>
          <button
            onClick={() => onNavigate("register")}
            className="px-8 py-4 bg-black text-yellow-400 font-bold rounded-lg hover:bg-black/90 transition"
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}