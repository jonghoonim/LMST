export default function ProfilePage() {
    return (
        <main className="min-h-screen w-full p-4 font-mono text-xs sm:text-sm">
            <div className="mx-auto max-w-2xl border border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between border-b border-black pb-2">
                    <h1 className="text-xl font-bold uppercase tracking-tighter">
                        OPERATOR_SPEC_SHEET
                    </h1>
                    <div className="text-right">
                        <div>ID: JONGHOON_IM</div>
                        <div>ROLE: ARCHITECT / DEVELOPER</div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-4 bg-black px-1 text-white w-fit">KERNEL_INFO</h2>
                        <div className="space-y-4 leading-relaxed text-zinc-900">
                            <pre className="mb-4 bg-zinc-100 p-2 font-mono text-[10px] text-zinc-500 border border-zinc-200 whitespace-pre overflow-x-auto">
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
                                This system prioritizes <span className="bg-zinc-200 px-1">LOGIC</span> and <span className="bg-zinc-200 px-1">STRUCTURE</span> over decorative rendering.
                                Optimizing physical construction through digital algorithms.
                            </p>
                            <div className="border-l-2 border-black pl-3 my-4">
                                <span className="font-bold">[PROTOCOL]</span><br />
                                1. Analyze Context<br />
                                2. Define Logic<br />
                                3. Execute Construction
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 border-b border-black w-fit">DEPENDENCIES</h2>
                        <ul className="list-inside list-square space-y-1 text-zinc-600">
                            <li>Rhinoceros 3D / Grasshopper</li>
                            <li>Revit (BIM) / Dynamo</li>
                            <li>Python / C# (Scripting)</li>
                            <li>Next.js / TypeScript (Web)</li>
                            <li>Arduino / Physical Computing</li>
                        </ul>

                        <h2 className="mt-8 mb-4 border-b border-black w-fit">CORE_MODULES</h2>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="border border-zinc-300 p-2">
                                <div className="font-bold">PARAMETRIC_DESIGN</div>
                                <div className="text-zinc-400">STATUS: ACTIVE</div>
                            </div>
                            <div className="border border-zinc-300 p-2">
                                <div className="font-bold">FABRICATION</div>
                                <div className="text-zinc-400">STATUS: STANDBY</div>
                            </div>
                            <div className="border border-zinc-300 p-2">
                                <div className="font-bold">DATA_VISUALIZATION</div>
                                <div className="text-zinc-400">STATUS: ACTIVE</div>
                            </div>
                            <div className="border border-zinc-300 p-2">
                                <div className="font-bold">SYSTEM_ARCHITECTURE</div>
                                <div className="text-zinc-400">STATUS: OPTIMIZING</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: I/O (Contact) */}
                <div>
                    <h2 className="mb-2 bg-black text-white px-1 inline-block uppercase">
                        3.0 I/O_CHANNELS
                    </h2>
                    <div className="grid grid-cols-1 gap-1 text-zinc-600">
                        <div className="flex justify-between border-b border-zinc-200 border-dashed">
                            <span>EMAIL_PROTOCOL</span>
                            <a href="mailto:jim@lmst.kr" className="hover:bg-black hover:text-white">jim@lmst.kr</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed">
                            <span>INSTAGRAM_FEED</span>
                            <a href="https://instagram.com/jim_lmst" target="_blank" className="hover:bg-black hover:text-white">@jim_lmst</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed">
                            <span>GITHUB_REPO</span>
                            <a href="https://github.com/jonghoonim" target="_blank" className="hover:bg-black hover:text-white">github.com/jonghoonim</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed">
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
