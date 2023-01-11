import {
  NitroCardContent,
  NitroPlan,
  HomeFlexContent,
  SafetyContent,
} from "./Types";

// navigation
export const NAV_ITEMS = [
  {
    text: "Download",
    link: "/download",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Nitro",
    link: "/nitro",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Discover",
    link: "/servers",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Safety",
    link: "/safetycenter",
    subNav: true,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Mod Academy",
    link: "",
    subNav: true,
    smallNav: true,
    largeNav: false,
  },
  {
    text: "Support",
    link: "/support",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Blog",
    link: "/blog",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
  {
    text: "Careers",
    link: "/careers",
    subNav: false,
    smallNav: true,
    largeNav: true,
  },
];

export const SAFETY_SUBDATA = [
  {
    title: "Safety Center",
    liText: [
      {
        text: "Overview",
        link: "",
      },
    ],
  },
  {
    title: "Controlling Your Experience",
    liText: [
      {
        text: "Four steps to a super safe server",
        link: "",
      },
      {
        text: "Role of administrators and moderators on Discord",
        link: "",
      },
      {
        text: "Reporting problems to Discord",
        link: "",
      },
    ],
  },
];

export const MODERATOR_ACAMEDY_DATA = [
  {
    title: "Moderator Academy",
    liText: [
      {
        text: "Overview",
        link: "",
      },
    ],
  },
  {
    title: "Basics",
    liText: [
      {
        text: "100: An Intro to the DMA",
        link: "",
      },
      {
        text: "103: Basic Channel Setup",
        link: "",
      },
      {
        text: "104: How to Report Content to Discord",
        link: "",
      },
    ],
  },
];

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

export const BASIC_CARD_CONTENTS: NitroCardContent[] = [
  {
    imgSrc: "up.svg",
    textContent: "50MB uploads",
  },
  {
    imgSrc: "smile.svg",
    textContent: "Custom emoji anywhere",
  },
  {
    imgSrc: "nitro_vector.svg",
    textContent: "Special Nitro badge on your profile",
  },
];
export const SPECIAL_CARD_CONTENTS: NitroCardContent[] = [
  {
    imgSrc: "up.svg",
    textContent: "500MB uploads",
  },
  {
    imgSrc: "smile.svg",
    textContent: "Custom emoji anywhere",
  },
  {
    imgSrc: "stream.svg",
    textContent: "HD video streaming",
  },
  {
    imgSrc: "rocket.svg",
    textContent: "Access to Activities",
  },
  {
    imgSrc: "server.svg",
    textContent: "2 Server Boosts",
  },
  {
    imgSrc: "profile_card.svg",
    textContent: "Custom profiles and more!",
  },
];

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

// safetycenter page
export const HERO_CARD_CONTENTS = [
  {
    title: "What is Discord?",
    text: "Discord is a voice, video, and text chat app that's used by tens of millions of people ages 13+ to talk and hang out with their communities and friends.",
  },
  {
    title: "Discord's commitment to a safe and trusted experience",
    text: "We work hard to ensure everyone on Discord is able to have meaningful conversations and spend time with their communities in a safe, positive, and inclusive manner.",
  },
  {
    title: "Reporting problems to Discord",
    text: "If you encounter a violation of our Terms of Service or Community Guidelines, we ask that you report this behavior to us.",
  },
];

export const SAFETY_CONTENTS: SafetyContent[] = [
  {
    title: "Safety",
    image: "safety_card1.png",
    bodyContents: [
      {
        text: "Learn how to stay safe on Discord, and about the tools and resources available to teens, parents, and law enforcement.",
      },
      {
        text: "Learn about the resources available to teens and parents to help stay safe on Discord.",
      },
    ],
    subCards: [
      {
        image: "safety_card1_sub1.png",
        title: "Parents & Educators",
        catchText: "Helping your teen stay safe on Discord",
      },
      {
        image: "safety_card1_sub2.png",
        title: "Controlling Your Experience",
        catchText: "Tips against spam and hacking",
      },
      {
        image: "safety_card1_sub3.png",
        title: "Controlling Your Experience",
        catchText: "Four steps to a super safe server",
      },
      {
        image: "safety_card1_sub4.png",
        title: "Controlling Your Experience",
        catchText: "Four steps to a super safe account",
      },
    ],
  },
  {
    title: "Moderation",
    image: "safety_card2.png",
    bodyContents: [
      {
        text: "A comprehensive resource to learn about moderation, community management, and more.",
      },
      {
        text: "An ever-growing resource for moderators of all skill levels to learn how to sharpen their abilities and foster great communities.",
      },
    ],
    subCards: [
      {
        image: "safety_card2_sub1.png",
        title: "Basics",
        catchText: "104:How To Report Content To Discord",
      },
      {
        image: "safety_card2_sub2.png",
        title: "Setup and Function",
        catchText: "206: Best Practices for Reporting Tools",
      },
      {
        image: "safety_card2_sub3.png",
        title: "Advanced Community Management",
        catchText: "314: Training and Onboarding New Moderators",
      },
      {
        image: "safety_card2_sub4.png",
        title: "Moderation Seminars",
        catchText:
          "442: Using Insights to Improve Community Growth and Engagement",
      },
    ],
  },
];

// servers page

export const SERVERS_CONTENT_NAV_ITEMS = [
  {
    navLink: "",
    image: "compass.png",
    text: "All",
    count: "15338",
  },
  {
    navLink: "gaming",
    image: "game.png",
    text: "Gaming",
    count: "11376",
  },
  {
    navLink: "entertainment",
    image: "tv.png",
    text: "Entertainment",
    count: "6416",
  },
  {
    navLink: "education",
    image: "education.png",
    text: "Education",
    count: "1278",
  },
  {
    navLink: "science",
    image: "science.png",
    text: "Science & Tech",
    count: "1256",
  },
  {
    navLink: "music",
    image: "music.png",
    text: "Music",
    count: "1150",
  },
];

export const SERVERS_NAVITEM_CONTENTS = [
  {
    imgLg: "servers_content1.jpg",
    imgSm: "servers_content1_sm.jpg",
    online: "175236",
    totalMembers: "1000000",
    title: "Blox Fruits",
    bodyText:
      " The official community for the popular Roblox game known as Blox Fruits. The official community for the popular Roblox game known as Blox Fruits.",
  },
  {
    imgLg: "servers_content2.jpg",
    imgSm: "servers_content2_sm.jpg",
    online: "175236",
    totalMembers: "1000000",
    title: "Blox Fruits",
    bodyText:
      " The official community for the popular Roblox game known as Blox Fruits.",
  },
  {
    imgLg: "servers_content3.jpg",
    imgSm: "servers_content3_sm.jpg",
    online: "175236",
    totalMembers: "1000000",
    title: "Blox Fruits",
    bodyText:
      " The official community for the popular Roblox game known as Blox Fruits. The official community for the popular Roblox game known as Blox Fruits.",
  },
  {
    imgLg: "servers_content4.jpg",
    imgSm: "servers_content4_sm.jpg",
    online: "175236",
    totalMembers: "1000000",
    title: "Blox Fruits",
    bodyText:
      " The official community for the popular Roblox game known as Blox Fruits.",
  },
  {
    imgLg: "servers_content5.jpg",
    imgSm: "servers_content5_sm.jpg",
    online: "175236",
    totalMembers: "1000000",
    title: "Blox Fruits",
    bodyText:
      " The official community for the popular Roblox game known as Blox Fruits. The official community for the popular Roblox game known as Blox Fruits.",
  },
];

// footer page
export const COUNTRIES = [
  "български",
  "Čeština",
  "Dansk",
  "Deutsch",
  "Ελληνικά",
  "English, USA",
  "Español",
  "Suomi",
  "Français",
  "हिंदी",
  "Hrvatski",
  "Magyar",
  "Italiano",
  "日本語",
  "한국어",
  "Lietuviškai",
  "Nederlands",
  "Norwegian",
  "Polski",
  "Português do Brasil",
  "Română",
  "Русский",
  "Svenska",
  "ไทย",
  "Türkçe",
  "Українська",
  "Tiếng Việt",
  "中文",
  "繁體中文",
];
export const PRODUCT_LINKS = ["Download", "Nitro", "Status"];
export const COMPANY_LINKS = ["About", "Jobs", "Branding", "Newsroom"];
export const RESOURCE_LINKS = [
  "College",
  "Support",
  "Safety",
  "Blog",
  "Feedback",
  "Developers",
  "StreamKit",
  "Creators",
];
export const POLICY_LINKS = [
  "Terms",
  "Privacy",
  "Cookie Settings",
  "Guidelines",
  "Acknowledgements",
  "Licenses",
  "Moderation",
];

// support page

export const SUPPORT_CARDSITEMS: {
  image: string;
  title: string;
  body: string;
}[] = [
  {
    image: "support_card1.svg",
    title: "Announcements",
    body: "We've got our ear to the ground. Here's what you need to know.",
  },
  {
    image: "support_card2.svg",
    title: "Discord's Interface",
    body: "WHAT DOES THIS BUTTON DO!?!11",
  },
  {
    image: "support_card3.svg",
    title: "Account Settings",
    body: "You're a special snowflake and so is your account.",
  },
  {
    image: "support_card4.svg",
    title: "Getting Started",
    body: "Start off on the right foot! Not the left one!",
  },
  {
    image: "support_card5.svg",
    title: "Server Setup",
    body: "Almost as exciting as interior decorating.",
  },
  {
    image: "support_card6.svg",
    title: "Community Programs",
    body: "Bringing people together from all around the globe (and occasionally Mars)",
  },
  {
    image: "support_card7.svg",
    title: "Perks and Subscriptions",
    body: "Please don't shop until you drop. Let us help.",
  },
  {
    image: "support_card8.svg",
    title: "Billing",
    body: "That feel when you look at your bank account.",
  },
  {
    image: "support_card9.svg",
    title: "Trust & Safety",
    body: "Keep things safe & sound for you and your buddies.",
  },
  {
    image: "support_card10.svg",
    title: "F.A.Q.s",
    body: "All you can eat self-serve problem solving.",
  },
];
