const PRICES = [
  {
    price: "$29",
    title: "Basic",
    description: "For hobbyist trying out print on demand.",
    credit: "150 credits*",
    storage: "50 GB Max. Storage",
    popular: false,
    basic: true
  },
  {
    price: "$49",
    title: "Starter",
    description: "For sellers validating their workflow.",
    credit: "500 credits*",
    storage: "200 GB Max. Storage",
    popular: false,
    basic: false
  },
  {
    price: "$169",
    title: "Builder",
    description: "For sellers actively scaling their catalog.",
    credit: "2,500 credits*",
    storage: "1 TB Max. Storage",
    popular: true,
    basic: false
  },
  {
    price: "$399",
    title: "Pro",
    description: "For high-volume and complex workflows.",
    credit: "8,000 credits*",
    storage: "2 TB Max. Storage",
    popular: false,
    basic: false
  },
];

function build(entry){
  const {price, title, description, credit, popular, basic, storage} = entry;

  const wrapper = document.querySelector("#pricingTable");
  const section = document.createElement("section");

  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const tokenSpan = document.createElement("span");
  const tokenDiv = document.createElement("div");
  const storageSpan = document.createElement("span");
  const storageDiv = document.createElement("div");
  const a = document.createElement("a");

  h3.innerText = title;
  p1.innerHTML = description;
  p2.innerHTML = `${price} <span class="text-2xl">/ mth</span>`;
  tokenSpan.innerHTML = credit;
  storageSpan.innerHTML = storage;
  a.innerHTML = "Start free trial";
  a.href = "https://app.odarun.com?auth=signUp";

  const bgColor = popular ? ["bg-blue-600"] :  ["border", "border-gray-600"]
  const ctaBgColor = popular ? ["bg-white", "text-black", "hover:bg-blue-50"] : ["text-white", "ring-1"];
  const textColor = popular ? "text-white" : "text-slate-400";

  tokenDiv.innerHTML = `<svg aria-hidden="true" class="h-6 w-6 flex-none fill-current stroke-current ${popular ? 'text-white' : 'text-slate-400'}"><path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" stroke-width="0"></path><circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle></svg>`;

  storageDiv.innerHTML = `<svg aria-hidden="true" class="h-6 w-6 flex-none fill-current stroke-current ${popular ? 'text-white' : 'text-slate-400'}"><path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" stroke-width="0"></path><circle cx="12" cy="12" r="8.25" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle></svg>`;

  section.classList.add("flex", "flex-col", "rounded-3xl", "px-6", "sm:px-8", "py-8", ...bgColor);
  h3.classList.add("mt-5", "font-semibold", "text-xl", "text-white");
  p1.classList.add("mt-2", "text-base", textColor);
  p2.classList.add("order-first", "font-display", "text-5xl", "font-light", "tracking-tight", "text-white");

  tokenSpan.classList.add("ml-4");
  tokenDiv.classList.add("mt-10", "flex", "items-center", "text-sm", "text-slate-200");
  storageSpan.classList.add("ml-4");
  storageDiv.classList.add("mt-4", "flex", "items-center", "text-sm", "text-slate-200");

  a.classList.add("group", "inline-flex", "items-center", "justify-center", "rounded-full", "py-2", "px-4", "focus:outline-none", "ring-slate-500", "hover:ring-slate-400", "active:ring-slate-700", "active:text-slate-400", "focus-visible:outline-white", "mt-8", ...ctaBgColor);

  tokenDiv.appendChild(tokenSpan);
  storageDiv.appendChild(storageSpan);
  section.appendChild(h3);
  section.appendChild(p1);
  section.appendChild(p2);
  section.appendChild(a);
  section.appendChild(tokenDiv);
  section.appendChild(storageDiv);
  wrapper.appendChild(section);
}

function price(data){
  data.map(entry => build(entry));
}

price(PRICES);
