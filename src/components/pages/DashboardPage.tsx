import { useState } from "react";
import { motion } from "framer-motion";
import { LogOut, Settings, User, Bell, Shield, FileText, BarChart3, Heart } from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "applications" | "saved" | "profile" | "settings">("overview");

  const stats = [
    { label: "Applications", value: "12", icon: FileText, color: "text-blue-400" },
    { label: "Saved Jobs", value: "8", icon: Heart, color: "text-red-400" },
    { label: "Profile Views", value: "156", icon: BarChart3, color: "text-green-400" },
    { label: "Messages", value: "3", icon: Bell, color: "text-purple-400" },
  ];

  const applications = [
    { id: 1, title: "Senior React Developer", company: "TechCorp Inc.", status: "Pending", date: "Mar 15" },
    { id: 2, title: "Product Manager", company: "Innovation Labs", status: "Interview", date: "Mar 10" },
    { id: 3, title: "Full Stack Engineer", company: "CloudTech", status: "Rejected", date: "Mar 5" },
  ];

  const savedJobs = [
    { id: 1, title: "UX/UI Designer", company: "Creative Studios", salary: "$90-130K" },
    { id: 2, title: "Marketing Manager", company: "BrandBoost", salary: "$80-120K" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-6 sticky top-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white">John Doe</h3>
                  <p className="text-sm text-white/70">Job Seeker</p>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "overview", label: "Overview", icon: BarChart3 },
                  { id: "applications", label: "Applications", icon: FileText },
                  { id: "saved", label: "Saved Jobs", icon: Heart },
                  { id: "profile", label: "Profile", icon: User },
                  { id: "settings", label: "Settings", icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === item.id
                        ? "bg-yellow-400 text-black font-semibold"
                        : "text-white hover:bg-zinc-800"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </nav>

              <button className="w-full mt-6 px-4 py-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition font-semibold flex items-center justify-center gap-2">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-6 hover:border-yellow-400 transition"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white/70 text-sm">{stat.label}</p>
                            <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                          </div>
                          <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Recent Applications</h2>
                    <div className="space-y-4">
                      {applications.map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 bg-black rounded-lg border border-yellow-400/10">
                          <div>
                            <h3 className="font-semibold text-white">{app.title}</h3>
                            <p className="text-sm text-white/70">{app.company}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              app.status === "Pending" ? "bg-yellow-400/20 text-yellow-400" :
                              app.status === "Interview" ? "bg-green-400/20 text-green-400" :
                              "bg-red-400/20 text-red-400"
                            }`}>
                              {app.status}
                            </span>
                            <p className="text-xs text-white/50 mt-2">{app.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Applications Tab */}
              {activeTab === "applications" && (
                <div className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">My Applications</h2>
                  <div className="space-y-4">
                    {applications.map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 bg-black rounded-lg border border-yellow-400/10 hover:border-yellow-400 transition">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{app.title}</h3>
                          <p className="text-sm text-white/70">{app.company}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            app.status === "Pending" ? "bg-yellow-400/20 text-yellow-400" :
                            app.status === "Interview" ? "bg-green-400/20 text-green-400" :
                            "bg-red-400/20 text-red-400"
                          }`}>
                            {app.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Jobs Tab */}
              {activeTab === "saved" && (
                <div className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Saved Jobs</h2>
                  <div className="space-y-4">
                    {savedJobs.map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-4 bg-black rounded-lg border border-yellow-400/10 hover:border-yellow-400 transition">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{job.title}</h3>
                          <p className="text-sm text-white/70">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-yellow-400">{job.salary}</p>
                          <button className="text-xs text-red-400 hover:text-red-300 mt-1">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Profile Settings</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className="px-4 py-3 bg-black border border-yellow-400/30 rounded-lg text-white" />
                      <input type="text" placeholder="Last Name" className="px-4 py-3 bg-black border border-yellow-400/30 rounded-lg text-white" />
                    </div>
                    <textarea placeholder="Bio" rows={4} className="w-full px-4 py-3 bg-black border border-yellow-400/30 rounded-lg text-white" />
                    <button type="submit" className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300">
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="bg-zinc-900 rounded-lg border border-yellow-400/20 p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-yellow-400/10">
                      <div>
                        <p className="font-semibold text-white">Email Notifications</p>
                        <p className="text-sm text-white/70">Receive job recommendations</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-yellow-400/10">
                      <div>
                        <p className="font-semibold text-white">Two-Factor Auth</p>
                        <p className="text-sm text-white/70">Enhance account security</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}