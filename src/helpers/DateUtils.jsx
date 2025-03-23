export function calculateTotalExperience(experiences) {
    let totalExperience = 0;

    experiences.forEach((exp) => {
        const startDate = exp.startDate;
        const endDate = exp.endDate;
        const durationInYears = (endDate - startDate) / (1000 * 60 * 60 * 24 * 365); // Convert milliseconds to years
        totalExperience += durationInYears;
    });

    totalExperience = Math.round(totalExperience * 10) / 10; // Round to 1 decimal place

    return totalExperience > 3 ? `${Math.floor(totalExperience)}+` : totalExperience.toFixed(1);
}