import { createContext, useContext, useState } from "react";

const StatsContext = createContext();

export function StatsProvider({ children }) {
    const [verifiedSkills,       setVerifiedSkills]       = useState(0);
    const [professionalProjects, setProfessionalProjects] = useState(0);

    return (
        <StatsContext.Provider
            value={{ verifiedSkills, setVerifiedSkills, professionalProjects, setProfessionalProjects }}
        >
            {children}
        </StatsContext.Provider>
    );
}

export function useStats() {
    return useContext(StatsContext);
}
