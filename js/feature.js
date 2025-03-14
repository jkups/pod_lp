function swapFeature(el, target){
  const classes = ["lg:bg-white/10", "lg:ring-1", "lg:ring-inset"]
  const outerWrapper = el.parentElement.parentElement.parentElement
  const innerWrapper = el.parentElement.parentElement

  const featureImgEls = document.querySelectorAll(".featureImg");
  const featureButtonEls = document.querySelectorAll(".featureButton");
  const targetEl = document.querySelector(`#${target}`);

  [...outerWrapper.children].map(el => {
    el.classList.replace("bg-white", "bg-white/10");
    el.classList.remove(...classes);
  });
  [...featureImgEls].map(el => el.style.display = "none");
  [...featureButtonEls].map(el => el.classList.replace("text-blue-600", "text-blue-100"))

  el.classList.replace("text-blue-100", "text-blue-600");
  innerWrapper.classList.add(...classes);
  innerWrapper.classList.replace("bg-white/10", "bg-white");
  targetEl.style.display = "block";
}
