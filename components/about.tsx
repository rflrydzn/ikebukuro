export default function About() {
  return (
    <main className="pb-24 max-w-7xl mx-auto">
      <section className="relative h-154.5 w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50 grayscale brightness-50"
            data-alt="dramatic close-up of a Japanese chef carving sashimi with a sharp steel knife in a dark moody kitchen with steam"
            src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/485160457_641159495185378_4815147070730415892_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeH8YoPix6k6K7cT7rb7tdumzqddujWd5tDOp126NZ3m0DeNV0BZRxWiEH6euijJS32a85BYtptBFGzmzmZH_O4S&_nc_ohc=iWG41wN4m7EQ7kNvwHzbj3m&_nc_oc=Ado0jSWpcydjsSi7dmDkkzqekIJOM5Y9k-C4KW03YFysGZ4vviCU6FWKYEQsucHxKP8&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=bzCvvTZwNlKHalugu3ITvg&_nc_ss=7b2a8&oh=00_Af2abFof1XZLwp62hDIMZerDWZ2ZOAogPfQXLKGFTXXwDg&oe=69F247B8"
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
            Enjoy fresh, authentic Japanese dishes crafted with care—from
            expertly rolled sushi to rich, flavorful ramen. Every bite reflects
            tradition, quality, and attention to detail.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="md:col-span-7 bg-surface-container-low p-12 flex flex-col justify-center min-h-100">
            <span className="font-headline font-bold text-red-700 tracking-[0.5em] uppercase mb-4 text-xs">
              YOUR SECTION
            </span>
            <h3 className="font-headline font-bold text-3xl mb-8 tracking-wide">
              YOUR SUBTITLE HERE
            </h3>
            <p className="font-body text-lg text-on-surface leading-loose opacity-80">
              Your paragraph text goes here. Keep it concise but descriptive.
              This placeholder mimics the length and structure of your original
              content.
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
              YOUR PHILOSOPHY
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              Placeholder text describing your philosophy, mission, or values.
              Use enough content to fill the space meaningfully.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-primary-container font-black text-2xl mb-2">
                  01.
                </div>
                <div className="font-headline font-bold text-sm tracking-widest uppercase">
                  VALUE ONE
                </div>
              </div>
              <div>
                <div className="text-primary-container font-black text-2xl mb-2">
                  02.
                </div>
                <div className="font-headline font-bold text-sm tracking-widest uppercase">
                  VALUE TWO
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
                        LOCATION ONE
                      </p>
                      <p className="text-xl font-light mb-4">
                        3 Bertha Phil clark, Clark Center, Pavillion 13A,
                        Angeles, 2009 Pampanga, Philippines
                      </p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-on-surface-variant opacity-80">
                        <span className="flex items-center gap-2">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="call"
                          >
                            call
                          </span>{" "}
                          +63 932 222 3804
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
                        LOCATION TWO
                      </p>
                      <p className="text-xl font-light mb-4">
                        Building D Solenad, 3 Nuvali Boulevard, Don Jose, City
                        of Santa Rosa, 4026 Laguna, Philippines
                      </p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-on-surface-variant opacity-80">
                        <span className="flex items-center gap-2">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="call"
                          >
                            call
                          </span>{" "}
                          +63 945 248 8615
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
                        LOCATION THREE{" "}
                      </p>
                      <p className="text-xl font-light mb-4">
                        RO1 Blk 3 Lima Exchange, Malvar, Philippines, 4233
                      </p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-on-surface-variant opacity-80">
                        <span className="flex items-center gap-2">
                          <span
                            className="material-symbols-outlined text-sm"
                            data-icon="call"
                          >
                            call
                          </span>{" "}
                          +63 954 304 2253
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
                      Email: support@example.com
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
                Serving multiple areas across{" "}
                <span className="text-primary-container font-bold">
                  Your City
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
