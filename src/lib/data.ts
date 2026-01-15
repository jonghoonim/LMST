export type ProjectLog = {
    id: string;
    date: string;
    title: string;
    phase: string;
    status: "COMPILED" | "RUNTIME_ERROR" | "WARNING" | "NULL";
    size: string;
};

export const INITIAL_LOGS: ProjectLog[] = [
    {
        id: "LOG_001",
        date: "2024.12.10",
        title: "Hwaseong Science Museum",
        phase: "Competition",
        status: "RUNTIME_ERROR",
        size: "1.2GB",
    },
    {
        id: "LOG_002",
        date: "2025.01.15",
        title: "Seoul Art Center Annex",
        phase: "Design Dev",
        status: "COMPILED",
        size: "450MB",
    },
    {
        id: "LOG_003",
        date: "2025.02.01",
        title: "Busan Opera House",
        phase: "Construction",
        status: "WARNING",
        size: "3.2TB",
    },
    {
        id: "LOG_004",
        date: "2025.03.20",
        title: "Jeju Private Villa",
        phase: "Schematic",
        status: "NULL",
        size: "0KB",
    },
    {
        id: "LOG_005",
        date: "2025.04.10",
        title: "Gangnam Office Tower",
        phase: "Feasibility",
        status: "COMPILED",
        size: "80MB",
    },
];
