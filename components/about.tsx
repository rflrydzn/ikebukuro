export default function About() {
  return (
    <main className="pb-24 max-w-7xl mx-auto">
      <section className="relative h-154.5 w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50 grayscale brightness-50"
            data-alt="dramatic close-up of a Japanese chef carving sashimi with a sharp steel knife in a dark moody kitchen with steam"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPx-KORgW_3ZEjuPkYLxltWcaQvPLqcZAUC_HLEI5KgJENrYMjd9Lh_yZkVjIcbwFpI5vA8QgHa4xdmEqWrICzTS0ztHCXoTF5s42rCQk_m0T2N8gaH4J32xxtJIx-B6BGZkLdXGMt2Dti1spgt_0jAycMRQeYfhsBzKHdPgmsuEbMG7C2B9dNT-YJJo9hU118p0ABZrps9VLZY4uHmGtcQ_eyg0M71RAsC6q5YNlLOumeEWe6hT-LV17l3ORIebw11NuOHpAwm50n"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <div className="inline-block bg-primary-container h-1 w-24 mb-6"></div>
          <h2 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6">
            THE ART OF <br />
            <span className="text-primary-container">PRECISION</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-xl">
            In the heart of Milan, we follow the path of the Shokunin—the
            artisan who masters their craft through lifelong dedication and
            relentless repetition.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="md:col-span-7 bg-surface-container-low p-12 flex flex-col justify-center min-h-100">
            <span className="font-headline font-bold text-red-700 tracking-[0.5em] uppercase mb-4 text-xs">
              Our Vision
            </span>
            <h3 className="font-headline font-bold text-3xl mb-8 tracking-wide">
              ELEVATING THE ESSENTIAL
            </h3>
            <p className="font-body text-lg text-on-surface leading-loose opacity-80">
              At Shokunin, ramen is not just a meal; it is a meticulous
              architecture of flavor. Our broth is simmered for 18 hours, our
              noodles are hand-crafted daily, and our spirit is rooted in
              'Kodawari'—the uncompromising pursuit of perfection.
            </p>
          </div>
          <div className="md:col-span-5 relative min-h-100">
            <img
              className="w-full h-full object-cover"
              data-alt="monochrome top-down view of a steaming bowl of tonkotsu ramen with dark eggs and bamboo shoots"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6hUq-2Nyi0kyGGfzpTdkj3Cbw8Tnnm4MpFVndgvfJW0QpzMEBm7nBc4RvRQTUv3D6W4uVxa27lYXI1gbYhdCLzTdb1RBSItVpl9ruwMDJbC5jAfCpkz2H-ASeetij2GhU-u1LwwlDYRo7urKNn4iJkWyYg4P7PCVMdbc_-siCutW9hB6Nc4mQ95Lr7XiRNcI37haM21dtGsjdN87iCVOKIocIj2-ndPXjDwTULw3eX5IrQSIbIK3VDzRZSavhyiXNXD-iV2uA08OT"
            />
            <div className="absolute inset-0 bg-red-700/10 mix-blend-multiply"></div>
          </div>
          <div className="md:col-span-4 relative h-75 md:h-auto overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="abstract detail of handmade ramen noodles being dusted with flour on a dark wood surface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBoRDiEcYt5YJ9hK8BQdjw1Yq72HYnB8MAz2_vuBPNP-qM-xFJ59_8D-6DEeg3xYBpZnqO72jH7OBp3yoSIjqDNEh2hanxfDWhpCGbcdVXXWbLfxbpPEnqWGSQqDmNleqSWMbLhuR0_RI02XQImFVgrHYRk7VB0ZMV2Q_YYbQpjXaBbSKXxTsjZXyZqqLnE1jflPCKg0aYyzBnKZL1s8mjyvQPZ2BZZSxXPGYeUbDwCKtKHuGvhacOJQegc8CW_0PxvefhXSoJnqVZ"
            />
          </div>
          <div className="md:col-span-8 bg-surface-container-high p-12 border-l border-primary-container/20">
            <h3 className="font-headline font-bold text-3xl mb-6 tracking-wide">
              CRAFTSMANSHIP PHILOSOPHY
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              The shokunin has a social obligation to work his best for the
              welfare of the people. This responsibility is spiritual, material,
              and cultural. Every bowl served at Shokunin carries the weight of
              this tradition.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-primary-container font-black text-2xl mb-2">
                  01.
                </div>
                <div className="font-headline font-bold text-sm tracking-widest uppercase">
                  Purity
                </div>
              </div>
              <div>
                <div className="text-primary-container font-black text-2xl mb-2">
                  02.
                </div>
                <div className="font-headline font-bold text-sm tracking-widest uppercase">
                  Discipline
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-12 py-24 bg-surface-container-lowest">
        <h2 className="font-headline font-black text-5xl tracking-tighter mb-16">
          FIND US.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="group p-8 bg-surface-container transition-all hover:bg-surface-container-high border-l-4 border-red-700">
                  <div className="flex gap-6">
                    <span
                      className="material-symbols-outlined text-red-700 text-3xl"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    <div>
                      <p className="font-headline font-bold tracking-widest uppercase text-xs text-neutral-500 mb-2">
                        Shokunin Brera
                      </p>
                      <p className="text-xl font-light mb-4">
                        Via Brera, 12, 20121 Milan
                      </p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-on-surface-variant opacity-80">
                        <span className="flex items-center gap-2">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="call"
                          >
                            call
                          </span>{" "}
                          +39 02 3456 781
                        </span>
                        <span className="flex items-center gap-2 text-green-500 font-bold uppercase">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="fiber_manual_record"
                          >
                            fiber_manual_record
                          </span>{" "}
                          Open
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-8 bg-surface-container transition-all hover:bg-surface-container-high border-l-4 border-neutral-700 hover:border-red-700">
                  <div className="flex gap-6">
                    <span
                      className="material-symbols-outlined text-red-700 text-3xl"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    <div>
                      <p className="font-headline font-bold tracking-widest uppercase text-xs text-neutral-500 mb-2">
                        Shokunin Torino
                      </p>
                      <p className="text-xl font-light mb-4">
                        Via Torino, 45, 20123 Milan
                      </p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-on-surface-variant opacity-80">
                        <span className="flex items-center gap-2">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="call"
                          >
                            call
                          </span>{" "}
                          +39 02 3456 782
                        </span>
                        <span className="flex items-center gap-2 text-green-500 font-bold uppercase">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="fiber_manual_record"
                          >
                            fiber_manual_record
                          </span>{" "}
                          Open
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group p-8 bg-surface-container transition-all hover:bg-surface-container-high border-l-4 border-neutral-700 hover:border-red-700">
                  <div className="flex gap-6">
                    <span
                      className="material-symbols-outlined text-red-700 text-3xl"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    <div>
                      <p className="font-headline font-bold tracking-widest uppercase text-xs text-neutral-500 mb-2">
                        Shokunin Corso Como
                      </p>
                      <p className="text-xl font-light mb-4">
                        Corso Como, 10, 20154 Milan
                      </p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-on-surface-variant opacity-80">
                        <span className="flex items-center gap-2">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="call"
                          >
                            call
                          </span>{" "}
                          +39 02 3456 783
                        </span>
                        <span className="flex items-center gap-2 text-green-500 font-bold uppercase">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="fiber_manual_record"
                          >
                            fiber_manual_record
                          </span>{" "}
                          Open
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-red-700 text-2xl"
                    data-icon="schedule"
                  >
                    schedule
                  </span>
                  <div>
                    <p className="font-headline font-bold tracking-widest uppercase text-[10px] text-neutral-500 mb-1">
                      Standard Hours
                    </p>
                    <p className="text-sm font-light">
                      Mon-Sat: 12:00-14:30 / 19:00-23:00
                    </p>
                    <p className="text-sm text-red-700 font-bold uppercase mt-1">
                      Sun: Closed
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-red-700 text-2xl"
                    data-icon="contact_support"
                  >
                    contact_support
                  </span>
                  <div>
                    <p className="font-headline font-bold tracking-widest uppercase text-[10px] text-neutral-500 mb-1">
                      Customer Care
                    </p>
                    <p className="text-sm font-light">
                      WhatsApp: +39 333 456 7890
                    </p>
                    <p className="text-sm font-light">
                      Email: craft@shokunin.it
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container px-12 py-5 font-headline font-bold tracking-[0.2em] uppercase transition-all active:scale-95 hover:bg-red-700 shadow-xl">
              BOOK A TABLE
            </button>
          </div>
          <div className="h-150 w-full bg-surface-container-high relative grayscale overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-40"
              data-alt="abstract dark architectural map visualization of Milan city streets with high contrast shadows"
              data-location="Milan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXaMO1rODcHFsQwNcNJYdRsATrqh3XU2FsnCYpqfgevm09AqbRu7rkmRk9f_0Rlw8U8OsA2uJ8DAh9wwRM8yJTbSAYpmcYl6ZO47NlM0yKCQ9d4KbcnFnb4zTXuzUjSS3ktxQiRd21pAKvlKew3MqRfBMfGE2-QtneZAecnd22qS7sUiM5UhxvOEggbeKHLSGpSYICLGUIbeU08Lv3Ib56mTqSUvb7oTTRWyHRdSo4ZkAncwcKueR3CqLQ3vY-1Ujr7yhfEGSGX8dE"
            />
            <div className="absolute top-[40%] left-[48%] flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-700/20 rounded-full animate-pulse"></div>
                <span
                  className="material-symbols-outlined text-red-700 text-4xl relative z-10"
                  data-icon="location_pin"
                >
                  location_pin
                </span>
              </div>
            </div>
            <div className="absolute top-[55%] left-[45%] flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-red-700/10 rounded-full animate-pulse"></div>
                <span
                  className="material-symbols-outlined text-red-700/70 text-3xl relative z-10"
                  data-icon="location_pin"
                >
                  location_pin
                </span>
              </div>
            </div>
            <div className="absolute top-[30%] left-[42%] flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-red-700/10 rounded-full animate-pulse"></div>
                <span
                  className="material-symbols-outlined text-red-700/70 text-3xl relative z-10"
                  data-icon="location_pin"
                >
                  location_pin
                </span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-surface-container-highest/90 backdrop-blur-sm p-6 border border-white/5">
              <p className="font-headline font-bold tracking-widest uppercase text-xs text-red-700 mb-1">
                Network Hub
              </p>
              <p className="font-body text-lg">
                Serving 3 districts across{" "}
                <span className="text-primary-container font-bold">Milan</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
