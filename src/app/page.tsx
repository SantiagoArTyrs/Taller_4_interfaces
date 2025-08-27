export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-start justify-center p-6 sm:p-10">
      <section className="w-full max-w-2xl rounded-3xl bg-white shadow-xl border border-slate-200 p-6 sm:p-8">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-900">Appearance</h1>
          <p className="text-slate-500">Set or customize your preferences for the system</p>
        </div>

        <div className="my-6 h-px bg-slate-200"></div>

        {/* Language */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-medium text-slate-900">Language</p>
            <p className="text-sm text-slate-500">Select the language of the platform</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
            English
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="my-6 h-px bg-slate-200"></div>

        {/* Interface theme */}
        <div className="space-y-3">
          <div>
            <p className="font-medium text-slate-900">Interface theme</p>
            <p className="text-sm text-slate-500">Customize your application appearence</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Auto */}
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 p-3 hover:border-slate-300 transition">
              <div className="rounded-xl bg-gradient-to-b from-indigo-200/60 to-purple-200/70 h-28 w-full flex items-end">
                <div className="w-full rounded-b-xl bg-white/80 px-3 pb-3 pt-2">
                  <div className="h-1.5 w-7 rounded bg-slate-300 mb-1.5"></div>
                  <div className="h-1.5 w-14 rounded bg-slate-200"></div>
                </div>
              </div>
              <span className="mt-2 text-sm text-slate-700">Auto</span>
            </div>

            {/* Light (selected) */}
            <div className="relative flex flex-col items-center rounded-2xl border border-slate-200 p-3 ring-2 ring-indigo-500">
              <div className="rounded-xl bg-white h-28 w-full border border-slate-200 flex items-end">
                <div className="w-full rounded-b-xl bg-white px-3 pb-3 pt-2">
                  <div className="h-1.5 w-7 rounded bg-slate-300 mb-1.5"></div>
                  <div className="h-1.5 w-14 rounded bg-slate-200"></div>
                </div>
              </div>
              <span className="mt-2 text-sm text-slate-700">Light</span>
              <span className="absolute -top-2 -left-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

            {/* Dark */}
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 p-3 hover:border-slate-300 transition">
              <div className="rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 h-28 w-full border border-slate-800 flex items-end">
                <div className="w-full rounded-b-xl bg-slate-800/70 px-3 pb-3 pt-2">
                  <div className="h-1.5 w-7 rounded bg-slate-700 mb-1.5"></div>
                  <div className="h-1.5 w-14 rounded bg-slate-700"></div>
                </div>
              </div>
              <span className="mt-2 text-sm text-slate-700">Dark</span>
            </div>
          </div>
        </div>

        <div className="my-6 h-px bg-slate-200"></div>

        {/* Accent color */}
        <div className="flex items-center justify-between space-y-3">
          <div className="flex flex-col">
            <p className="font-medium text-slate-900">Accent color</p>
            <p className="text-sm text-slate-500">Pick your platform's main color</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="h-6 w-6 rounded-full bg-amber-400 ring-2 ring-indigo-500 ring-offset-2 shadow-sm"></span>
            <span className="h-6 w-6 rounded-full bg-rose-400 shadow-sm"></span>
            <span className="h-6 w-6 rounded-full bg-green-400 shadow-sm"></span>
            <span className="h-6 w-6 rounded-full bg-lime-400 shadow-sm"></span>
            <span className="h-6 w-6 rounded-full bg-sky-500 shadow-sm"></span>
            <span className="h-6 w-6 rounded-full bg-fuchsia-400 shadow-sm"></span>
          </div>
        </div>

        <div className="my-6 h-px bg-slate-200"></div>

        {/* Toggles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-800">Reduce motion</span>
            <div className="relative h-6 w-11 rounded-full bg-indigo-600 flex items-center">
              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow ring-1 ring-indigo-500 translate-x-5"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-800">Auto play</span>
            <div className="relative h-6 w-11 rounded-full bg-indigo-600 flex items-center">
              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow ring-1 ring-indigo-500 translate-x-5"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-800">High quality photo</span>
            <div className="relative h-6 w-11 rounded-full bg-slate-200 flex items-center">
              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow ring-1 ring-slate-300"></div>
            </div>
          </div>
        </div>

        <div className="my-6 h-px bg-slate-200"></div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <button className="text-sm text-slate-500">Reset to default</button>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 shadow-sm">Cancel</button>
            <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white shadow-md">Save Preferences</button>
          </div>
        </div>
      </section>
    </main>
  );
}
