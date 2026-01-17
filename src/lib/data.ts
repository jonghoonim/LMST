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
    // OMA Style Data
    location?: string;
    client?: string;
    program?: string;
    team?: string;
    siteArea?: string;
    totalArea?: string;
    structure?: string;
    buildingScope?: string;
};


export const INITIAL_LOGS: ProjectLog[] = [
    {
        id: "LOG_2506",
        date: "2025.06.30",
        title: "POSCO Prefab Restroom Design",
        phase: "Realization",
        status: "COMPILED",
        size: "12.4GB",
        finalImage: "/images/LOG_2506_FINAL.png",
        description: "**포스코 프리패브 화장실 상품화 디자인 및 실시설계 (POSCO Modular Restroom)**\n\n모듈러 건축의 효율성과 디자인적 가치를 결합한 프리패브 화장실 상품화 프로젝트. 시공 오차를 최소화하고 공사 기간을 단축하는 동시에, 사용자 중심의 쾌적한 환경을 제공하는 표준 모델을 개발했다.",
    },
    {
        id: "LOG_2505",
        date: "2025.05.15",
        title: "Yeomchang Elementary School West Wing",
        phase: "Competition",
        status: "UNREACHABLE",
        size: "2.1GB",
        finalImage: "/projects/LOG_2505/LOG_2505_FINAL.jpg",
        location: "Seoul, Gangseo-gu, Yangcheon-ro 646-28",
        program: "Educational Facility",
        siteArea: "13,836.3m²",
        totalArea: "12,866.92m²",
        structure: "RC, Steel",
        buildingScope: "B1 / 4F",
        description: "염창초등학교 서관동 개축 프로젝트는 교실을 넘어서는 배움의 장을 만드는 데 초점을 맞추고 있다. 우리는 교실이 단지 지붕과 벽으로 둘러싸인 공간이 아니라, 빛과 바람, 자연, 지역과 연결되는 열린 배움터가 될 수 있다고 믿는다.\n\n이를 상징하는 공간이 바로 “러닝 가든”이다. 층별로 계단식으로 물러난 교실들은 테라스를 만들고, 이 테라스는 학생들이 책을 읽거나 실험을 하고, 휴식을 즐기며, 서로 어울릴 수 있는 확장된 교실이 된다. 옥상 또한 하늘 정원으로 이어져, 아이들이 도시 속에서도 자연을 경험하며 배우도록 한다.\n\n운동장과 육상트랙, 학년별 운동마당, 바닥놀이와 움직임 놀이공간, 생태학습장과 텃밭, 그리고 야외 학습공연장은 모두 “러닝 가든”의 철학을 공유한다. 즉, 배움과 놀이, 생태와 공동체가 자연스럽게 어우러지는 외부 학습 환경이다. 또한, 기존 본관동과의 맥락을 존중하면서도 스텝백 매스와 다양한 외부공간을 통해 학교 전체가 하나의 학습 네트워크로 엮이도록 했다. 정문앞의 환영광장은 협소하고 혼잡했던 진입부 문제를 해결하며, 학생과 학부모를 맞이하는 열린 얼굴이 된다.\n\n결국, 이 프로젝트가 지향하는 것은 단순한 교사동의 개축이 아니라, “러닝 가든”이라는 이름 아래, 교실에서 마당으로, 마당에서 도시로 확장되는 새로운 학교의 풍경이다.",
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
        location: "Gyeonggi-do, Hwaseong-si, Byeongjeom-dong 899",
        program: "Cultural (Science Museum)",
        siteArea: "4,251.20m²",
        totalArea: "9,277.97m²",
        structure: "RC, Partial Steel",
        buildingScope: "B1 / 4F",
        description: `과학관은 병점역과 근린공원 사 사이, 도시의 여러 흐름이 교차하는 지점에 놓인다. 건축은 그 사이에서 연결을 제안한다. 연결을 위해 새롭게 도입된 축은 도시와 공원을 가로지르는 보행의 흐름이자, 빛과 바람의 방향을 고려한 환경적 틀로 작동한다. 이 축을 따라  프로그램이 배치되고, 공간은 안팎의 경계를 넘나들며 유기적으로 펼쳐진다. 도시의 흐름, 자연의 조건, 프로그램의 구조를 하나로 엮는 열린 장치로서의 건축. 이것이 우리가 제안하는 과학관의 전략이다.

건축은 다양한 거리와 속도에서 인식된다. 고가도로, 지하철, 진입 광장, 공원… 각기 다른 위치에서 조우하는 이 건물은 단순한 매스가 아닌, 장소를 각인시키는 선명한 형상으로 작동한다. 외피는 호기심을 유발하고, 틈과 겹침을 통해 내부를 암시한다. 이러한 인지적 전략은 방문자에게 기대감을 유도하며, 공간은 동선을 따라 펼쳐지는 발견의 서사로 확장된다.

단면을 통해 시간성과 공간성을 동시에 담아낸다. 수직 이동과 수평 흐름이 교차하는 이 과학관에서는 브릿지, 계단, 오픈 라운지, 슬래브의 틈새를 따라 각기 다른 레벨의 장면들이 겹쳐지며 감각된다. 이는 단순한 층의 나열이 아닌, 발견의 리듬을 가진 서사적 단면을 구성한다. 관람자는 오르내리며, 내부와 외부의 관계, 프로그램 간의 연결, 시선의 변화 속에서 공간을 완성해나간다. 과학관은 머무름과 이동, 몰입과 전환이 교차하는 열린 경험의 흐름 위에 놓인다. 공간은 기능의 나열이 아닌, 감각의 리듬과 움직임의 사로 구성된다. 관람자는 하나의 정해진 길이 아니라, 여러 갈래의 흐름 속에서 스스로의 여정을 구성하며 공간을 통과하게 된다. 건축은 이 흐름 속에서 탐색의 밀도, 휴식의 여유, 발견의 순간들을 자연스럽게 조직하는 배경이 된다.`,
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
