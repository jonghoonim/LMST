"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PeopleClient() {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row gap-16 items-start max-w-6xl mx-auto">

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/3 relative aspect-[3/4]"
                >
                    <Image
                        src="/jonghoon_im_profile.jpg"
                        alt="Jonghoon Im"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Profile Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-2/3"
                >
                    <h1 className="text-3xl font-bold tracking-widest uppercase mb-2">Jonghoon Im</h1>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Principal Architect / Founder</p>

                    <div className="space-y-6 text-gray-700 font-light leading-relaxed whitespace-pre-line">
                        <p>
                            건축의 출발점을 화려한 개념이 아니라 맥락과 구조를 어떻게 다시 조직할 것인가에서 찾는다.
                            프로그램의 관계를 정리하고, 동선과 빛, 재료가 만드는 감각적 흐름을 단단하게 구축하는 작업을 중요하게 생각한다.
                            주거부터 문화·교육 공간까지 다양한 조건의 프로젝트를 다루며, 각 장소가 가진 실제 문제와 잠재력을 읽어 설계의 방향을 정한다.
                        </p>
                        <p>
                            디지털 도구는 방식의 일부다.
                            Rhino, Grasshopper, Revit, BIM, AI 등은 표현을 위한 기술이라기보다 설계의 논리를 명확하게 하는 장치로 사용한다.
                            형태를 만들기 위해 기술을 끌어오는 것이 아니라, 문제를 분석하고 해석한 결과가 형태로 자연스럽게 드러나도록 하는 방식을 지향한다.
                        </p>
                        <p>
                            교육과 실무는 서로 다른 역할이 아니라 같은 흐름 속에 있다.
                            학생들에게도 ‘도구’ 이전에 ‘질문과 구조’를 먼저 세우는 훈련을 중요하게 생각하며, 실제 프로젝트에서 얻은 감각과 판단 경험을 그대로 연결해 전달하고 있다.
                        </p>
                        <p>
                            건축은 결국 ‘어떻게 살아가게 만드는가’에 관한 문제라고 믿는다.
                            공간이 사람을 어떻게 움직이고, 머무르게 하고, 관계를 만들고, 시간 속에서 변화를 견디는지.
                            그 질문에 대한 지속적인 탐구가 작업 전반을 이끄는 기준이 된다.
                        </p>
                    </div>

                    <div className="mt-12 pt-12 border-t border-gray-100">
                        <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Education</h3>
                        <ul className="space-y-2 text-sm text-gray-600 font-light">
                            <li>Master of Architecture, University of California, Berkeley</li>
                            <li>서울대학교 공과대학 건축학과 공학석사</li>
                            <li>전남대학교 공과대학 건축학과 공학사</li>
                        </ul>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
