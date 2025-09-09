export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* ===== Top Feature + Categories ===== */}
        <article className="md:col-span-10 relative bg-white rounded-2xl shadow-lg p-5 md:p-6 w-255">
  <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
    {/* Imagen */}
    <div className="md:col-span-3">
      <div className="w-full h-48 md:h-52 overflow-hidden rounded-xl bg-slate-200 aspect-[16/10] xl:h-80">
        <img
          src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1600&auto=format&fit=crop"
          alt="Lamp"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* Texto */}
    <div className="md:col-span-3">
      <h2 className="text-2xl md:text-[28px] leading-tight font-semibold text-slate-900">
        Green plants are going to<br />
        Extinct about 500 times faster<br />
        than they should, Study finds
      </h2>

      <p className="mt-3 text-[15px] text-slate-500">
        If you are the sort of person who just can not keep a plant alive, you are not alone
        according to a new study published June 10 in the journal HOLIIIIIIS
      </p>

      {/* Autor */}
      <div className="mt-6 flex items-center gap-3">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
          alt="Alexander Parkinson"
        />
        <div>
          <p className="text-sm font-medium text-slate-700">Alexander Parkinson</p>
          <p className="text-xs text-slate-400">Jun 20, 2019</p>
        </div>
      </div>
    </div>
  </div>

  {/* Botón compartir flotante abajo-derecha */}
  <button
    className="absolute right-6 bottom-6 h-9 w-9 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center"
    aria-label="Share"
  >
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-500" fill="currentColor">
      <path d="M3 11l18-8-8 18-2.6-6.2L3 11z" />
    </svg>
  </button>
</article>


        {/* Categories */}
<aside className="md:col-span-2 md:col-start-11 bg-white rounded-2xl shadow-lg p-4">
  <ul className="space-y-4">
    {/* Global */}
    <li className="flex items-center gap-3 p-2">
      <span className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
        <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="7" />
        </svg>
      </span>
      <span className="text-slate-500">Global</span>
    </li>

    {/* Business (stacked squares) */}
    <li className="flex items-center gap-3 p-2">
      <span className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
        <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="6" width="5" height="5" rx="1" />
          <rect x="13" y="6" width="5" height="5" rx="1" />
          <rect x="6" y="13" width="5" height="5" rx="1" />
        </svg>
      </span>
      <span className="text-slate-500">Business</span>
    </li>

    {/* Entertainment (play outline) */}
    <li className="flex items-center gap-3 p-2">
      <span className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
        <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="9,7 17,12 9,17" />
        </svg>
      </span>
      <span className="text-slate-500">Entertainment</span>
    </li>

    {/* Sports (selected) */}
    <li className="flex items-center gap-3 p-2">
      <span className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
        {/* icono blanco dentro del cuadrado azul */}
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 5h10a2 2 0 0 1 2 2v10l-5-3-5 3V7a2 2 0 0 1 2-2z" />
        </svg>
      </span>
      <span className="text-slate-900 font-medium">Sports</span>
    </li>

    {/* Health (dumbbell) */}
    <li className="flex items-center gap-3 p-2">
      <span className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
        <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="9" width="3" height="6" rx="1" />
          <rect x="18" y="9" width="3" height="6" rx="1" />
          <rect x="6.5" y="11" width="11" height="2" rx="1" />
        </svg>
      </span>
      <span className="text-slate-500">Health</span>
    </li>
  </ul>
</aside>


        
        {/* Coffee card */}
        <article className="md:col-span-4 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-48 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
              alt="Coffee"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-slate-900">
              How to make the perfect morning coffee, according to the Science
            </h3>
            <div className="mt-5 flex items-center gap-3">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop"
                alt="Tara"
              />
              <div className="text-sm">
                <p className="text-slate-700">Tara Gibson</p>
                <p className="text-slate-400 text-xs">Jul 13, 2019</p>
              </div>
            </div>
          </div>
        </article>

        {/* Search card */}
        <section className="md:col-span-4 bg-white rounded-2xl shadow-lg h-30 p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search for articles"
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400"
            />
            <button className="h-12 w-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center" aria-label="Search">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-5 text-sm">
            <span className="text-slate-500">#Politics</span>
            <span className="text-slate-500">#Science</span>
            <span className="text-slate-500">#Movies</span>
            <span className="text-slate-500">#Technology</span>
          </div>
        </section>

        {/* Short film card */}
        <article className="md:col-span-4 bg-white rounded-2xl shadow-lg h-30 p-4">
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="col-span-2 h-24 rounded-xl overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop"
                alt="Building"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-3">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full border border-indigo-200 text-indigo-500 flex items-center justify-center">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 3l10 9-10 9V3z" />
                  </svg>
                </span>
                <p className="font-medium text-slate-900">An Inspiring Short Film</p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-slate-500 text-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M2.05 12a9.94 9.94 0 0 1 19.9 0 9.94 9.94 0 0 1-19.9 0Z" />
                </svg>
                <span>80,989</span>
              </div>
            </div>
          </div>
        </article>

        {/* ===== Bottom row: Profile + Arrows + Tags ===== */}
        <section className="md:col-span-8 md:col-start-5 md:row-start-2 bg-white rounded-2xl shadow-lg p-4 h-90 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-2 h-40 rounded-xl overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1200&auto=format&fit=crop"
                alt="Alex"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-semibold text-slate-900">Alex Morrison</h3>
              <p className="text-slate-500">Senior Journalist</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 p-3 text-center">
                  <p className="text-xs text-slate-500">Articles</p>
                  <p className="text-lg font-semibold text-slate-900">34</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 text-center">
                  <p className="text-xs text-slate-500">Followers</p>
                  <p className="text-lg font-semibold text-slate-900">980</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 text-center">
                  <p className="text-xs text-slate-500">Rating</p>
                  <p className="text-lg font-semibold text-slate-900">8.9</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700">Chat</button>
                <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white">Follow</button>
              </div>
            </div>
          </div>
        </section>

        {/* Arrows */}
        <div className="md:col-span-2 flex items-center justify-center gap-4">
          <button className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center" aria-label="Prev">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center" aria-label="Next">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Tag chips */}
        <section className="md:col-span-2 bg-white rounded-2xl shadow-lg p-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm">
              Donald Trump
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm">
              USA
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm">
              Politics
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm">
              2020
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
