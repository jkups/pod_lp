function swapFeature(el, target){
  const classes = ["xl:bg-white/10", "xl:ring-1", "xl:ring-inset"]
  const outerWrapper = el.parentElement.parentElement.parentElement
  const innerWrapper = el.parentElement.parentElement

  const featureImgEls = document.querySelectorAll(".featureImg");
  const featureImgElsText = document.querySelectorAll('[id*="-text"]');
  const featureButtonEls = document.querySelectorAll(".featureButton");
  const targetEl = document.querySelector(`#${target}`);
  const targetElText = document.querySelector(`#${target}-text`);

  [...outerWrapper.children].map(el => {
    el.classList.replace("bg-white", "bg-white/10");
    el.classList.remove(...classes);
  });
  [...featureImgEls].map(el => el.style.display = "none");
  [...featureImgElsText].map(el => {
    el.classList.replace("xl:hidden", "hidden")
    el.classList.remove("block")
});
  [...featureButtonEls].map(el => {
    el.classList.replace("text-blue-600", "text-blue-100")
    const hidden = el.querySelector("div").classList.contains("hidden")
    if (!hidden){
      el.querySelector("div").classList.add("hidden")
    }
  })

  el.classList.replace("text-blue-100", "text-blue-600");
  el.querySelector("div").classList.remove("hidden")
  innerWrapper.classList.add(...classes);
  innerWrapper.classList.replace("bg-white/10", "bg-white");
  innerWrapper.classList.replace("bg-white/10", "bg-white");
  targetEl.style.display = "block";
  targetElText.classList.add("block", "xl:hidden")
  targetElText.classList.remove("hidden")
}
