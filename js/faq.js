const FAQS = {
  colOne: [
    {
      question: "Do I need to install anything to use the app",
      answer: "No. Our platform is 100% web based, so there is nothing to install to start using it."
    },
    {
      question: "Can I trial the app before subscribing",
      answer: "Yes. We understand that you need to make an informed decision, and want to make that easy as much as possible. So you can trial the app for a period of 7 days before deciding."
    },
    {
      question: "How do I pay and do you store my payment details",
      answer: "You can pay with your credit or debit card. And we do not store your payment details. All payment attempt are processed securely through Stripe."
    },
    {
      question: "What happens if my subscription expires",
      answer: "We will notify you via Stripe by email 3 days before your subscription expires. On expiration Stripe will attempt to charge your card and if successful, your subscription will be renewed. Note that you can change your card details in your account at anytime."
    },
    {
      question: "Do my amazon orders automatically flow into the app",
      answer: "Yes. We continually monitor your Amazon account for any new orders and flow that into your account. Note that some orders might take a few minutes before reflecting on the web app."
    },
    {
      question: "Do I get notified when an order is fulfilled",
      answer: "Yes. We provide in-app status updates as your orders are processed and fulfilled by your print partner."
    },
  ],
  colTwo: [
    {
      question: "Does the app provide a list of products / variants supported by a print partner (e.g. templates from printful)",
      answer: "Yes. We simplified the process of adding a product and have provided access to the products/variants available from a print partner. While we may not support all product category, we support the popular ones and continue to add more."
    },
    {
      question: "How secure are my designs on the app",
      answer: "We securely store them on a cloud storage that is accessible ONLY through your account. Note however, that we share a secure and temporary link to your designs with your print partner ONLY when you send across an order."
    },
    {
      question: "Do I need to provide my own mockups",
      answer: "You don’t have to. We automatically generate mockups of your design for each product you select and store that. You can however elect to upload your own mockups."
    },
    {
      question: "What happens when I publish a product",
      answer: "Your product is processed and formatted into a form acceptable by Amazon. We will then attempt to list your product in your selected store. This process can take up to 24 hours, but you don’t need to wait around as we provide status updates in the app as each product is successfully listed."
    },
    {
      question: "Do you comply with amazon PII rules",
      answer: "Yes. We currently	do not flow PII details into your account from your Amazon orders. You will have to manually update your order’s shipping information before sending it to print partners. But not to worry we’ve made this straightforward to do."
    },
  ],
  colThree: [
    {
      question: "Is there a limit to how many products or orders I can add to my account",
      answer: "There is no limit to how many products or orders you can add to your account. You will however only be able to add products or orders if you have an active subscription."
    },
    {
      question: "Can I connect my account to multiple amazon stores across different regions",
      answer: "Yes, you can connect your account to multiple stores across different regions. We however currently ONLY support the following region and stores a) North America - USA, Canada, and Mexico, b) Europe - coming soon, and c) Asia Pacific - coming soon"
    },
    {
      question: "What are tokens",
      answer: "Tokens represent the number of times you can perform certain actions in your account. A single action equals 1 token, unless otherwise stated. Not all actions are counted towards your token use. The actions that count towards your token use include a) publishing a product to a store, and b) Sending an order to a print partner. For example, if you publish 10 products to Amazon across 3 different stores, your token use will be 10 times 3 = 30 tokens. So 30 tokens will be deducted from your remaining tokens. You will not be able to execute these actions if you run out of tokens. But if you do and your subscription is still active, you can buy additional tokens. Note however that unused tokens do not carry over."
    },
  ]
}

function build(el, question, answer){
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.innerHTML = question
  p.innerHTML = answer;

  h3.classList.add("font-display", "text-lg", "leading-7", "text-slate-900");
  p.classList.add("mt-4", "text-sm", "text-slate-700");

  li.appendChild(h3).appendChild(p);
  el.appendChild(li);
}

function faq(data){
  const {colOne, colTwo, colThree} = data;
  const faqColOneWrapper = document.querySelector("#faqColOneWrapper");
  const faqColTwoWrapper = document.querySelector("#faqColTwoWrapper");
  const faqColThreeWrapper = document.querySelector("#faqColThreeWrapper");

  colOne.map(({question, answer}) => build(faqColOneWrapper, question, answer));
  colTwo.map(({question, answer}) => build(faqColTwoWrapper, question, answer));
  colThree.map(({question, answer}) => build(faqColThreeWrapper, question, answer));
}

faq(FAQS)
