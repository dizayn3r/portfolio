/**
 * Calculates the difference between two dates and returns a human-readable string.
 * @param {Date|string} startDate
 * @param {Date|string} endDate
 * @returns {string} e.g. "2 yrs 3 mos"
 */
export function getDateDiff(startDate, endDate = new Date()) {
    const start = new Date(startDate);
    const end   = new Date(endDate);

    let years  = end.getFullYear() - start.getFullYear();
    let months = end.getMonth()    - start.getMonth();

    if (months < 0) { years--; months += 12; }

    const parts = [];
    if (years  > 0) parts.push(`${years} yr${years  > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);

    return parts.join(" ") || "< 1 mo";
}

/**
 * Formats a date to a readable string.
 * @param {Date|string} date
 * @returns {string} e.g. "Jan 2025"
 */
export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
