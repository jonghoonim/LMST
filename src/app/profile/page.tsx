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

                {/* Section: Kernel Information (Bio) */}
                <div className="mb-8">
                    <h2 className="mb-2 bg-black text-white px-1 inline-block uppercase">
                        1.0 KERNEL_INFO
                    </h2>
                    <p className="leading-relaxed text-zinc-700">
                        Arguments for architecture have shifted from visual aesthetics to logic and systems.
                        This operator focuses on the <span className="bg-zinc-200 px-1">process</span> of construction—both physical and digital.
                        Archiving errors, refactoring logic, and optimizing structure.
                    </p>
                </div>

                {/* Section: Stack (Skills) */}
                <div className="mb-8">
                    <h2 className="mb-2 bg-black text-white px-1 inline-block uppercase">
                        2.0 RUNTIME_ENVIRONMENT
                    </h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                        <div>
                            <h3 className="mb-1 font-bold border-b border-zinc-300">CORE_MODULES</h3>
                            <ul className="list-inside list-disc text-zinc-600">
                                <li>Architectural Design</li>
                                <li>Computational Logic</li>
                                <li>BIM Management</li>
                                <li>Full-stack Development</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-1 font-bold border-b border-zinc-300">DEPENDENCIES</h3>
                            <ul className="list-inside list-disc text-zinc-600">
                                <li>Revit API (C#)</li>
                                <li>Rhino / Grasshopper</li>
                                <li>Next.js / React</li>
                                <li>Python / AI Integration</li>
                            </ul>
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
                            <a href="mailto:contact@lmst.kr" className="hover:bg-black hover:text-white">contact@lmst.kr</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed">
                            <span>INSTAGRAM_FEED</span>
                            <a href="https://instagram.com" target="_blank" className="hover:bg-black hover:text-white">@lmst_arch</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed">
                            <span>GITHUB_REPO</span>
                            <a href="https://github.com/jonghoonim" target="_blank" className="hover:bg-black hover:text-white">github.com/jonghoonim</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed">
                            <span>PHYSICAL_ADDR</span>
                            <span>Seoul, Republic of Korea</span>
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
