/**
 * Page-wide behaviour: drop the `no-js` guard class and keep the copyright
 * year in the footer current.
 */
export function initSite() {
    document.documentElement.classList.remove("no-js");

    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
}