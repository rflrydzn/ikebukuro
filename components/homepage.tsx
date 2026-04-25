export default function HomePage() {
  return (
    <main className=" pb-20 md:pb-0">
      <section className="relative h-198.75 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60"
            data-alt="Close-up of a steaming bowl of artisan ramen with dark broth, bamboo shoots, and green onions in a moody Japanese kitchen setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB574ejzoht2hZfRPyPM4P2nD4E7PbRPUF0wVc0UO_aXyvoMWXMj6olEUTsgqc57yhC_2QcNzm2ajfFhMyi4HyyfbDUxW02ERsyYIT_Ls9AybZFUkucn-8D3d0ahYfZhTuL9jEcNTYagPCCxHBaxWxmetXgjmP9g-kdPVCnTt8CuwZNZanQO2jIhYk6En_ZINe6-nLzodeBgnwkF2zyZsjuixNSp5pCcVhgSC3z26UWtBb3V_2Ve9dAIEk3rG39JZCR3zNPgGT1g-o"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-surface/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="font-headline text-primary-container text-sm tracking-[0.4em] uppercase mb-6">
            A taste of Japan with a dash of French cuisine
          </h2>
          <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-8">
            A gourmet’s delight
          </h1>
          <div className="flex justify-center">
            <button className="bg-primary-container text-on-primary-container px-10 py-4 font-headline font-bold text-sm tracking-widest hover:bg-primary-fixed-dim transition-all duration-300 active:scale-95">
              EXPLORE THE MENU
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-primary-container transform skew-x-[-45deg] translate-x-12 translate-y-12 opacity-80 hidden md:block"></div>
      </section>
      <section className="py-24 px-6 md:px-24 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary-container"></div>
            <img
              className="w-full aspect-4/3 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-alt="Aerial view of the signature Shokunin Black ramen with deep charcoal broth and perfectly placed soft-boiled egg in a minimalist ceramic bowl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDarspoCjTZeMvkOlZ_8WDZaWR8yQsJT6gas8Ys21MJ42Rje5hO_oEKVNIb-ZjhLODeW4CeRE84B-nxmW9YZCeMWZlQwBODSSoF0dS0zjijMt092pUzL03yOCfCJ36EMn5rSxKmjI_JoRJ8ZANpokIQrI7HaLbGSjvvzNsRY25mk2Je2131IK3RFH2RpHSI0npNVzYqdsISlmlVf2t-H7AfqOf4X_TlrT1_d4UR64ln8LGPmp54RF2hGZtePS9KMHPxBG7qDl5Z-T4p"
            />
            <div className="absolute bottom-6 right-6 bg-surface p-4 border-l-4 border-primary-container">
              <p className="font-headline text-xs tracking-widest uppercase">
                Signature Edition
              </p>
            </div>
          </div>
          <div className="md:col-span-5 space-y-8">
            <span className="font-headline text-primary-container text-sm tracking-widest uppercase">
              Chef's Choice
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
              ITEM TITLE HERE
            </h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Your description goes here. Replace this with your own text while
              keeping the length consistent for layout purposes.
            </p>
            <div className="flex items-center gap-4 text-primary-container">
              <span className="h-px w-12 bg-primary-container"></span>
              <span className="font-headline text-xs tracking-[0.3em] font-bold">
                HIGHLIGHT
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 overflow-hidden bg-surface">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-7xl md:text-9xl font-black text-surface-container-highest uppercase leading-none select-none">
              SECTION TITLE
            </h2>
            <div className="-mt-8 md:-mt-16 pl-4 md:pl-12 border-l-2 border-primary-container">
              <p className="font-body text-xl md:text-2xl text-on-surface max-w-md leading-relaxed italic">
                "Your quote or featured text goes here. Keep it similar in
                length to maintain spacing."
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 pt-12">
            <p className="font-body text-on-surface-variant leading-relaxed">
              Your first paragraph description goes here. Replace this text with
              your own content while preserving character count roughly.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Your second paragraph description goes here. Use placeholder
              content to simulate real copy and maintain layout structure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
