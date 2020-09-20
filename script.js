const btn = document.getElementById("btn");
const tooltip = document.getElementById("tooltip");
btn.addEventListener("click", () => {
  createTooltip();
});
function createTooltip() {
  tooltip.style.visibility === "hidden"
    ? (tooltip.style.visibility = "visible")
    : (tooltip.style.visibility = "hidden");
}
