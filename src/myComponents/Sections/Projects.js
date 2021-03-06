// import local images
function importAll(r) {
  return r.keys().map(r);
}

const importedImages = importAll(
  require.context("assets/img/projectImages", false, /\.(png|jpe?g)$/)
);
let localImageObj = {};
importedImages.forEach(imgUrl => {
  let key = imgUrl.split("/")[imgUrl.split("/").length - 1].split(".")[0];
  localImageObj[key] = imgUrl;
});

export const PROJECTS = [
  {
    title: "Sears Parts Direct",
    secondarytTitle: "E-Commerce Web Application",
    description: [
      "At Sears PartsDirect, you can find millions of replacement parts for most major brands of appliances, outdoor power equipment, water heaters and softeners, and more, no matter where you bought the product.",
      "It's goal is to help new and experienced DIYers quickly find and order the right part, from any device. It involves Cart, purchasing, Account, Offer, rating and tracking order details."
    ],
    skillSet:
      "React.js/ Redux.js, UI/ UX, Node.js, Express.js, Apollo GraphQL, DynamoDB, Jest, Enzyme, Postman, SoupUI ",
    websiteURL: "https://www.searspartsdirect.com/",
    imageURL:
      // "https://drive.google.com/uc?export=view&id=1wU05FUVOcDqnWHpHZCa3hZWflYhnzikV"
      localImageObj.sPD
  },
  {
    title: "Clipboard Application",
    secondarytTitle: "Clipboard notes App with Login feature ",
    description: [
      "A simple application with CRUD functionality that can be used to create, save, edit notes and access it from any device on the go",
      "It has google firebase login feature implemented for individual user access and privacy."
    ],
    skillSet: "React.js/ Redux.js, Firebase",
    websiteURL: "https://clipboard-application.web.app/",
    imageURL:
      // "https://drive.google.com/uc?export=view&id=1B1MG4C377qhLog4gyZukVuOzZHZhfVrX"
      localImageObj.clipboard
  },
  {
    title: "Dev Connector",
    secondarytTitle: "Social Network App for developers",
    description: [
      "A small social network app built with the MERN stack.",
      "It has Login/ Signup feature to maintain and protect user access",
      "Authenticated User can create profile and upload posts in the community forums",
      "Other Users can reply to the posts posted by other developers"
    ],
    skillSet: "React.js/ Redux.js, Node.js, Express.js, MongoDB, Postman",
    websiteURL: "https://ravibp-devconnector-app.herokuapp.com/",
    imageURL:
      // "https://drive.google.com/uc?export=view&id=1OxgCBrxhSnMBRlwCAmFyCVjOBPhFkDn4"
      localImageObj.devConnector
  },
  {
    title: "Excel sheet extractor",
    secondarytTitle:
      "A simple react application to extract, display and edit Excel sheet table ata",
    description: [
      "The application has an upload feature to import Excel file",
      "The Excel data is extracted and displayed as table data in website",
      "CRUD operations can be performed on the table and data is saved locally",
      "Sample Excel file for demo is located in <root>/assets folder"
    ],
    skillSet: "React.js/ Redux.js",
    websiteURL: "https://ravibp.github.io/excelsheet-extractor/",
    imageURL:
      // "https://drive.google.com/uc?export=view&id=1PuxR7_phSFikPMeDkLAQQRo9Wvya9ZOI"
      localImageObj.excelSheet
  },
  {
    title: "Arcade Game",
    secondarytTitle: "A simple JS Game of dodging enemies to gain points.",
    description: [
      "The game has 3 difficulty modes",
      "The Objective is to reach from start to destination without getting hit by the enemies",
      "Player have to score the best points possible with 10 lives in hand within 5 minutes"
    ],
    skillSet:
      "React.js/ Redux.js, UI/ UX, Node.js, Express.js, Apollo GraphQL, DynamoDB, Jest, Enzyme, Postman, SoupUI ",
    websiteURL: "https://ravibp.github.io/arcade-game/",
    imageURL:
      // "https://drive.google.com/uc?export=view&id=1aTF7PQJrSSR2MnDnOBtTYE37SEzrkz7Z"
      localImageObj.arcadeGame
  }
];
