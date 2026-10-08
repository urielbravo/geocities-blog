/** Fake hit counter, backed by localStorage so it survives reloads. */
const STORAGE_KEY = "retro-hits";
const STARTING_HITS = 1337;

export function initVisitorCounter() {
    const el = document.getElementById("visitor-counter");
    if (!el) return;

    let count = STARTING_HITS;
    try {
        count = parseInt(localStorage.getItem(STORAGE_KEY) || `${STARTING_HITS}`, 10) + 1;
        localStorage.setItem(STORAGE_KEY, String(count));
    } catch {
        /* storage unavailable — keep the default count */
    }

    el.textContent = String(count).padStart(6, "0");
}