export default function ProfilePage() {
    return (
        <main className="min-h-screen w-full p-4 font-mono text-xs sm:text-sm">
            <div className="mx-auto max-w-4xl border border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between border-b border-black pb-2">
                    <h1 className="text-xl font-bold uppercase tracking-tighter text-black">
                        OPERATOR_SPEC_SHEET
                    </h1>
                    <div className="text-right text-black">
                        <div>ID: JONGHOON_IM</div>
                        <div>ROLE: ARCHITECT / DEVELOPER</div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid gap-8 sm:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="mb-4 bg-black px-1 text-white w-fit">1.0 KERNEL_INFO</h2>
                            <div className="space-y-6 leading-relaxed text-zinc-900 font-mono">
                                <pre className="mb-4 bg-zinc-100 p-3 text-[10px] text-zinc-600 border border-zinc-200 whitespace-pre overflow-x-auto">
                                    {`// LMST_KERNEL_MANIFESTO
if (Logic == true) {
   return Material;
} else {
   throw new Error("Form_Without_Reason");
}

> SYSTEM STATUS: READY TO COMPILE.`}
                                </pre>

                                <div>
                                    <h3 className="font-bold mb-2">[OPERATIONAL_PARAMETERS]</h3>
                                    <div className="text-xs space-y-1 text-zinc-700">
                                        <div>&gt; PRIORITY_SEQ: <span className="font-bold">LOGIC &gt; AESTHETICS</span></div>
                                        <div>&gt; METHODOLOGY:  ALGORITHMIC_OPTIMIZATION</div>
                                        <div>&gt; OUTPUT_TYPE:  PHYSICAL_CONSTRUCTION + DIGITAL_TWIN</div>
                                        <div>&gt; GOAL:         ERROR_MINIMIZATION & STRUCTURE_REFACTORING</div>
                                    </div>
                                </div>

                                <div className="border-l-2 border-black pl-3 my-4">
                                    <h3 className="font-bold mb-2">[EXECUTION_PIPELINE]</h3>
                                    <div className="text-xs space-y-1 text-zinc-600">
                                        <div>1. INPUT:       Context_Data + Client_Needs</div>
                                        <div>2. PROCESSING:  Grasshopper_Algorithm + Revit_BIM</div>
                                        <div>3. DEBUGGING:   Logic_Verification (Unit_Test)</div>
                                        <div>4. OUTPUT:      Fabrication_Ready_Data</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-4 bg-black px-1 text-white w-fit">3.0 RUNTIME_ENVIRONMENT</h2>

                            <h3 className="mb-2 font-bold">[ DEPENDENCIES ]</h3>
                            <ul className="list-inside list-square space-y-1 text-zinc-600 mb-8 text-xs">
                                <li>Rhinoceros 3D / Grasshopper</li>
                                <li>Revit (BIM) / Dynamo</li>
                                <li>Python / C# (Scripting)</li>
                                <li>Next.js / TypeScript (Web)</li>
                                <li>Arduino / Physical Computing</li>
                            </ul>

                            <h3 className="mb-2 font-bold">[ CORE_MODULES ]</h3>
                            <div className="text-xs font-mono space-y-2 text-zinc-700">
                                <div className="border-b border-zinc-200 pb-1">------------------------------------------------</div>
                                <div className="flex gap-3">
                                    <span className="text-zinc-400">[ ACTIVE ]</span>
                                    <span>PARAMETRIC_DESIGN (Rhino.Inside)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-zinc-400">[ ACTIVE ]</span>
                                    <span>DATA_VISUALIZATION (D3.js)</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-purple-600 font-bold">[ OPTIMIZING ]</span>
                                    <span>SYSTEM_ARCHITECTURE</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-zinc-300">[ STANDBY ]</span>
                                    <span>FABRICATION (Laser/CNC)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 bg-black px-1 text-white w-fit">2.0 ARCHITECT_LOG</h2>
                        <div className="bg-zinc-50 p-4 border border-zinc-200 text-xs font-mono text-zinc-700 h-full">

                            {/* 2.1 EDUCATION */}
                            <div className="mb-8">
                                <div className="mb-2 border-b border-zinc-300 border-dashed pb-1">
                                    <span className="font-bold text-black">&gt; EDUCATION_SEQUENCE</span>
                                </div>
                                <ul className="space-y-1">
                                    <li>
                                        <span className="font-bold text-zinc-900">[2012]</span> M.Arch, <span className="font-bold">UC Berkeley</span>
                                    </li>
                                    <li>
                                        <span className="font-bold text-zinc-900">[2006]</span> M.S., <span className="font-bold">Seoul National Univ.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 2.2 ACADEMIC */}
                            <div className="mb-8">
                                <div className="mb-2 border-b border-zinc-300 border-dashed pb-1">
                                    <span className="font-bold text-black">&gt; ACADEMIC_SEQUENCE</span>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <div><span className="font-bold text-black">Seoul_National_Univ</span> <span className="text-zinc-500">(Dept. of Arch)</span></div>
                                        <span className="text-green-600 font-bold">[RUNNING]</span>
                                    </div>
                                    <div className="text-zinc-500 mb-2 pl-2">2015.03 ~ PRESENT | Lecturer</div>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-600">
                                        <li>Digital Design Studio (2015~2023)</li>
                                        <li>Design Computing (2015~2024)</li>
                                        <li>Basic Studio 3, 4 (2017~2023)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 2.3 PROFESSIONAL */}
                            <div className="mb-8">
                                <div className="mb-2 border-b border-zinc-300 border-dashed pb-1">
                                    <span className="font-bold text-black">&gt; PROFESSIONAL_SEQUENCE</span>
                                </div>

                                {/* LMST */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-bold text-black text-sm">LMST</span>
                                        <span className="text-green-600 font-bold text-[10px]">[ACTIVE]</span>
                                    </div>
                                    <div className="text-zinc-500 text-[10px] mb-1">2024.02 ~ PRESENT | Principal</div>
                                    <div className="pl-3 border-l-2 border-black text-zinc-600">
                                        <div>- Integrated Design & Development</div>
                                        <div>- Architectural Digital Twins</div>
                                    </div>
                                </div>

                                {/* TAAL */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-bold text-zinc-800">TAAL Architects</span>
                                        <span className="text-zinc-400 text-[10px]">[CLOSED]</span>
                                    </div>
                                    <div className="text-zinc-500 text-[10px] mb-1">2014.01 ~ 2024.01 | Principal</div>
                                    <div className="pl-3 border-l border-zinc-300 text-zinc-600 space-y-1">
                                        <div>- SNU Southern Academy <span className="text-zinc-400">(Kim Swoo Geun Award '16)</span></div>
                                        <div>- Songpa Wirye Kindergarten</div>
                                        <div>- Hwaseong Coffee Complex</div>
                                        <div>- Everland Camp Dome</div>
                                    </div>
                                </div>

                                {/* OTHERS */}
                                <div className="mb-4 text-zinc-500 space-y-1">
                                    <div className="flex justify-between">
                                        <span className="font-bold">Perkins+Will (SF)</span>
                                        <span className="text-[10px]">Junior Designer | 2013</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-bold">Haeahn Architecture</span>
                                        <span className="text-[10px]">Team Leader | 2006 ~ 2013</span>
                                    </div>
                                </div>
                            </div>

                            {/* 2.4 HONORS */}
                            <div>
                                <div className="mb-2 border-b border-zinc-300 border-dashed pb-1">
                                    <span className="font-bold text-black">&gt; HONORS_PACKET</span>
                                </div>
                                <ul className="space-y-1 text-zinc-600 pl-2">
                                    <li><span className="font-bold text-black">[2016]</span> Kim Swoo Geun Preview Award</li>
                                    <li><span className="font-bold text-black">[2012]</span> UC Berkeley Fellowship ($12k)</li>
                                    <li><span className="font-bold text-black">[2010]</span> AIA NY Design Awards (Merit)</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Section: I/O (Contact) */}
                <div className="mt-8 pt-4 border-t border-black border-dashed">
                    <h2 className="mb-4 bg-black text-white px-1 inline-block uppercase w-fit">
                        4.0 I/O_CHANNELS
                    </h2>
                    <div className="grid grid-cols-1 gap-1 text-zinc-600 text-xs">
                        <div className="flex justify-between border-b border-zinc-200 border-dashed py-1">
                            <span>EMAIL_PROTOCOL</span>
                            <a href="mailto:jim@lmst.kr" className="hover:bg-black hover:text-white">jim@lmst.kr</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed py-1">
                            <span>INSTAGRAM_FEED</span>
                            <a href="https://instagram.com/jim_lmst" target="_blank" className="hover:bg-black hover:text-white">@jim_lmst</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed py-1">
                            <span>GITHUB_REPO</span>
                            <a href="https://github.com/jonghoonim" target="_blank" className="hover:bg-black hover:text-white">github.com/jonghoonim</a>
                        </div>
                        <div className="flex justify-between border-b border-zinc-200 border-dashed py-1">
                            <span>LOCALE_ADDR (ko-KR)</span>
                            <span>서울특별시 마포구 토정로2길 6-6</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-zinc-400 text-[10px] uppercase">
                    <p>LAST_UPDATED: 2026.01.16</p>
                    <p>STATUS: ONLINE</p>
                </div>
            </div>
        </main>
    );
}
