export type ArchiveArtifact = {
    timestamp: string;       // e.g. "2024.06.25 14:29"
    type: "SITE_PHOTO" | "MASS_STUDY" | "RENDER_WIP" | "RENDER_FINAL" | "DIAGRAM" | "DOCUMENT";
    src: string;             // image path
    filename: string;        // original filename
    label: string;           // short description
    meta?: string;           // file size, tool used, etc.
};

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
    images?: string[]; // Array of image paths for MOS-style grid display
    archive?: ArchiveArtifact[]; // Archaeological timeline artifacts
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
        id: "LOG_2606",
        date: "2026.07.20",
        title: "Seoul Startup Hub Gwanak",
        phase: "Competition (2026)",
        status: "UNREACHABLE",
        size: "24.1GB",
        finalImage: "/projects/LOG_2606/LOG_2606_FINAL.jpg",
        images: [
            "/projects/LOG_2606/LOG_2606_FINAL.jpg",
        ],
        archive: [
            {
                timestamp: "2026.07.12 15:00",
                type: "RENDER_WIP",
                src: "/projects/LOG_2606/archive/lab.jpg",
                filename: "03_Lab_Floor.png",
                label: "Deep-tech research floor — AI, bio and robotics clusters.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.13 16:00",
                type: "RENDER_WIP",
                src: "/projects/LOG_2606/archive/cafe.jpg",
                filename: "07_Cafe.png",
                label: "Ground-floor café opening onto the public plaza.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.16 11:00",
                type: "RENDER_WIP",
                src: "/projects/LOG_2606/archive/network.jpg",
                filename: "06_Network_Zone.png",
                label: "Networking within the open Commons.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.16 15:00",
                type: "RENDER_WIP",
                src: "/projects/LOG_2606/archive/entrance.jpg",
                filename: "05_Entrance.png",
                label: "Main entrance beneath the deep cantilever.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.18 20:00",
                type: "RENDER_FINAL",
                src: "/projects/LOG_2606/LOG_2606_FINAL.jpg",
                filename: "001_Mainview.png",
                label: "Final street view from Sillim-ro at dusk.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.19 13:00",
                type: "RENDER_FINAL",
                src: "/projects/LOG_2606/archive/vc.jpg",
                filename: "08_VC.png",
                label: "Vertical Commons — the growth hub for investment, demo-days and networking.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.19 18:00",
                type: "RENDER_FINAL",
                src: "/projects/LOG_2606/archive/sub.jpg",
                filename: "02_Sub_Morning.png",
                label: "Secondary approach in morning light.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.19 22:00",
                type: "RENDER_FINAL",
                src: "/projects/LOG_2606/archive/backside.jpg",
                filename: "10_Backside.png",
                label: "Rear elevation toward Sillim-ro 8-gil.",
                meta: "D5 Render",
            },
            {
                timestamp: "2026.07.20 10:00",
                type: "RENDER_FINAL",
                src: "/projects/LOG_2606/archive/eventhall.jpg",
                filename: "09_Event_Hall.png",
                label: "Event hall — part of the ground-floor Urban Living Room.",
                meta: "D5 Render",
            },
        ],
        location: "Sillim-dong, Gwanak-gu, Seoul",
        program: "Startup R&D Complex (Educational Research Facility)",
        siteArea: "3,575.00 m²",
        totalArea: "15,567.69 m²",
        buildingScope: "B3 / 8F (H: 33.15m)",
        structure: "RC + Steel Frame (Partial)",
        exteriorFinish: "Curved Aluminum Horizontal Band, Low-E Triple Glazing, U-Channel Glass, BIPV Spandrel",
        architects: "TAAL Architects + LMST Architects (Joint Entry)",
        description: `Growing Deep Tech
Architecture that Organizes Growth

Deep tech does not begin with a company. It begins with a single project.

Deep tech matures into a company through a long process of research, experiment, prototyping, demonstration and commercialization. Yet most startup-support facilities concentrate on providing office space for companies that are already organized, and so fail to hold the spatial needs of the early stage in which a project is first begun and grown.

This proposal redefines the startup hub not as a building (a Container) that houses companies, but as an architecture (an Infrastructure) that organizes growth. The architecture is a growth platform that spatially organizes the process by which a project grows through research and experiment into a company and connects back into the innovation ecosystem — Project → Lab → Company → Scale-up → Innovation Ecosystem.

The building is composed by vertically stacking research clusters in the deep-tech fields — AI, bio, robotics, advanced materials, DX. Each floor holds a graded spatial structure running Knowledge Street → Lab Band → Open Lab → Focused Lab. The Knowledge Street is a street of knowledge where researchers and projects perceive and exchange one another's activity; the Lab Band is a semi-open interface where research results, prototypes and the process of experiment are made visible; the Open Lab is a flexible research space for project-based research and collaboration; and the Focused Lab is an independent research space requiring security and concentration. This depth of space continuously links openness with concentration, and sharing with protection, extending the visualization of research into natural learning and collaboration.

Each research cluster is connected into a single innovation ecosystem through the Vertical Commons that runs through the building. This is not a mere atrium but the central axis of growth, where investment, demo-days, mentoring, technology exhibition and networking take place. Here a project connects with companies, investors and research institutions and grows, and the grown company in turn generates new projects and collaborations — forming a virtuous cycle.

Growing Deep Tech is not a project that designs space, but a project that designs the mechanism of growth. This architecture is a new growth infrastructure that grows projects into companies and connects individual research into a sustainable deep-tech ecosystem.

An Urban Interface for Growing Deep Tech

Seoul Startup Hub Gwanak is not a single building but an urban interface that connects Gwanak S-Valley.

The site lies at the boundary where Seoul National University's research axis meets the Sillim living quarter — a node where diverse startup-support facilities, universities and the local community overlap. This proposal interprets that urban character not as a single independent object but as an open platform that connects the many flows of the city.

The building empties its lower floors toward the city and forms an open Commons. The ground floor is planned as an Urban Living Room in which plaza, event hall and networking space run continuously, making a place of urban exchange where residents, researchers and startups meet naturally.

The upper floors are composed as a research platform holding deep-tech research and growth programs. Each floor is an independent research cluster, yet together with the open lower floors and the Vertical Commons it forms a single growth ecosystem. Research programs that require security are placed above, and public programs that communicate with the city are placed below, securing openness and security at once.

The building's form emerged in the process of tuning the surrounding urban scale. The lower floors answer the living quarter and the pedestrian scale, while the upper horizontal mass holds the flexibility and expandability of the deep-tech research spaces. The mass lifted into the air makes an open front toward the city, and the Commons beneath it becomes a new center for Gwanak S-Valley.

This proposal offers not a single building but a new Urban Interface connecting city and research, startup and community — a platform that lets projects grow into companies.

--------------------------------------------------

Growing Deep Tech
Architecture that Organizes Growth

Deep Tech 는 기업에서 시작되지 않는다. 하나의 프로젝트에서 시작된다.

Deep Tech 는 연구, 실험, 프로토타입 제작, 실증, 사업화를 거치는 긴 성장 과정을 통해 기업으로 발전한다. 그러나 대부분의 창업지원시설은 이미 조직화된 기업을 위한 업무공간을 제공하는 데 집중되어 있어 프로젝트가 시작되고 성장하는 초기 단계의 공간적 요구를 충분히 담아내지 못하고 있다.

본 계획은 창업허브를 기업을 수용하는 건물(Container)이 아닌 성장을 조직하는 건축(Infrastructure)으로 새롭게 정의한다. 건축은 프로젝트가 연구와 실험을 거쳐 기업으로 성장하고, 다시 혁신 생태계와 연결되는 과정(Project → Lab → Company → Scale-up → Innovation Ecosystem)을 공간적으로 조직하는 성장 플랫폼이다.

건물은 AI, 바이오, 로보틱스, 첨단소재, DX 등 Deep Tech 분야의 연구 클러스터를 수직적으로 적층하여 구성된다. 각 층은 Knowledge Street → Lab Band → Open Lab → Focused Lab 으로 이어지는 단계적 공간구조를 갖는다. Knowledge Street 는 연구자와 프로젝트가 서로의 활동을 인지하고 교류하는 지식의 가로이며, Lab Band 는 연구성과와 프로토타입, 실험 과정이 드러나는 반공개 인터페이스이다. Open Lab 은 프로젝트 단위의 연구와 협업이 이루어지는 유연한 연구공간이며, Focused Lab 은 보안과 집중이 요구되는 독립 연구공간이다. 이러한 공간의 깊이는 개방과 집중, 공유와 보호를 연속적으로 연결하며 연구의 가시화를 자연스러운 학습과 협업으로 확장시킨다.

각 연구 클러스터는 건물을 관통하는 Vertical Commons 를 통해 하나의 혁신 생태계로 연결된다. 이곳은 단순한 아트리움이 아니라 투자, 데모데이, 멘토링, 기술 전시와 네트워킹이 이루어지는 성장의 중심축이다. 프로젝트는 이 공간에서 기업, 투자자, 연구기관과 연결되며 성장하고, 성장한 기업은 다시 새로운 프로젝트와 협업을 만들어내는 선순환을 형성한다.

Growing Deep Tech 는 공간을 설계하는 프로젝트가 아니라 성장의 메커니즘을 설계하는 프로젝트이다. 이 건축은 프로젝트를 기업으로 성장시키고, 개별 연구를 지속가능한 Deep Tech 생태계로 연결하는 새로운 성장 인프라이다.

An Urban Interface for Growing Deep Tech

서울창업허브 관악은 하나의 건축물이 아니라 관악 S-Valley 를 연결하는 도시적 인터페이스이다.

대상지는 서울대학교 연구축과 신림 생활권이 만나는 경계에 위치하며, 다양한 창업지원시설과 대학, 지역사회가 중첩되는 결절점이다. 본 계획은 이러한 도시적 특성을 하나의 독립된 오브젝트가 아닌 다양한 도시 흐름을 연결하는 개방형 플랫폼으로 해석하였다.

건물은 도시를 향해 저층부를 비우고 열린 Commons 를 형성한다. 1층은 광장, 이벤트홀, 네트워킹 공간이 연속되는 Urban Living Room 으로 계획되어 지역 주민, 연구자, 창업기업이 자연스럽게 만나는 도시적 교류의 장을 만든다.

상층부는 Deep Tech 연구와 성장 프로그램을 담는 연구 플랫폼으로 구성된다. 각 층은 독립적인 연구 클러스터이면서도, 열린 저층부와 Vertical Commons 를 통해 하나의 성장 생태계를 형성한다. 보안이 요구되는 연구 프로그램은 상부에, 도시와 소통하는 공공 프로그램은 저층에 배치하여 개방성과 보안성을 동시에 확보하였다.

건축의 형태는 주변 도시 스케일을 조율하는 과정에서 형성되었다. 저층부는 생활권과 보행 스케일에 대응하고, 상부의 수평적 매스는 Deep Tech 연구공간의 유연성과 확장성을 담는다. 공중으로 들어 올려진 매스는 도시를 향한 열린 전면을 만들고, 그 아래의 Commons 는 관악 S-Valley 의 새로운 중심이 된다.

본 계획은 하나의 건축물을 제안하는 것이 아니라 도시와 연구, 창업과 지역사회를 연결하는 새로운 Urban Interface 이자 프로젝트가 기업으로 성장케하는 플랫폼이다.`,
    },
    {
        id: "LOG_2506",
        date: "2025.06.30",
        title: "POSCO Prefab Restroom Design",
        phase: "Completed (2025)",
        status: "COMPILED",
        size: "12.4GB",
        finalImage: "/projects/LOG_2506/05_Stone_Front_LMST.png",
        images: [
            "/projects/LOG_2506/05_Stone_Front_LMST.png",
            "/projects/LOG_2506/bathroom_detail.png",
            "/projects/LOG_2506/assembly.png",
            "/projects/LOG_2506/panel_variations.png",
            "/projects/LOG_2506/05_Stone_Front_LMST_RESIZE.png",
        ],
        client: "POSCO E&C / POSCO Steel",
        program: "R&D, Product Design",
        structure: "PosART, Prefab Frame",
        buildingScope: "Concept ~ Mock-up",
        team: "LMST Architects (w/ SEAL)",
        description: `Research for Industrialization: From Construction to Manufacturing

This project explores the industrialization of interior architecture. Moving away from labor-intensive on-site wet construction, we developed a modular bath unit based on Off-Site Construction (OSC) methodology. The primary logic was to achieve manufacturing precision, shorten construction timelines, and standardize design quality by pre-fabricating components in a controlled factory environment.

Collaborating with POSCO, we utilized high-resolution printed steel panels (PosART) to replace traditional ceramic tiling. This dry assembly system eliminates unpredictable site variables and minimizes construction tolerance. We defined diverse design typologies—ranging from Minimal to Natural—transforming the bathroom from a 'built space' into a 'highly engineered product.'

--------------------------------------------------

건설에서 제조로: 욕실의 상품화 연구

이 프로젝트는 실내 건축의 상품화 가능성을 탐구한다. 노동 집약적인 현장 습식 공법에서 벗어나, OSC(Off-Site Construction) 방법론을 기반으로 한 모듈러 욕실 유닛을 개발했다. 통제된 공장 환경에서의 선제작을 통해 제조업 수준의 정밀도를 확보하고, 공기를 단축하며, 디자인 품질을 표준화하는 것이 핵심 논리다.

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
        images: [
            "/projects/LOG_2505/LOG_2505_Final_v2.jpg",
            "/projects/LOG_2505/주출입구 전경.jpg",
            "/projects/LOG_2505/부출입구 전경_2048.jpg",
            "/projects/LOG_2505/3층 도서실 전경.jpg",
            "/projects/LOG_2505/4층 공용부 전경.jpg",
            "/projects/LOG_2505/stepback.png",
            "/projects/LOG_2505/atrium.png",
            "/projects/LOG_2505/garden.png",
            "/projects/LOG_2505/LOG_2505_FINAL.jpg",
        ],
        location: "Gangseo-gu, Seoul, Korea",
        program: "Educational Facility (Elementary School)",
        siteArea: "13,836.30 m²",
        totalArea: "7,562.86 m² (Extension: 2,731.78 m²)",
        buildingScope: "B1 - 4F",
        structure: "RC + Steel Frame (Partial)",
        exteriorFinish: "Clay Brick, Exposed Concrete, Low-E Triple Glazing, Vertical Louver",
        architects: "LMST Architects",
        description: `A strategic 'Step-back' volume defines the reconstruction of Seoul Yeomchang Elementary School. Instead of a monolithic block typical of urban schools, the massing recedes at each level, responding to the dense residential context while securing optimal daylight conditions.

This structural logic generates 'Learning Gardens'—terraced outdoor spaces that extend the classroom environment. By blurring the boundary between indoor instruction and outdoor activity, the architecture transforms from a static educational facility into a multi-layered landscape of learning.

The internal atrium operates as an environmental engine, utilizing the stack effect to maximize natural ventilation and reduce energy loads. On the ground level, a permeable pilotis structure and 'Welcome Plaza' resolve congestion, offering a flexible, weather-protected interface for the community.

Reinterpreting the brick materiality of the existing main building, the new design establishes a coherent dialogue with its history. Seoul Yeomchang Elementary School stands as a dynamic platform that integrates urban logic, nature, and community.

--------------------------------------------------

서울염창초등학교 서관동의 형태는 전략적인 '스텝백(Step-back)' 볼륨으로 규정된다. 우리는 고밀도 주거지로 둘러싸인 대지에서, 위압적인 단일 매스 대신 층별로 후퇴하는 볼륨을 통해 주변 맥락에 대응하고 최적의 채광 환경을 확보했다.

이 구조적 논리는 '러닝 가든(Learning Garden)'이라는 테라스형 외부 공간을 파생시킨다. 교실 영역을 외부로 확장하여 실내 수업과 야외 활동의 경계를 허무는 이 시도는, 학교를 정적인 교육 시설에서 입체적인 학습의 풍경으로 전환시킨다.

내부의 아트리움은 굴뚝 효과를 통해 자연 환기를 극대화하고 에너지 부하를 낮추는 환경적 엔진으로 작동한다. 지상부의 투과적인 필로티와 '환영 광장'은 등하교 시간의 혼잡을 해소하며, 날씨에 관계없이 활용 가능한 유연한 커뮤니티 인터페이스를 제공한다.

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
        images: [
            "/images/LOG_2503_FINAL.png",
            "/projects/LOG_2503/exterior.png",
            "/projects/LOG_2503/atrium.png",
            "/projects/LOG_2503/section.png",
            "/images/LOG_2503_PROCESS.png",
        ],
        location: "Hwaseong, Gyeonggi-do, Korea",
        program: "Cultural & Educational Facility",
        siteArea: "4,251.20 m²",
        totalArea: "9,277.97 m²",
        structure: "RC, Partial Steel",
        buildingScope: "B1 / 4F",
        architects: "LMST Architects",
        description: `Located at the intersection of urban velocity and natural landscape, Hwaseong Children’s Science Museum mediates the contrast between the high-speed transit of Byeongjeom Station and the tranquil topography of the adjacent park. The project operates as an interface, establishing a coherent link between the fragmented urban fabric and the open green space.

The design responds to this duality through the ‘Discovery Canyon,’ a carved-out void that reinterprets the conventional museum circulation. Rather than a static exhibition hall, this continuous spatial artery draws the park’s pathway into the building, orchestrating a seamless flow of movement and light. It organizes the program vertically, creating a rhythmic sequence of discovery from the ground level up to the roof terrace.

The façade is articulated with folded aluminum panels, designed to respond to the varying speeds of the surrounding infrastructure. From the highway and subway, the building reads as a dynamic, legible volume; from the park, it dissolves into a permeable backdrop for activity. This intelligent skin not only defines the museum's visual identity but also optimizes environmental performance by controlling daylight and views.

By dissolving the boundaries between exhibition and circulation, the museum transcends functional separation, offering an open platform where logic and imagination intersect. Hwaseong Children’s Science Museum is not merely a container for artifacts, but a structural landscape that encapsulates the flow of the city and the curiosity of its users.

--------------------------------------------------

화성시 어린이 과학관은 병점역의 빠른 도시 속도와 근린공원의 정적인 풍경이 교차하는 지점에 위치한다. 이 프로젝트는 상반된 두 맥락을 중재하며, 파편화된 도시 조직과 자연을 잇는 새로운 인터페이스로 작동한다.

건물의 중심을 관통하는 ‘디스커버리 캐년(Discovery Canyon)’은 박물관의 전형적인 동선 체계를 재해석한 결과물이다. 공원의 오솔길을 내부로 끌어들인 이 입체적인 협곡은 단순한 이동 공간을 넘어, 빛과 움직임이 공명하는 탐험의 축으로 기능한다. 이는 프로그램을 수직적으로 조직하며, 지상에서 옥상 테라스까지 이어지는 발견의 시퀀스를 형성한다.

입면은 주변 인프라의 속도에 반응하는 알루미늄 절곡 패널로 분절된다. 고속도로와 지하철의 빠른 시선에서는 선명한 조형적 볼륨으로, 공원의 느린 시선에서는 내외부가 투과되는 유연한 배경으로 읽히도록 설계되었다. 이 지능적인 표피(Skin)는 과학관의 시각적 정체성을 규정할 뿐 아니라, 채광과 조망을 제어하며 환경적 성능을 최적화한다.

전시와 동선의 관습적인 경계를 허물고, 건축은 논리와 상상력이 교차하는 열린 플랫폼으로 작동한다. 화성시 어린이 과학관은 단순히 전시물을 담는 그릇이 아니라, 도시의 흐름과 사용자의 호기심을 구조적으로 담아낸 입체적인 풍경이다.`,
        warningMessage: "RhinoInsideRevit에서 Revit으로 넘기는 효과적인 전략 수립 실패. 결국 Direct Shape으로 할 수 밖에 없었음. Family 제작은 다음 프로젝트에서 기대할 수 밖에 ㅠㅠ",
    },
    {
        id: "LOG_2501",
        date: "2025.01.20",
        title: "Muk 1-dong Community Complex",
        phase: "Competition (2025)",
        status: "RUNTIME_ERROR",
        size: "3.5GB",
        finalImage: "/projects/LOG_2501/LOG_2501_AXON4.png",
        images: [
            "/projects/LOG_2501/LOG_2501_AXON4.png",
            "/projects/LOG_2501/facade.png",
            "/projects/LOG_2501/interior.png",
            "/projects/LOG_2501/LOG_2501_Final.png",
            "/projects/LOG_2501/LOG_2501_AXON.png",
            "/projects/LOG_2501/LOG_2501_AXON2.png",
            "/projects/LOG_2501/LOG_2501_AXON3.png",
            "/projects/LOG_2501/LOG_2501.png",
        ],
        location: "120-2, Muk-dong, Jungnang-gu, Seoul",
        program: "Public Office Facility",
        siteArea: "1,290.00 m²",
        totalArea: "4,081.41 m²",
        buildingScope: "B3 / 3F (H: 17.39m)",
        structure: "RC (Reinforced Concrete)",
        architects: "LMST Architects",
        description: `Muk 1-dong Community Complex

[Point of Boundary]
This is a transitional zone. To the south and west, a low-rise, dense village fabric is formed, while large apartment complexes sit to the northeast, creating spatial openness. To the east, Bonghwasan Neighborhood Park unfolds, connecting the city to nature. The topography limits and varies, density fluctuates, and the visual environment is in stark contrast.

The northern road is the main access axis. Pedestrians and vehicles intersect, naturally forming an open space. Conversely, the south and west are compressed by topographic level differences and adjacent buildings, limiting views. The Muk 1-dong Complex sits like a puzzle piece within this context. It accepts the topographic flow, orchestrates visual experiences, and modulates the balance between density and openness.

[Circulation Logic]
Vehicles approach from the eastern road. Although the slope is unfavorable, this avoids interference with the main pedestrian access and public transit on the southern road. We overcame the disadvantage by placing hygiene spaces and shafts along the ramp.

The main entrance forms from the northern road, connecting linearly to the southern sub-entrance via an internal stair. The Civil Affairs Office has increased accessibility through a direct stair from the northern road. Staff access their workspace via independent circulation without interference.

The 'Community Step' connects the basement and the first floor, linking the Resident Lounge, the Small Library reading area, and the southern outdoor space. The 2nd-floor Living Culture Center is directly linked to the Community Step via an external stair, encouraging organic communication between floors.

[Programmatic Overlay]
The Civil Affairs Office shifts function over time. It operates as an administrative service during the day but transforms into a community space combined with the Small Library in the evening. Open layouts and flexible furniture realize a space where administration and culture overlap.

The 2nd floor is where community activity is most vibrant. The program rooms of the Resident Council and the floor space of the Living Culture Center connect organically to the 'Encounter Space' via flexible glass walls. Independent when closed, they expand into a single grand space when open, accommodating workshops, lectures, performances, and gatherings. Sound-proof spaces are placed in the northeast corner to minimize impact on the southern residential area.

The B1 Health Center is placed adjacent to the road for accessibility. The Resident Lounge becomes a book café connecting to the library and expands into a small stage using the library stairs. Folding doors connect the interior to the exterior, functioning as a small plaza when flea markets are held.

[Façade Strategy]
The façade responds to the urban fabric and environmental context. The upper levels on the north, east, and west consist of metal fabric wrapping glass curtain walls to control light and improve energy performance. The lower levels use stone and brick to form a stable podium, while high-strength wood panels on the north create a friendly interface with the village.

The west minimizes openings for privacy, while the south induces daylight between vertical walls. These walls establish a rhythm reflecting the village's urban tissue. The diagonal line of the Civil Affairs Office stair acts as a medium emphasizing the entrance.

--------------------------------------------------

묵1동 복합청사

[경계의 지점]
이곳은 전이 구역이다. 남쪽과 서쪽은 낮고 밀도 높은 마을 조직이 형성되어 있고, 북동쪽으로는 대형 아파트 단지가 자리하며 공간적 여유가 생긴다. 동쪽으로는 봉화산 근린공원이 펼쳐지며 도시가 자연으로 이어진다. 지형은 높낮이를 달리하고, 밀도는 변화를 거듭하며, 시각적 환경은 극명하게 대비된다.

북측 도로는 주요 접근축이다. 보행과 차량이 교차하며 자연스럽게 열린 공간을 형성한다. 반면 남측과 서측은 지형의 고저차와 인접 건축물에 의해 시야가 제한되며 공간이 압축된다. 묵1동 청사는 이 모든 맥락 속에서 하나의 퍼즐 조각처럼 자리한다. 지형적 흐름을 수용하고, 시각적 경험을 조율하며, 밀도와 개방감 사이의 균형을 조정한다.

[동선의 논리]
차량은 동측 도로에서 접근한다. 경사로가 불리한 조건이지만 남측 도로의 주요 접근로와 대중교통의 간섭을 피하기 위함이다. 위생공간과 샤프트를 경사로를 따라 배치하여 불리함을 극복했다.

북측 도로에서 청사 주출입구가 형성되고 내부 계단을 통해 일직선으로 남쪽 부출입구와 연결된다. 민원실은 북측 도로에서 직접 연결된 계단을 통해 접근성을 높였다. 직원들은 독립적인 동선을 통해 다른 공간과의 간섭 없이 업무 공간에 접근한다.

커뮤니티 스텝은 지하 1층과 1층을 잇는 연결 고리로, 주민사랑방에서 작은도서관 열람 공간을 거쳐 남측 외부 공간까지 이어진다. 2층 생활문화센터는 외부 계단을 통해 커뮤니티 스텝으로 직접 연결되어 층간의 유기적 소통을 유도한다.

[프로그램의 중첩]
민원실은 시간에 따라 기능이 전환된다. 낮에는 행정 서비스가 운영되지만 저녁이 되면 작은도서관과 결합된 커뮤니티 공간으로 변모한다. 개방형 배치와 가변형 가구를 통해 행정과 문화가 중첩되는 공간을 구현했다.

2층은 공동체 활동이 가장 활발한 층이다. 자치회관의 프로그램실과 생활문화센터의 마루공간은 가변형 유리 벽체를 통해 마주침공간과 유기적으로 연결된다. 닫혀 있을 때는 독립적 공간이지만 문을 열면 하나의 큰 공간으로 확장되어 워크숍, 강연, 공연, 주민 모임 등 다양한 프로그램을 수용한다. 소음이 발생할 수 있는 방음공간은 북동쪽 코너에 배치하여 남쪽 주거지로의 영향을 최소화했다.

지하 1층 보건지소는 도로와 맞닿은 위치에 배치하여 접근성을 확보했다. 주민사랑방은 북카페가 되어 도서관과 연결되고, 도서관의 계단을 활용해 작은 무대로 확장된다. 폴딩도어를 통해 실내와 외부가 하나로 이어지며, 플리마켓이 열리면 작은 광장처럼 기능한다.

[입면의 전략]
입면은 도시 조직과 환경적 맥락에 반응한다. 북·동·서측 상층부는 유리 커튼월을 감싸는 메탈 패브릭으로 구성해 빛을 조절하고 에너지 성능을 향상시킨다. 저층부는 석재와 전벽돌을 적용해 기단부의 안정감을 형성하며, 북측에는 고강도 목재 패널을 사용해 마을과의 친밀한 접점을 만든다.

서측은 개구부를 최소화해 프라이버시를 확보하고, 남측은 수직 벽체 사이로 채광을 유도했다. 이 벽체들은 마을의 도시 조직을 반영하는 리듬을 형성한다. 민원실 계단의 사선은 입구성을 강조하는 매개로 작용한다.`,
    },
    {
        id: "LOG_2403",
        date: "2024.03.10",
        title: "Hwaseong 'Our Flower' Botanical Garden",
        phase: "Competition (2nd Prize)",
        status: "UNREACHABLE",
        size: "1.8GB",
        finalImage: "/projects/LOG_2403/MoneyShot.png",
        images: [
            "/projects/LOG_2403/MoneyShot.png",
            "/projects/LOG_2403/glulam.png",
            "/projects/LOG_2403/cafe.png",
        ],
        location: "179-18, Maegok-ri, Paltan-myeon, Hwaseong-si",
        program: "Cultural Facility (Botanical Garden)",
        siteArea: "45,525.00 m²",
        totalArea: "4,628.34 m²",
        buildingScope: "B1 / 2F",
        structure: "RC + Heavy Timber (GLUELAM)",
        exteriorFinish: "EIFS (Concrete Texture), Wood Louver, Low-E Triple Glazing",
        architects: "LMST Architects",
        description: `Hwaseong 'Our Flower' Botanical Garden Remodeling

[Re-defining the Problem]
The existing visitor center was merely a passageway—dark, low-ceilinged, and with disconnected circulation. Visitors would pass through quickly without staying. We redefined this space as a destination in itself.

[Design Logic]
The original complex separated the visitor center from the greenhouse. We removed the central stair tower and extended the structure westward to create a continuous loop. Exhibition, rest, cafe, and viewing areas are reconstructed as a seamless public ring, generating synergy.

We reinterpreted the traditional Hanok rafter structure. The rafter system, with progressively changing slope and height, transforms static space into dynamic space. Calculating ceiling heights from 2,700mm at the ground to 5,300mm on the second floor allows visitors to experience spatial expansion.

[Program Reconfiguration]
The 1st-floor 'Our Flower Library' includes a seed library and specialized botanical collection. The 'story path' combines indoor planter exhibits with views of the outdoor garden. The 2nd-floor cafe overlooks the western hills and ecological pond. The stepped seating serves as a resting spot and transforms into an event space.

[Structural System]
We adopted a heavy timber structure (GLUELAM). The 3D curved roof components are prefabricated to minimize on-site work. The hierarchy of Girder-Purlin-Rafter supports the 30T structural decking. The wood texture harmonizes naturally with the botanical garden.

--------------------------------------------------

화성시 우리꽃식물원 건축 리모델링

[문제의 재정의]
기존 방문자센터는 거쳐가는 공간이었다. 어두운 실내, 낮은 층고, 비순환적 동선. 방문자들은 눈으로만 보고 빠르게 빠져나갔다. 우리는 이 공간을 머무는 공간으로 재정의했다.

[설계 논리]
기존 건물은 방문자센터와 사계절 온실이 분리되어 있었다. 중앙 계단탑을 철거하고 서측으로 확장하여 순환 가능한 배치를 만들었다. 전시, 휴게, 카페, 관람으로 이어지는 공공영역은 연속된 고리로 재구성되어 시너지를 생성한다.

전통 한옥의 서까래 구조를 현대적으로 재해석했다. 경사도와 높이가 점진적으로 변화하는 연속된 서까래는 정적 공간을 동적 공간으로 전환한다. 1층 2,700mm에서 시작해 2층 5,300mm까지 확장되는 층고는 프로그램 특성에 따라 조정되며, 방문자는 공간감의 변화를 체험한다.

[프로그램 재구성]
1층 우리꽃 도서관은 식물 관련 전문 서적과 종자 도서관을 포함한다. 우리꽃 이야기길은 실내 플랜터 전시와 창밖정원을 동시에 체험하는 경사로 동선이다. 2층 우리꽃 카페는 서측 등고산 전망과 생태연못을 조망한다. 계단식 좌석은 평상시 휴게 공간이며 강연과 이벤트 장소로 전환된다.

[구조 시스템]
중목구조를 채택했다. 3차원 곡면 지붕을 구성하는 부재는 공장 제작으로 현장 작업을 최소화한다. 콘크리트 기초 위 복합기초에 GLUELAM 기둥이 정착되고, 거더-펄린-서까래로 이어지는 위계적 구조가 30T 구조/마감 겸용 판재를 지지한다. 목재의 질감은 식물원과 자연스럽게 조화된다.`,
    },
    {
        id: "LOG_2402",
        date: "2024.02.14",
        title: "Seoul Dongshin Elem. Green Smart School",
        phase: "Competition (2024)",
        status: "RUNTIME_ERROR",
        size: "4.2GB",
        finalImage: "/projects/LOG_2402/04_Final.jpg",
        images: ["/projects/LOG_2402/04_Final.jpg"],
        location: "50, Bomunsa-gil, Seongbuk-gu, Seoul",
        program: "Educational Facility (Elementary School)",
        siteArea: "16,961.90 m\u00B2",
        totalArea: "8,214.25 m\u00B2",
        buildingScope: "B1 / 5F (H: 18m)",
        structure: "RC (Reinforced Concrete), Partial Steel",
        exteriorFinish: "Clay Brick, Exposed Concrete, Low-E Triple Glazing, Aluminum Insulated Frame",
        architects: "LMST Architects",
        archive: [
            {
                timestamp: "2024.06.13 09:00",
                type: "DOCUMENT",
                src: "",
                filename: "20240613_Topo pancake model.3dm",
                label: "Terrain extraction from survey data. Contour lines converted to 3D topology.",
                meta: "Rhino 8 / 45.2MB",
            },
            {
                timestamp: "2024.06.25 14:29",
                type: "MASS_STUDY",
                src: "/projects/LOG_2402/archive/mass_0625_courtyard.jpg",
                filename: "ViewCapture20240625_142912.jpg",
                label: "Interior courtyard study. Stepped section through the bridging lounge.",
                meta: "Rhino ViewCapture / 7.9MB",
            },
            {
                timestamp: "2024.06.25 14:30",
                type: "MASS_STUDY",
                src: "/projects/LOG_2402/archive/mass_0625_birdseye.jpg",
                filename: "ViewCapture20240625_143020.jpg",
                label: "Bird's eye view. Massing on sloped site with retaining wall logic.",
                meta: "Rhino ViewCapture / 3.6MB",
            },
            {
                timestamp: "2024.06.25 14:35",
                type: "MASS_STUDY",
                src: "/projects/LOG_2402/archive/mass_0625_interior.jpg",
                filename: "ViewCapture20240625_143525.jpg",
                label: "Front elevation. Classroom grid and entrance canopy articulation.",
                meta: "Rhino ViewCapture / 3.4MB",
            },
            {
                timestamp: "2024.07.01 11:00",
                type: "SITE_PHOTO",
                src: "/projects/LOG_2402/archive/site_0701_street.jpg",
                filename: "IMG_0482.JPG",
                label: "Approach from Bomunsa-gil. Existing school behind apartment blocks.",
                meta: "iPhone / 5.0MB",
            },
            {
                timestamp: "2024.07.01 11:15",
                type: "SITE_PHOTO",
                src: "/projects/LOG_2402/archive/site_0701_yard.jpg",
                filename: "IMG_0500.JPG",
                label: "Schoolyard stairs and canopy. The slope that defines the section.",
                meta: "iPhone / 4.9MB",
            },
            {
                timestamp: "2024.07.01 11:30",
                type: "SITE_PHOTO",
                src: "/projects/LOG_2402/archive/site_0701_entrance.jpg",
                filename: "IMG_0530.JPG",
                label: "Main entrance with children's mural. The school to be replaced.",
                meta: "iPhone / 12.9MB",
            },
            {
                timestamp: "2024.07.01 11:45",
                type: "SITE_PHOTO",
                src: "/projects/LOG_2402/archive/site_0701_facade.jpg",
                filename: "IMG_0560.JPG",
                label: "South facade and entry signage. Brick + concrete + polycarbonate canopy.",
                meta: "iPhone / 6.4MB",
            },
            {
                timestamp: "2024.07.07 09:00",
                type: "RENDER_WIP",
                src: "/projects/LOG_2402/archive/render_0707_birdseye.jpg",
                filename: "img_01.jpg",
                label: "First render pass. Bird's eye without landscape — raw massing exposed.",
                meta: "Rhino ViewCapture / 20.6MB",
            },
            {
                timestamp: "2024.07.07 14:00",
                type: "RENDER_WIP",
                src: "/projects/LOG_2402/archive/render_0707_aerial.jpg",
                filename: "01.jpg",
                label: "Aerial with partial context. Testing building orientation and shadow.",
                meta: "Rhino ViewCapture / 6.5MB",
            },
            {
                timestamp: "2024.07.08 18:00",
                type: "RENDER_FINAL",
                src: "/projects/LOG_2402/01_Final.jpg",
                filename: "01_Final.jpg",
                label: "Final aerial. Full landscape, sports field, pedestrian bridge complete.",
                meta: "Rhino Display Mode / 16.2MB",
            },
            {
                timestamp: "2024.07.08 22:00",
                type: "RENDER_FINAL",
                src: "/projects/LOG_2402/04_Final.jpg",
                filename: "04_Final.jpg",
                label: "Street-level perspective. The new school meets Bomunsa-gil.",
                meta: "Rhino Display Mode / 8.1MB",
            },
            {
                timestamp: "2024.07.12 23:59",
                type: "DOCUMENT",
                src: "",
                filename: "설계설명서.pdf",
                label: "Final submission document. 16 pages. Competition deadline.",
                meta: "InDesign → PDF / 52MB",
            },
        ],
        description: `SCAPE BRIDGING: Seoul Dongshin Elementary Green Smart School

Today's education extends beyond one-directional information transfer, operating through multidimensional relationships between city, nature, and people. Dongshin Elementary School aims to become a new educational space where these diverse relationships are physically and emotionally connected, communicated, and integrated. Going beyond simple architectural connections, the project proposes a school that more actively bridges environments—Landscape, Cityscape, Eduscape—creating a space where nature, city, community, and diverse learning environments become one.

[Connection]
Through bridging lounges, open libraries, sunken stairs, and performance steps, the interior and exterior of the building are naturally connected, enabling free and flexible movement.

[Communication]
Beyond homeroom classrooms, spaces such as the library, hub-type areas (lower-grade free learning spaces, upper-grade mini book cafes), bridging lounges, and club rooms are flexibly arranged to create an environment where students can communicate and collaborate. Open spaces are placed at circulation nodes where masses intersect, encouraging natural exchange.

[Mediation]
Multi-functional spaces are planned to balance learning, play, and rest, while educators can observe and supervise from close proximity. Lower-grade floor-seated classrooms and teacher research rooms paired with hub-type spaces enable appropriate levels of supervision and care.

[Integration]
The interior and exterior are naturally connected, creating a nature-friendly learning environment through natural lighting, ventilation, and greenery. As a platform strengthening connections with the future local community, the school provides opportunities for students to interact with and participate in the community. Beyond simple curriculum, diverse learning experiences in arts, physical education, and ecology are integrated throughout the building, supporting holistic student development.

--------------------------------------------------

스케이프 브릿징: 서울동신초등학교 그린스마트 미래학교

오늘날의 교육은 일방향의 정보 전달을 넘어 도시와 자연, 그리고 사람과의 다양한 관계를 통해 다차원적으로 이루어진다. 동신초등학교는 이러한 다양한 관계들이 물리적, 정서적으로 연결되고 소통하며 통합되는 새로운 교육공간이 되고자 한다. 단순한 건축적 연결을 넘어 전체적인 환경(Landscape, Cityscape, Eduscape)을 보다 적극적으로 연결하고 그에 다가갈 수 있는 공간 — 자연, 도시, 커뮤니티, 그리고 다양한 학습환경이 하나가 되는 학교를 제안한다.

[연결 CONNECTION]
브릿징 라운지, 개방형 도서관, 선큰 계단, 공연 스텝 등을 통하여 건물 내외부를 자연스럽게 연결하여 자유롭고 유연한 이동이 가능하도록 계획한다.

[소통 COMMUNICATION]
상주 교실뿐 아니라 도서관, 허브형 공간(저학년 자유학습공간, 고학년 미니북카페), 브릿징 라운지, 동아리실 등의 공간을 유연하게 배치하여 학생들이 서로 소통하고 협력할 수 있는 환경을 조성한다. 매스가 교차하는 동선의 결절점에는 오픈 공간을 마련하여 학생들이 자연스럽게 교류하고 소통할 수 있도록 한다.

[매개 MEDIATION]
학습과 놀이, 휴식을 균형 있게 할 수 있는 멀티 기능 공간을 계획하고 교육의 주체가 근거리에서 보호 관찰할 수 있는 환경을 마련한다. 저학년 복층형 좌식 교실과 허브형 공간과 한쌍으로 계획된 교사연구실을 통하여 적정 수준의 감시와 보호가 가능하도록 한다.

[통합 INTEGRATION]
건물 내부와 외부를 자연스럽게 연결하여 자연 채광, 환기, 녹지의 유입을 통해 자연 친화적인 학습 환경을 조성한다. 미래 지역 사회와의 연결을 강화할 수 있는 플랫폼으로서의 학교로서 학생들이 지역 사회와 상호작용하고 참여할 수 있는 기회를 제공한다. 교실에서 이루어지는 단순 교과 과정을 넘어서 예술, 체육, 생태 등 다양한 분야의 학습 경험이 건물 내외부에 통합되어 학생들의 전인적 성장을 지원한다.`,
    },
    {
        id: "LOG_2401",
        date: "2024.01.05",
        title: "Seoul Dongmyung Elem. Green Smart School",
        phase: "Competition (2024)",
        status: "RUNTIME_ERROR",
        size: "3.9GB",
        finalImage: "/projects/LOG_2401/LOG_2401.png",
        images: [
            "/projects/LOG_2401/LOG_2401.png",
        ],
        location: "29, Majang-ro 29-gil, Seongdong-gu, Seoul",
        program: "Educational & Research Facility",
        siteArea: "17,715.10 m²",
        totalArea: "13,418.99 m²",
        buildingScope: "B1 / 3F (H: 13.8m)",
        structure: "RC (Reinforced Concrete)",
        architects: "LMST Architects",
        description: `Seoul Dongmyung Elementary School Green Smart School
        
[Decomposition of Conditions]
The site borders three roads and possesses a 10m elevation difference. Pedestrian access is limited to the main and rear gates. The eastern Majang-ro 29-gil is a one-way street, restricting vehicle access and parking entry. An irregular site, high retaining walls, and disconnected access paths—these are analyzable inputs.

Demolition of the existing building must precede construction, yet classes for all grades must continue. We planned a phased construction strategy involving the installation of 14 modular classrooms. Phase 1 involves moving general classes to modular units; Phase 2 begins the new construction and demolition of the existing building; Phase 3 involves removing modular units and completing the final move.

[Logic of Mass]
The first-floor mass is pushed inward. This expands the pedestrian area, connecting the main entrance, the Shared Garden, and the Kindergarten entrance via a corridor. By removing high retaining walls and fences, the school opens up as a pedestrian path for the village.

All classrooms are oriented south. The atrium and courtyard—two open spaces—draw light into the building. The southern mass steps down sequentially so that front classrooms do not block light for those behind. Administrative spaces and special classrooms are arranged linearly north-to-south, linked with general classrooms.

Corridors expand both planimetrically and sectionally. Rather than a fixed width, the corridor widens, narrows, rises, and lowers. Halls and corridor spaces, distinct for each grade, accommodate individual study, small group activities, rest, and play.

[Reconfiguration of Program]
Unit classrooms are no longer fixed spaces. Multi-purpose rooms adjacent to special classrooms (Art, Music, Science, Reading, AV) expand via movable walls to become independent or integrated convergence education spaces. The 2nd-floor multi-purpose classroom is located near the Art Room, accommodating both classes and exhibitions. The 3rd-floor multi-purpose room serves as a Drama/Musical room, utilizing movable walls and retractable seating for simultaneous performance and practice.

The library and AV room are planned in conjunction. Opening the revolving door wall turns the AV room into stepped reading seating for the library. The kindergarten cafeteria, multi-purpose room, and playroom can be integrated via moving walls (soundproof and fire-rated).

The atrium is a venue for school-wide performances and lectures. Automated irrigation planting absorbs noise and purifies the air. Stepped seating connecting from the 1st to the 3rd floor serves as both a reading space and an auditorium.

[Continuity of External Spaces]
Corridors and external spaces expanded around the two open areas are extensions of the classrooms. The Shared Garden is an outdoor exhibition, play, and learning space opening to the main gate courtyard. It connects directly to the 1st-floor Teacher's Center for safety. The 'Dream-Dam' Terrace Playground is an outdoor space with gentle mounds, directly connected to classrooms. The 'Dream-Dam' Sky Playground is a play space on the 3rd-floor rooftop, meeting the sky.

South-facing balconies of classrooms serve as extended outdoor learning areas. They open south to admit high-quality light and connect directly to the playground, linking learning and play. They also function as safe evacuation routes in emergencies.

Rose Garden, Lawn Yard, Performance Yard, School Forest, Village Forest, Village Hill. Landscaping covers 31.91% of the school site. These spaces are places for play as well as nature observation and ecological learning.

--------------------------------------------------

서울동명초등학교 그린스마트 미래학교

[조건의 분해]
대지는 세 도로와 접하며 10m의 고저차를 가진다. 보행 접근은 정문과 후문 두 지점으로 제한된다. 동측 마장로29길은 일방통행로로 차량의 통행과 주차 진출입이 제한적이다. 이형의 대지, 높은 옹벽, 단절된 접근로. 이것들은 분석 가능한 입력값이다.

기존 교사동 철거가 선행되어야 하고, 공사 중에도 전 학년의 수업이 지속되어야 한다. 모듈러 교실 14개를 설치하고, 단계적 공사를 계획했다. 1단계에서 일반교실을 모듈러로 이사하고, 2단계에서 개축동 공사를 시작하며 일반교사동을 철거한다. 3단계에서 모듈러를 철거하고 최종 이사를 완료한다.

[매스의 논리]
1층 매스를 안으로 밀어 넣었다. 보행 영역이 확장되고 회랑을 통해 주출입구, 모두의정원, 유치원 출입구가 연결된다. 높은 옹벽과 담장을 제거하여 학교는 마을의 보행길로 열린다.

모든 교실은 남향으로 배치된다. 아트리움과 중정, 두 개의 오픈 공간이 교사동 내부로 빛을 끌어들인다. 남측 매스를 차례로 낮춰 앞 교실이 뒤 교실의 채광을 막지 않도록 했다. 관리행정공간과 특수교실은 남북 방향으로 선형 배치되며 일반교실과 연계된다.

복도는 평면적으로, 단면적으로 확장된다. 일정한 폭의 복도가 아니라 넓어지고 좁아지며, 높아지고 낮아지는 공간이다. 학년별로 다른 홀과 복도 공간은 개인 학습, 소그룹 활동, 휴식, 놀이를 수용한다.

[프로그램의 재구성]
단위교실은 더 이상 고정된 공간이 아니다. 특별교실(미술, 음악, 과학, 독서, 시청각실)과 인접한 다목적실은 가변형 벽체를 통해 독립적으로 사용되거나 통합된 융복합 교육공간으로 확장된다. 2층 다목적교실은 미술실과 가까운 곳에 위치하며 수업과 전시를 모두 수용한다. 3층 다목적교실은 드라마실, 뮤지컬실로 사용되며 가변형 벽체와 수납식 좌석을 활용해 공연과 연습을 동시에 수용한다.

도서관과 시청각실은 연계 계획되었다. 리볼딩 도어로 무대 쪽 벽체를 열면 시청각실은 도서관의 계단식 열람석이 된다. 유치원 식당, 다목적실, 유희실은 무빙월(차음, 방화가 가능한 가변형 벽체)을 통해 통합될 수 있다.

아트리움은 전교생이 모이는 공연 및 강연 장소다. 자동 관수가 가능한 식재는 소음을 흡수하고 공기를 정화한다. 1층에서 3층까지 이어지는 계단식 좌석은 독서 공간이자 관람석이 된다.

[외부공간의 연속]
두 오픈 영역을 중심으로 확장된 복도와 외부공간은 교실의 연장이다. 모두의 정원은 정문마당으로 열린 외부 전시, 놀이, 학습공간이다. 1층 교무센터에서 직접 연결되어 안전을 고려했다. 꿈담 테라스 놀이터는 완만한 마운딩이 있는 외부공간으로 교실과 직접 연결된다. 꿈담 하늘놀이터는 3층 옥상에 배치된 하늘과 맞닿은 놀이공간이다.

교실 남측의 발코니는 외부 학습 확장 영역이다. 남향으로 열려 양질의 빛을 유입하며 꿈담놀이터로 직접 연결되어 학습과 놀이를 연계한다. 비상시 안전한 피난통로로도 활용된다.

장미정원, 잔디마당, 공연마당, 학교숲, 마을숲, 마을언덕. 조경면적이 학교 부지의 31.91%를 차지한다. 이 공간들은 놀이의 장소이자 자연관찰, 생태학습의 공간이다.`,
    },
];
