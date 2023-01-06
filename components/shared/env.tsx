import { NitroCardContent, NitroPlan, HomeFlexContent } from "./Types";

// home page
export const HOME_FLEX_CONTENTS: HomeFlexContent[] = [
  {
    img: "/images/home_content1.svg",
    title: "Create an invite-only place where you belong",
    text: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
  },
  {
    img: "/images/home_content2.svg",
    title: "Where hanging out is easy",
    text: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
  },
  {
    img: "/images/home_content3.svg",
    title: "From few to a fandom",
    text: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
  },
];

// nitro page
export const NITRO_GRID_CONTENTS: NitroCardContent[] = [
  {
    textContent: "From clips to pics, share away with bigger file uploads",
    imgSrc: "card_content1.svg",
  },
  {
    textContent: "Stream apps and games in sweet, sweet HD",
    imgSrc: "card_content2.svg",
  },
  {
    textContent: "Hype and meme with custom emoji anywhere",
    imgSrc: "card_content3.svg",
  },
  {
    textContent: "Unlock perks for your communities with 2 Server Boosts",
    imgSrc: "card_content4.svg",
  },
];

export const NITRO_PLANS: NitroPlan[] = [
  {
    textContent: "Custom emoji anywhere and make them animated",
    basic: "mark.svg",
    special: "mark.svg",
  },
  {
    textContent: "Custom stickers anywhere plus 300+ Nitro exclusives",
    basic: "mark.svg",
    special: "mark.svg",
  },
  {
    textContent: "Bigger file sharing",
    basic: "50MB",
    special: "500MB",
  },
  {
    textContent: "Access to more Activities",
    basic: "cross.svg",
    special: "mark.svg",
  },
  {
    textContent: "HD streaming",
    basic: "cross.svg",
    special: "Up to 4K and 60fps",
  },
  {
    textContent: "2 Free Boosts + 30% off extra Boosts",
    basic: "cross.svg",
    special: "mark.svg",
  },
  {
    textContent: "Animated avatar, banner, profile theme, and custom tag",
    basic: "cross.svg",
    special: "mark.svg",
  },
  {
    textContent: "Custom server profiles",
    basic: "cross.svg",
    special: "mark.svg",
  },
  {
    textContent: "Nitro badge on your profile",
    basic: "mark.svg",
    special: "mark.svg",
  },
  {
    textContent: "Custom video backgrounds",
    basic: "mark.svg",
    special: "mark.svg",
  },
  {
    textContent: "Join up to 200 servers",
    basic: "cross.svg",
    special: "mark.svg",
  },
  {
    textContent: "Longer messages up to 4,000 characters",
    basic: "cross.svg",
    special: "mark.svg",
  },
];

export const FAQS = [
  {
    tab: "General",
    faqs: [
      {
        question: "What's Nitro?",
        answer:
          "Nitro is a subscription service that unlocks features and perks across Discord, giving you more ways to have fun and express yourself.",
      },
      {
        question: "How does Nitro work?",
        answer:
          "When you subscribe to Nitro, you get access to features that were previously locked for you - like using custom emoji anywhere, uploading bigger files, setting a custom video background, and more. When the subscription ends, you’ll lose access to the perks. ",
      },
      {
        question: "What's the difference between Nitro and Nitro Basic?",
        answer:
          "Nitro is our most popular plan that unlocks access to all available Nitro perks, and Nitro Basic includes a selection of the most-loved Nitro perks that help you better express yourself. See the comparison chart above for a full breakdown!  ",
      },
      {
        question: "How much does Nitro cost?",
        answer:
          "Cost varies depending on your country and plan. You can check Nitro prices under User Settings > Nitro in either the desktop or mobile apps.",
      },
      {
        question: "Where can I buy?",
        answer:
          "You can purchase Nitro by visiting the Nitro tab in User Settings, or in the Nitro page under Home on desktop. On mobile, visit User Settings by tapping your user icon in the bottom bar, then select Get Nitro.",
      },
    ],
  },
  {
    tab: "Payments",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept a variety of payment methods, which you can learn more info on here!",
      },
      {
        question: "Do you offer Nitro and Nitro Basic in localized pricing?",
        answer:
          "We are constantly working to expand the availability of localized pricing for Nitro and Nitro Basic. Check this article for information on where localized pricing is currently available.",
      },
    ],
  },
  {
    tab: "Gifting and Promotions",
    faqs: [
      {
        question: "Are Nitro gifts real?",
        answer:
          "Yes! You can purchase a Nitro gift through the Nitro page on desktop or the Nitro Gifting tab within mobile under User Settings. Additionally, you can send a quick gift in a channel by selecting the gift icon on desktop or mobile. If someone sends you a gift, you can see what it looks like here. ",
      },
      {
        question: "Where to redeem Nitro codes?",
        answer:
          "You can redeem your Nitro code on the desktop and web apps through the Gift Inventory page in User Settings. ",
      },
      {
        question: "Can I get free Nitro from a bot or a giveaway?",
        answer:
          "The only official way to receive Nitro is through a gift sent to you in chat, or by receiving a code that can be redeemed under Gift Inventory in User Settings on the desktop and web apps. We strongly encourage not clicking on any links from people you don’t know well. For more tips on staying safe on Discord, visit our Safety page.",
      },
      {
        question: "Does Discord offer Nitro Promotions?",
        answer:
          "We are always working on ways to give you more with Nitro! Keep an eye out in the app, on our Twitter , Instagram, or blog to see when new promotions go live. :)",
      },
    ],
  },
  {
    tab: "Other",
    faqs: [
      {
        question: "My Nitro subscription comes with Boosts. What are those?",
        answer:
          "Server Boosts are a way to show support for your favorite communities. Each Boost that you give to a server helps collectively unlock perks for everyone in the server to enjoy. Learn more about Server Boosting here! ",
      },
      {
        question: "Are Boosts permanent?",
        answer:
          "A Nitro subscription only comes with 2 Boosts that you can share to any server you belong to. The Boosts do not stack over time, and they are not permanent. You’ll get to keep the Boosts for as long as your Nitro subscription is active.",
      },
      {
        question: "Why is my Nitro not working?",
        answer:
          "If you're having any trouble with your subscription, or have any questions, you can reach out to our team and we’ll be happy to help!",
      },
    ],
  },
];
