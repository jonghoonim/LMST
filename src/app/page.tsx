"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";
import PastelBackground from "@/components/PastelBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <PastelBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden text-black z-10">
        {/* Overlay Content */}
        <div className="z-10 text-center px-4 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-4 text-center text-black"
          >
            LMST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base tracking-[0.3em] font-normal text-gray-600"
          >
            Logic, Matter, Space and Time
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 text-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-wide">PHILOSOPHY</h2>
            </div>
            <div className="space-y-8 text-lg font-light leading-relaxed text-gray-800">
              <p className="mb-8 font-normal text-black text-xl">
                "건축은 삶을 담는 가장 이성적인 그릇입니다."<br />
                LMST는 화려한 수사보다 명쾌한 해법을 제안합니다.
              </p>
              <p>
                <strong className="font-bold text-black">Logic</strong>
                <span className="block mt-1">"타당한 이유가 있는 형태를 만듭니다." 건축은 땅의 조건, 법규의 한계, 그리고 건축주의 예산 사이에서 최적의 균형점을 찾는 과정입니다. 우리는 막연한 감각에 의존하지 않습니다. 치밀한 분석과 합리적인 사고를 통해, 누가 보더라도 납득할 수 있는 가장 타당하고 명쾌한 결과물(Logic)을 도출합니다.</span>
              </p>
              <p>
                <strong className="font-bold text-black">Matter</strong>
                <span className="block mt-1">"재료 본연의 힘을 믿습니다." 좋은 건축은 비싼 마감재로 치장한 건물이 아닙니다. 벽돌 하나, 콘크리트 한 면이라도 그 재료가 가진 성질을 정확히 이해하고 정직하게 쌓아 올릴 때 공간의 깊이가 생겨납니다. 재료가 가진 텍스처와 디테일(Matter)을 섬세하게 다루어, 시간이 지나도 촌스럽지 않은 단단한 미감을 완성합니다.</span>
              </p>
              <p>
                <strong className="font-bold text-black">Space</strong>
                <span className="block mt-1">"배경이 되는 공간을 지향합니다." 건축가의 작품 욕심으로 사는 사람을 불편하게 만들지 않겠습니다. 우리는 압도적인 조형물보다, 그 안에서 이루어질 당신의 일상이 돋보이기를 원합니다. 빛과 바람의 길을 열고, 생활의 동선을 배려하여 머물수록 편안하고 안락한 공간(Space)을 짓습니다.</span>
              </p>
              <p>
                <strong className="font-bold text-black">Time</strong>
                <span className="block mt-1">"지속 가능한 가치를 생각합니다." 건축은 한 번 지으면 수십 년을 그 자리에 서 있어야 합니다. 오늘의 유행을 쫓기보다, 계절의 변화와 세월의 흐름을 의연하게 받아들이는 건축을 고민합니다. 시간이 흐를수록 건물의 가치가 더해지고, 도시와 자연 속에 자연스럽게 스며드는 시간(Time)의 건축을 만듭니다.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-24 text-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold tracking-wide">SELECTED WORKS</h2>
            <Link href="/projects" className="text-sm border-b border-black pb-1 hover:opacity-50 transition-opacity">
              VIEW ALL
            </Link>
          </div>

          <ProjectCarousel />
        </div>
      </section>
    </div>
  );
}
