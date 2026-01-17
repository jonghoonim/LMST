export type ProjectLog = {
    id: string;
    date: string;
    title: string;
    phase: string;
    status: "COMPILED" | "RUNTIME_ERROR" | "WARNING" | "NULL" | "UNREACHABLE";
    size: string;
    description?: string;
    warningMessage?: string;
    finalImage?: string;
    rawImage?: string;
    // OMA Style Data
    location?: string;
    client?: string;
    program?: string;
    team?: string;
};


export const INITIAL_LOGS: ProjectLog[] = [
    {
        id: "LOG_2506",
        date: "2025.06.30",
        title: "POSCO Prefab Restroom Design",
        phase: "Realization",
        status: "COMPILED",
        size: "12.4GB",
        finalImage: "/images/LOG_2506_FINAL.jpg",
        description: "**포스코 프리패브 화장실 상품화 디자인 및 실시설계 (POSCO Modular Restroom)**\n\n모듈러 건축의 효율성과 디자인적 가치를 결합한 프리패브 화장실 상품화 프로젝트. 시공 오차를 최소화하고 공사 기간을 단축하는 동시에, 사용자 중심의 쾌적한 환경을 제공하는 표준 모델을 개발했다.",
    },
    {
        id: "LOG_2505",
        date: "2025.05.15",
        title: "Yeomchang Elementary School West Wing",
        phase: "Competition",
        status: "UNREACHABLE",
        size: "2.1GB",
        description: "**염창초등학교 서관동 (Yeomchang Elementary School West Wing)**\n\n기존 학교의 맥락을 존중하면서도 미래 교육 과정을 담아낼 수 있는 유연한 학습 공간을 제안했다.",
    },
    {
        id: "LOG_2503",
        date: "2025.05.29",
        title: "Hwaseong Children's Science Museum",
        phase: "Competition",
        status: "UNREACHABLE",
        size: "8.37GB",
        finalImage: "/images/LOG_2503_FINAL.png",
        rawImage: "/images/LOG_2503_PROCESS.png",
        description: `**화성어린이과학관 (Byeongjeom Science Museum)**\n**Theme: 연결의 지형, 디스커버리 캐년 (Discovery Canyon)**\n\n프로젝트는 화성시 병점역 인근의 도심과 근린공원이 만나는 경계부에 위치한다. 고가도로와 지하철, 공원 등 다각도의 시선이 교차하는 대지의 특성을 반영하여, 단순한 전시 공간을 넘어 도시의 흐름과 자연을 연결하는 열린 플랫폼을 제안한다.\n\n디자인의 핵심은 **'디스커버리 캐년(Discovery Canyon)'**이다. 이는 도시와 공원을 가로지르는 거대한 보행축이자, 건물 내부를 관통하며 빛과 바람을 끌어들이는 환경적 틀로 작동한다.\n\n층별 계획은 기능의 분리와 통합을 리듬감 있게 반복하며 입체적인 시퀀스를 형성한다.\n\n- **1F (Link):** '디스커버리 캐년'을 중심으로 한 개방형 진입 광장\n- **2F (Physics & Sense):** 물리와 감각을 테마로 한 전시 공간\n- **3F (Life & Pattern):** 수학적 질서와 생명의 신비를 탐구하는 공간\n- **4F (Future & Sky):** 미래 기술을 실험하는 기획전시실과 코스믹 테라스\n\n입면 디자인은 기능에 반응하는 과학적 표피 시스템을 적용했다. 프로그램의 성격에 따라 절곡 패널과 유리 커튼월을 교차 적용하여 최적의 채광과 조망을 확보했다.`,
        warningMessage: "RhinoInsideRevit에서 Revit으로 넘기는 효과적인 전략 수립 실패. 결국 Direct Shape으로 할 수 밖에 없었음. Family 제작은 다음 프로젝트에서 기대할 수 밖에 ㅠㅠ",
    },
    {
        id: "LOG_2501",
        date: "2025.01.20",
        title: "Muk 1-dong Community Complex",
        phase: "Competition",
        status: "RUNTIME_ERROR",
        size: "3.5GB",
        description: "**중랑구 묵1동 복합청사 (Jungnang-gu Muk 1-dong Complex Center)**\n\n주민 밀착형 행정 서비스와 문화 공간을 통합한 복합 청사 계획안.",
    },
    {
        id: "LOG_2403",
        date: "2024.03.10",
        title: "Hwaseong Botanical Garden Remodeling",
        phase: "Competition",
        status: "UNREACHABLE",
        size: "1.8GB",
        description: "**화성 우리꽃 식물원 건축 리모델링 (Hwaseong Our Flower Botanical Garden)**\n\n노후화된 온실과 전시관을 리모델링하여 생태 교육과 휴식이 공존하는 새로운 식물원 환경을 조성하는 제안.",
    },
    {
        id: "LOG_2402",
        date: "2024.02.14",
        title: "Seoul Dongshin Elem. Green Smart School",
        phase: "Competition",
        status: "RUNTIME_ERROR",
        size: "4.2GB",
        description: "**서울동신초등학교 그린스마트 미래학교 (Seoul Dongshin Elementary School)**\n\n미래 교육을 위한 스마트 학습 환경과 친환경 건축 요소를 결합한 학교 개축 프로젝트.",
    },
    {
        id: "LOG_2401",
        date: "2024.01.05",
        title: "Seoul Dongmyung Elem. Green Smart School",
        phase: "Competition",
        status: "RUNTIME_ERROR",
        size: "3.9GB",
        description: "**서울동명초등학교 그린스마트 미래학교 (Seoul Dongmyung Elementary School)**\n\n기존 교사의 노후화를 개선하고 탄소 중립 실현을 위한 그린 에너지 기술을 도입한 미래형 학교 모델.",
    },
];
