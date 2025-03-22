import { createContext, useContext, useState } from "react";

const StatsContext = createContext();

export function StatsProvider({ children }) {
    const [verifiedSkills, setVerifiedSkills] = useState(0);
    const [professionalProjects, setProfessionalProjects] = useState(0);
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [dsaProblemsSolved, setDsaProblemsSolved] = useState(0);

    return (
        <StatsContext.Provider
            value={{
                verifiedSkills,
                setVerifiedSkills,
                professionalProjects,
                setProfessionalProjects,
                yearsOfExperience,
                setYearsOfExperience,
                dsaProblemsSolved,
                setDsaProblemsSolved,
            }}
        >
            {children}
        </StatsContext.Provider>
    );
}

export function useStats() {
    return useContext(StatsContext);
}