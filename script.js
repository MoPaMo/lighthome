window.__forceSmoothScrollPolyfill__ = true;
document.getElementById("header-scrolldown").addEventListener("click", () => {
  document.querySelector("#cardparent").scrollIntoView({ behavior: "smooth" });
  return false;
});

let els = document.querySelectorAll(".icon");
els.forEach((el) => {
  //el =els[el];
  console.log(el);
  el.addEventListener("click", () => {
    document
      .querySelector("#" + el.getAttribute("data-href"))
      .scrollIntoView({ behavior: "smooth" });
    return false;
  });
});
const setListener = (t) => {
  document.getElementById(t + "-extend").addEventListener("click", (e) => {
    context = document.getElementById(t + "-context");
    usual = document.getElementById(t + "-usual");
    console.log(usual);
    usual.classList.toggle("opacity-0");
    usual.classList.toggle("opacity-100");
    usual.classList.toggle("top-0");
    usual.classList.toggle("inset-y-32");

    context.classList.toggle("opacity-100");
    context.classList.toggle("opacity-0");
    context.classList.toggle("mt-56");
    context.classList.toggle("mt-10");
  });
};
let context, usual;
const toggles = ["mirror","f"];
for (t in toggles) {
  t = toggles[t];
  setListener(t);
}
