/* ************************     Automatic date management at the bottom of the page
 ***********************  */
const footerYear = document.querySelector('#footer-year');

footerYear.innerHTML = new Date().getFullYear();