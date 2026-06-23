import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for job seekers",
      features: [
        "Browse all jobs",
        "Create profile",
        "Apply to jobs",
        "Save favorites",
        "Basic alerts",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$9.99",
      period: "/month",
      description: "For serious job seekers",
      features: [
        "Everything in Starter",
        "Resume builder",
        "Priority applications",
        "Interview prep",
        "Salary insights",
        "Direct messaging",
        "Portfolio showcase",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "/month",
      description: "For employers",
      features: [
        "Post unlimited jobs",
        "Advanced filtering",
        "Candidate database",
        "Team collaboration",
        "Analytics dashboard",
        "API access",
        "Priority support",
        "Custom branding",
      ],
      cta: "Contact Sales",
      highlight: false,
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
              Simple, Transparent <span className="text-yellow-400">Pricing</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Choose the perfect plan for your career journey
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-lg border p-8 transition ${
                plan.highlight
                  ? "bg-yellow-400 text-black border-yellow-400 lg:scale-105"
                  : "bg-zinc-900 text-white border-yellow-400/20 hover:border-yellow-400"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-black/70" : "text-white/70"}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-black/70" : "text-white/70"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate("register")}
                className={`w-full px-6 py-3 font-bold rounded-lg flex items-center justify-center gap-2 transition ${
                  plan.highlight
                    ? "bg-black text-yellow-400 hover:bg-black/90"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-zinc-900 rounded-lg border border-yellow-400/20 p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose BULLOM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">89K+</div>
              <p className="text-white">Active Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2.4K+</div>
              <p className="text-white">Jobs Posted Daily</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <p className="text-white">User Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}