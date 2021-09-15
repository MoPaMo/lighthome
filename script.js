window.__forceSmoothScrollPolyfill__ = true;
document
  .getElementById("header-scrolldown")
  .addEventListener("click", () => {
    document
      .querySelector("#cardparent")
      .scrollIntoView({ behavior: "smooth" });
    return false;
  });
let context, usual;
const toggles = ["mirror", "f"];
for (t in toggles) {
  t = toggles[t];
  console.log(t);

  document
    .getElementById(t + "-extend")
    .addEventListener("click", (e) => {
      console.log(e);
      context = document.getElementById(t + "-context");
      usual = document.getElementById(t + "-usual");
      usual.classList.toggle("opacity-0");
      usual.classList.toggle("opacity-100");
      usual.classList.toggle("top-0");
      usual.classList.toggle("inset-y-32");

      context.classList.toggle("opacity-100");
      context.classList.toggle("opacity-0");
      context.classList.toggle("top-56");
      context.classList.toggle("top-0");
    });
}
