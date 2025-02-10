export const sections = [
  { title: "Background", ref: "about" },
  { title: "Projects", ref: "projects" },
  { title: "Donation", ref: "donation" },
  { title: "Contact me", ref: "cta" },
];

export const heroData = {
  title: "Welcome to my Portfolio!",
  description: "I'm René Meier - Airline captain and Fullstack developer.",
  image: "profile-captain.png",
};

export const aboutMeData = {
  title: "Background",
  aboutMe: [
    {
      title: "✈️ Pilot Career & Skills",
      description:
        "Flying has been my passion and profession for over a decade. As a fleet captain at Azul Airlines, I have accumulated more than 5000 flight hours, mastering the skies in various aircraft, including the Embraer E195 E1/E2, Airbus A320/A321, and ATR 42/72 series. My aviation journey has taken me through diverse operations, from regional flights to international routes, always ensuring safety, precision, and excellence. Beyond piloting, I am skilled in flight operations, crew resource management (CRM), aviation regulations, and procedural optimizations. I thrive in high-pressure environments, making split-second decisions while leading teams to execute flawless flights.",
      image: "pilot.png",
    },
    {
      title: "💻 Developer Career & Skills",
      description:
        "Technology has always intrigued me, leading me to specialize in software development alongside my aviation career. I focus on web and mobile applications, mastering JavaScript, React.js, React Native, Node.js, and MongoDB to build scalable, high-performance solutions. Some of my key projects include MeiersBook, a social platform integrating authentication and data security; The Wild Oasis, a full-stack React & Next.js application for guest management; and AeroRoster, an in-progress airline crew scheduling tool integrating aviation regulations, flight plans, and meteorological data. I'm also expanding my skill set by learning TypeScript, Python, and C#, with a long-term goal of developing a post-apocalyptic co-op RPG in Unity.",
      image: "no-picture.png",
    },
    {
      title: "🌲 Leisure & Lifestyle",
      description:
        "Beyond work, I embrace an active and Nordic-inspired lifestyle. I love traveling to explore new cultures, walking in forests to reconnect with nature, and enjoying cold-weather traditions like sauna and cold-water swimming. Cycling is my way of staying active, while at home, I unwind with PC gaming and occasional barbecues with friends and family.",
      image: "leisure.png",
    },
  ],
  icons: [
    { name: "logo-github", href: "https://github.com/meierrene" },
    {
      name: "logo-linkedin",
      href: "https://www.linkedin.com/in/renemeierdev/",
    },
    { name: "logo-instagram", href: "https://www.instagram.com/renemeier.de/" },
    {
      name: "logo-steam",
      href: "https://steamcommunity.com/profiles/76561198223067764/",
    },
  ],
};

export const projectsData = {
  highlightedTitle: "Highlighted projects",
  galleryTitle: "Simple-apps gallery",
  highlightedProjects: [
    {
      name: "Mario Game",
      link: "https://gallery.renemeier.info/projects/mario/",
      image: "mariogame.png",
      description:
        "An unofficial Mario game built using kaboom.js. Note: This project is not compatible with mobile devices.",
    },
    {
      name: "Forkify",
      link: "https://renemeier-forkify.netlify.app/",
      image: "forkify.png",
      description:
        "Search from over 10,000 recipes or create your own. Built using vanilla JavaScript.",
    },
    {
      name: "MeiersBook",
      link: "https://meiersbook.renemeier.info/",
      image: "meiersbook.png",
      description:
        "A completed social media platform where users can post, like, and comment. Built with MERN Stack (MongoDB, Express, React, Node.js).",
    },
    {
      name: "The Wild Oasis",
      link: "https://the-wild-oasis-rm.vercel.app/",
      image: "thewildoasis.png",
      description:
        "A management platform for a fictional luxurious hotel, providing detailed staff information and operational tools. (Access upon request.)",
    },
    {
      name: "The Wild Oasis Website",
      link: "https://the-wild-oasis-website-rm.vercel.app/",
      image: "thewildoasiswebsite.png",
      description:
        "A client-side website for a fictional luxurious hotel. Built using Next.js.",
    },
  ],
  galleryProjects: [
    {
      name: "Bankist App",
      link: "https://gallery.renemeier.info/projects/bankistapp/",
      image: "bankist-app.png",
    },
    {
      name: "Bankist Homepage",
      link: "https://gallery.renemeier.info/projects/bankisthomepage/",
      image: "bankist-homepage.png",
    },
    {
      name: "Dicee Game",
      link: "https://gallery.renemeier.info/projects/diceegame/",
      image: "dicee-game.png",
    },
    {
      name: "Drum Kit Play",
      link: "https://gallery.renemeier.info/projects/drumkit/",
      image: "drumkit.png",
    },
    {
      name: "Guess my number Game",
      link: "https://gallery.renemeier.info/projects/guessmynumber/",
      image: "guess-my-number.png",
    },
    {
      name: "Mapty",
      link: "https://gallery.renemeier.info/projects/mapty",
      image: "mapty.png",
    },
    {
      name: "Omnifood template website",
      link: "https://gallery.renemeier.info/projects/omnifood/",
      image: "omnifood.png",
    },
    {
      name: "Pig Game",
      link: "https://gallery.renemeier.info/projects/piggame/",
      image: "piggame.png",
    },
    {
      name: "Simon Game",
      link: "https://gallery.renemeier.info/projects/simongame/",
      image: "simongame.png",
    },
    {
      name: "WhatsApp Message sender",
      link: "https://gallery.renemeier.info/projects/whatsappmessage/",
      image: "whatsapp-msg.png",
    },
    {
      name: "Where Am I?",
      link: "https://gallery.renemeier.info/projects/whereami/",
      image: "where-am-i.png",
    },
  ],
};

export const ctaEmailData = "renemeier@gmail.com";

export const whatsappData = {
  number: "5519984308466",
  message: "Hi%20Ren%C3%A9%21%0AI%20found%20you%20in%20your%20portfolio%21",
};
