export default function ProfilePage() {
    return (
        <main className="min-h-screen w-full p-4 font-mono text-xs sm:text-sm">
            <div className="mx-auto max-w-2xl border border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-black dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between border-b border-black pb-2 dark:border-white">
                    <h1 className="text-xl font-bold uppercase tracking-tighter text-black dark:text-white">
                        OPERATOR_SPEC_SHEET
                    </h1>
                    <div className="text-right text-black dark:text-white">
                        <div>ID: JONGHOON_IM</div>
                        <div>ROLE: ARCHITECT / DEVELOPER</div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-4 bg-black px-1 text-white w-fit dark:bg-white dark:text-black">KERNEL_INFO</h2>
                        <div className="space-y-4 leading-relaxed text-zinc-900 dark:text-zinc-300">
                            <pre className="mb-4 bg-zinc-100 p-2 font-mono text-[10px] text-zinc-500 border border-zinc-200 whitespace-pre overflow-x-auto dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-400">
                                {`// LMST_CORE_VARIABLES
const L = "LOGIC";    // Algorithms & Structure
const M = "MATTER";   // Physical Substance
const S = "SPACE";    // Void & Volume
const T = "TIME";     // Sequence & Experience

> SYSTEM STATUS: READY TO COMPILE.`}
                            </pre>
                            <p>
                                <span className="font-bold block mb-1">SYSTEM STATUS: OPERATIONAL</span>
                                <span className="font-bold block mb-2">CURRENT OBJECTIVE: REFACTORING ARCHITECTURE</span>
                            </p>
                            <p>
                                <span className="font-bold">[DESCRIPTION]</span><br />
                                This system prioritizes <span className="bg-zinc-200 px-1 dark:bg-zinc-800">LOGIC</span> and <span className="bg-zinc-200 px-1 dark:bg-zinc-800">STRUCTURE</span> over decorative rendering.
                                Optimizing physical construction through digital algorithms.
                            </p>
                            <div className="border-l-2 border-black pl-3 my-4 dark:border-white">
                                <span className="font-bold">[PROTOCOL]</span><br />
                                1. Analyze Context<br />
                                2. Define Logic<br />
                                3. Execute Construction
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 border-b border-black w-fit dark:border-white text-black dark:text-white">DEPENDENCIES</h2>
                        <ul className="list-inside list-square space-y-1 text-zinc-600 dark:text-zinc-400">
                            <li>Rhinoceros 3D / Grasshopper</li>
                            <li>Revit (BIM) / Dynamo</li>
                            <li>Python / C# (Scripting)</li>
                            <li>Next.js / TypeScript (Web)</li>
                            <li>Arduino / Physical Computing</li>
                        </ul>

                        <h2 className="mt-8 mb-4 border-b border-black w-fit dark:border-white text-black dark:text-white">CORE_MODULES</h2>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="border border-zinc-300 p-2 dark:border-zinc-700">
                                <div className="font-bold text-black dark:text-white">PARAMETRIC_DESIGN</div>
                                <div className="text-zinc-400">STATUS: ACTIVE</div>
                            </div>
                            <div className="border border-zinc-300 p-2 dark:border-zinc-700">
                                <div className="font-bold text-black dark:text-white">FABRICATION</div>
                                <div className="text-zinc-400">STATUS: STANDBY</div>
                            </div>
                            <div className="border border-zinc-300 p-2 dark:border-zinc-700">
                                <div className="font-bold text-black dark:text-white">DATA_VISUALIZATION</div>
                                <div className="text-zinc-400">STATUS: ACTIVE</div>
                            </div>
                            <div className="border border-zinc-300 p-2 dark:border-zinc-700">
                                <div className="font-bold text-black dark:text-white">SYSTEM_ARCHITECTURE</div>
                                <div className="text-zinc-400">STATUS: OPTIMIZING</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: I/O (Contact) */}
                <div>
                    <h2 className="mb-2 bg-black text-white px-1 inline-block uppercase dark:bg-white dark:text-black">
                        3.0 I/O_CHANNELS
                    </h2>
                    <div className="grid grid-cols-1 gap-1 text-zinc-600 dark:text-zinc-400">
                        <div className="flex justify-between border-b border-zinc-200 border-dashed dark:border-zinc-700">
                            <span>EMAIL_PROTOCOL</span>
                            <a href="mailto:jim@lmst.kr" className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">jim@lmst.kr</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed dark:border-zinc-700">
                            <span>INSTAGRAM_FEED</span>
                            <a href="https://instagram.com/jim_lmst" target="_blank" className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">@jim_lmst</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed dark:border-zinc-700">
                            <span>GITHUB_REPO</span>
                            <a href="https://github.com/jonghoonim" target="_blank" className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">github.com/jonghoonim</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed dark:border-zinc-700">
                            <span>PHYSICAL_ADDR</span>
                            <span>서울특별시 마포구 토정로2길 6-6</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-zinc-400 text-[10px] uppercase">
                    <p>LAST_UPDATED: 2026.01.15</p>
                    <p>STATUS: ONLINE</p>
                </div>
            </div>
        </main>
    );
}
