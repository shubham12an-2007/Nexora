import { useState } from "react";
import { User, Bell, Shield, Palette, Save } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);

  return (
    <div className="animate-float-in max-w-4xl space-y-7">
      <SectionTitle
        eyebrow="Workspace"
        title="Settings"
        description="Manage your Nexora workspace and preferences."
      />

      {/* Profile */}
      <section className="glass-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-primary-500/10 p-2 text-primary-500">
            <User size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Profile
            </h2>
            <p className="text-sm text-slate-500">
              Update your personal information.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Full name</label>

            <input
              type="text"
              defaultValue="Shubham Kumar"
              className="input-field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              type="email"
              defaultValue="shubham@example.com"
              className="input-field"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Professional headline
            </label>

            <input
              type="text"
              defaultValue="Software Developer"
              className="input-field"
            />
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="glass-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-primary-500/10 p-2 text-primary-500">
            <Bell size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Notifications
            </h2>

            <p className="text-sm text-slate-500">
              Control how Nexora keeps you updated.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <label className="flex cursor-pointer items-center justify-between gap-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Email notifications
              </p>

              <p className="text-sm text-slate-500">
                Receive important updates by email.
              </p>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="h-5 w-5"
            />
          </label>

          <label className="flex cursor-pointer items-center justify-between gap-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Job alerts
              </p>

              <p className="text-sm text-slate-500">
                Get notified about relevant job opportunities.
              </p>
            </div>

            <input
              type="checkbox"
              checked={jobAlerts}
              onChange={(e) => setJobAlerts(e.target.checked)}
              className="h-5 w-5"
            />
          </label>
        </div>
      </section>

      {/* Security */}
      <section className="glass-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-primary-500/10 p-2 text-primary-500">
            <Shield size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Security
            </h2>

            <p className="text-sm text-slate-500">
              Manage your account security.
            </p>
          </div>
        </div>

        <button className="btn-secondary">Change Password</button>
      </section>

      {/* Appearance */}
      <section className="glass-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-primary-500/10 p-2 text-primary-500">
            <Palette size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Appearance
            </h2>

            <p className="text-sm text-slate-500">
              Customize your Nexora experience.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
          <p className="font-medium text-slate-900 dark:text-white">Theme</p>

          <p className="mt-1 text-sm text-slate-500">
            Use the theme switcher in the navigation bar to change between light
            and dark mode.
          </p>
        </div>
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <button className="btn-primary flex items-center gap-2">
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
