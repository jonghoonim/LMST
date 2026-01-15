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
};

export const INITIAL_LOGS: ProjectLog[] = [
    {
        id: "LOG_2503",
        date: "2025.05.29",
        title: "Hwaseong Children's Science Museum",
        phase: "Competition",
        status: "UNREACHABLE",
        size: "8.37GB",
        finalImage: "/images/LOG_2503_FINAL.jpg",
        rawImage: "/images/LOG_2503_PROCESS.png",
        description: `**화성어린이과학관 (Byeongjeom Science Museum)**\n**Theme: 연결의 지형, 디스커버리 캐년 (Discovery Canyon)**\n\n프로젝트는 화성시 병점역 인근의 도심과 근린공원이 만나는 경계부에 위치한다. 고가도로와 지하철, 공원 등 다각도의 시선이 교차하는 대지의 특성을 반영하여, 단순한 전시 공간을 넘어 도시의 흐름과 자연을 연결하는 열린 플랫폼을 제안한다.\n\n디자인의 핵심은 **'디스커버리 캐년(Discovery Canyon)'**이다. 이는 도시와 공원을 가로지르는 거대한 보행축이자, 건물 내부를 관통하며 빛과 바람을 끌어들이는 환경적 틀로 작동한다.\n\n층별 계획은 기능의 분리와 통합을 리듬감 있게 반복하며 입체적인 시퀀스를 형성한다.\n\n- **1F (Link):** '디스커버리 캐년'을 중심으로 한 개방형 진입 광장\n- **2F (Physics & Sense):** 물리와 감각을 테마로 한 전시 공간\n- **3F (Life & Pattern):** 수학적 질서와 생명의 신비를 탐구하는 공간\n- **4F (Future & Sky):** 미래 기술을 실험하는 기획전시실과 코스믹 테라스\n\n입면 디자인은 기능에 반응하는 과학적 표피 시스템을 적용했다. 프로그램의 성격에 따라 절곡 패널과 유리 커튼월을 교차 적용하여 최적의 채광과 조망을 확보했다.`,
        warningMessage: "RhinoInsideRevit에서 Revit으로 넘기는 효과적인 전략 수립 실패. 결국 Direct Shape으로 할 수 밖에 없었음. Family 제작은 다음 프로젝트에서 기대할 수 밖에 ㅠㅠ",
    },
];
