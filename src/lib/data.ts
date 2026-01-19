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
    exteriorFinish?: string;
    architects?: string;
};


export const INITIAL_LOGS: ProjectLog[] = [
    {
        id: "LOG_2506",
        date: "2025.06.30",
        title: "POSCO Prefab Restroom Design",
        phase: "Completed (2025)",
        status: "COMPILED",
        size: "12.4GB",
        finalImage: "/projects/LOG_2506/05_Stone_Front_LMST.png",
        client: "POSCO E&C / POSCO Steel",
        program: "R&D, Product Design",
        structure: "PosART, Prefab Frame",
        buildingScope: "Concept ~ Mock-up",
        team: "LMST Architects (w/ SEAL)",
        description: `Research for Industrialization: From Construction to Manufacturing (건설에서 제조로: 욕실의 상품화 연구)

This project explores the industrialization of interior architecture. Moving away from labor-intensive on-site wet construction, we developed a modular bath unit based on Off-Site Construction (OSC) methodology. The primary logic was to achieve manufacturing precision, shorten construction timelines, and standardize design quality by pre-fabricating components in a controlled factory environment.

이 프로젝트는 실내 건축의 상품화 가능성을 탐구한다. 노동 집약적인 현장 습식 공법에서 벗어나, OSC(Off-Site Construction) 방법론을 기반으로 한 모듈러 욕실 유닛을 개발했다. 통제된 공장 환경에서의 선제작을 통해 제조업 수준의 정밀도를 확보하고, 공기를 단축하며, 디자인 품질을 표준화하는 것이 핵심 논리다.

Collaborating with POSCO, we utilized high-resolution printed steel panels (PosART) to replace traditional ceramic tiling. This dry assembly system eliminates unpredictable site variables and minimizes construction tolerance. We defined diverse design typologies—ranging from Minimal to Natural—transforming the bathroom from a 'built space' into a 'highly engineered product.'

POSCO와의 협업을 통해 고해상도 프린팅 강판(PosART)을 적용, 전통적인 타일 마감을 대체하는 건식 조립 시스템을 구축했다. 이 시스템은 현장의 불확실성을 제거하고 시공 오차를 최소화한다. 우리는 미니멀에서 내추럴에 이르는 다양한 디자인 유형을 정의하여, 욕실을 현장에서 '지어지는 공간'이 아닌 공학적으로 설계된 '조립형 제품'으로 전환시켰다.`,
    },
    {
        id: "LOG_2505",
        date: "2025.05.15",
        title: "Yeomchang Elementary School West Wing",
        phase: "Competition (2025)",
        status: "UNREACHABLE",
        size: "2.1GB",
        finalImage: "/projects/LOG_2505/LOG_2505_Final_v2.jpg",
        location: "Gangseo-gu, Seoul, Korea",
        program: "Educational Facility (Elementary School)",
        siteArea: "13,836.30 m²",
        totalArea: "7,562.86 m² (Extension: 2,731.78 m²)",
        buildingScope: "B1 - 4F",
        structure: "RC + Steel Frame (Partial)",
        exteriorFinish: "Clay Brick, Exposed Concrete, Low-E Triple Glazing, Vertical Louver",
        architects: "LMST Architects",
        description: `A strategic 'Step-back' volume defines the reconstruction of Seoul Yeomchang Elementary School. Instead of a monolithic block typical of urban schools, the massing recedes at each level, responding to the dense residential context while securing optimal daylight conditions.

서울염창초등학교 서관동의 형태는 전략적인 '스텝백(Step-back)' 볼륨으로 규정된다. 우리는 고밀도 주거지로 둘러싸인 대지에서, 위압적인 단일 매스 대신 층별로 후퇴하는 볼륨을 통해 주변 맥락에 대응하고 최적의 채광 환경을 확보했다.

This structural logic generates 'Learning Gardens'—terraced outdoor spaces that extend the classroom environment. By blurring the boundary between indoor instruction and outdoor activity, the architecture transforms from a static educational facility into a multi-layered landscape of learning.

이 구조적 논리는 '러닝 가든(Learning Garden)'이라는 테라스형 외부 공간을 파생시킨다. 교실 영역을 외부로 확장하여 실내 수업과 야외 활동의 경계를 허무는 이 시도는, 학교를 정적인 교육 시설에서 입체적인 학습의 풍경으로 전환시킨다.

The internal atrium operates as an environmental engine, utilizing the stack effect to maximize natural ventilation and reduce energy loads. On the ground level, a permeable pilotis structure and 'Welcome Plaza' resolve congestion, offering a flexible, weather-protected interface for the community.

내부의 아트리움은 굴뚝 효과를 통해 자연 환기를 극대화하고 에너지 부하를 낮추는 환경적 엔진으로 작동한다. 지상부의 투과적인 필로티와 '환영 광장'은 등하교 시간의 혼잡을 해소하며, 날씨에 관계없이 활용 가능한 유연한 커뮤니티 인터페이스를 제공한다.

Reinterpreting the brick materiality of the existing main building, the new design establishes a coherent dialogue with its history. Seoul Yeomchang Elementary School stands as a dynamic platform that integrates urban logic, nature, and community.

기존 본관동의 벽돌 물성을 재해석한 새로운 디자인은 학교의 역사와 맥락적 대화를 시도한다. 서울염창초등학교는 도시의 논리와 자연, 커뮤니티를 통합하는 역동적인 플랫폼이다.`,
    },
    {
        id: "LOG_2503",
        date: "2025.05.29",
        title: "Hwaseong Children's Science Museum",
        phase: "Competition (2025)",
        status: "UNREACHABLE",
        size: "8.37GB",
        finalImage: "/images/LOG_2503_FINAL.png",
        rawImage: "/images/LOG_2503_PROCESS.png",
        location: "Hwaseong, Gyeonggi-do, Korea",
        program: "Cultural & Educational Facility",
        siteArea: "4,251.20 m²",
        totalArea: "9,277.97 m²",
        structure: "RC, Partial Steel",
        buildingScope: "B1 / 4F",
        architects: "LMST Architects",
        description: `Located at the intersection of urban velocity and natural landscape, Hwaseong Children’s Science Museum mediates the contrast between the high-speed transit of Byeongjeom Station and the tranquil topography of the adjacent park. The project operates as an interface, establishing a coherent link between the fragmented urban fabric and the open green space.

화성시 어린이 과학관은 병점역의 빠른 도시 속도와 근린공원의 정적인 풍경이 교차하는 지점에 위치한다. 이 프로젝트는 상반된 두 맥락을 중재하며, 파편화된 도시 조직과 자연을 잇는 새로운 인터페이스로 작동한다.

The design responds to this duality through the ‘Discovery Canyon,’ a carved-out void that reinterprets the conventional museum circulation. Rather than a static exhibition hall, this continuous spatial artery draws the park’s pathway into the building, orchestrating a seamless flow of movement and light. It organizes the program vertically, creating a rhythmic sequence of discovery from the ground level up to the roof terrace.

건물의 중심을 관통하는 ‘디스커버리 캐년(Discovery Canyon)’은 박물관의 전형적인 동선 체계를 재해석한 결과물이다. 공원의 오솔길을 내부로 끌어들인 이 입체적인 협곡은 단순한 이동 공간을 넘어, 빛과 움직임이 공명하는 탐험의 축으로 기능한다. 이는 프로그램을 수직적으로 조직하며, 지상에서 옥상 테라스까지 이어지는 발견의 시퀀스를 형성한다.

The façade is articulated with folded aluminum panels, designed to respond to the varying speeds of the surrounding infrastructure. From the highway and subway, the building reads as a dynamic, legible volume; from the park, it dissolves into a permeable backdrop for activity. This intelligent skin not only defines the museum's visual identity but also optimizes environmental performance by controlling daylight and views.

입면은 주변 인프라의 속도에 반응하는 알루미늄 절곡 패널로 분절된다. 고속도로와 지하철의 빠른 시선에서는 선명한 조형적 볼륨으로, 공원의 느린 시선에서는 내외부가 투과되는 유연한 배경으로 읽히도록 설계되었다. 이 지능적인 표피(Skin)는 과학관의 시각적 정체성을 규정할 뿐 아니라, 채광과 조망을 제어하며 환경적 성능을 최적화한다.

By dissolving the boundaries between exhibition and circulation, the museum transcends functional separation, offering an open platform where logic and imagination intersect. Hwaseong Children’s Science Museum is not merely a container for artifacts, but a structural landscape that encapsulates the flow of the city and the curiosity of its users.

전시와 동선의 관습적인 경계를 허물고, 건축은 논리와 상상력이 교차하는 열린 플랫폼으로 작동한다. 화성시 어린이 과학관은 단순히 전시물을 담는 그릇이 아니라, 도시의 흐름과 사용자의 호기심을 구조적으로 담아낸 입체적인 풍경이다.`,
        warningMessage: "RhinoInsideRevit에서 Revit으로 넘기는 효과적인 전략 수립 실패. 결국 Direct Shape으로 할 수 밖에 없었음. Family 제작은 다음 프로젝트에서 기대할 수 밖에 ㅠㅠ",
    },
    {
        id: "LOG_2501",
        date: "2025.01.20",
        title: "Muk 1-dong Community Complex",
        phase: "Competition",
        status: "RUNTIME_ERROR",
        size: "3.5GB",
        description: "중랑구 묵1동 복합청사 (Jungnang-gu Muk 1-dong Complex Center)\n\n주민 밀착형 행정 서비스와 문화 공간을 통합한 복합 청사 계획안.",
    },
    {
        id: "LOG_2403",
        date: "2024.03.10",
        title: "Hwaseong Botanical Garden Remodeling",
        phase: "Competition",
        status: "UNREACHABLE",
        size: "1.8GB",
        finalImage: "/projects/LOG_2403/MoneyShot.png",
        description: "화성 우리꽃 식물원 건축 리모델링 (Hwaseong Our Flower Botanical Garden)\n\n노후화된 온실과 전시관을 리모델링하여 생태 교육과 휴식이 공존하는 새로운 식물원 환경을 조성하는 제안.",
    },
    {
        id: "LOG_2402",
        date: "2024.02.14",
        title: "Seoul Dongshin Elem. Green Smart School",
        phase: "Competition",
        status: "RUNTIME_ERROR",
        size: "4.2GB",
        description: "서울동신초등학교 그린스마트 미래학교 (Seoul Dongshin Elementary School)\n\n미래 교육을 위한 스마트 학습 환경과 친환경 건축 요소를 결합한 학교 개축 프로젝트.",
    },
    {
        id: "LOG_2401",
        date: "2024.01.05",
        title: "Seoul Dongmyung Elem. Green Smart School",
        phase: "Competition",
        status: "RUNTIME_ERROR",
        size: "3.9GB",
        description: "서울동명초등학교 그린스마트 미래학교 (Seoul Dongmyung Elementary School)\n\n기존 교사의 노후화를 개선하고 탄소 중립 실현을 위한 그린 에너지 기술을 도입한 미래형 학교 모델.",
    },
];
