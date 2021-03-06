mentorship2016.firststep = mentorship2016.firststep || {};

mentorship2016.app.controller("firststepDataController", function(){
  this.simpleContentList = mentorship2016.firststep.simpleContentListData;
  this.downloadLinks = mentorship2016.common.downloadLinks;
  this.footerLinks = mentorship2016.common.footerLinks;
});

mentorship2016.firststep.simpleContentListData = [
  {
    heading: "About yourself.",
    list: [
      "Where are you from? Country, state, city?",
      "What do you do?",
      "What does your family do?",
      "What is your experience about life till now?",
      "What you want to do with your life and those that are around you?"
    ]
  },
  {
    heading: "Your online footprint.",
    list: [
      "GitHub - create account if don’t already have one.",
      "Skype - create account if don’t already have one.",
      "FaceBook",
      "Twitter  - create account if don’t already have one.",
      "LinkedIn  - create account if don’t already have one.",
      "Blog - create account if don’t already have one.",
      "JSFiddle  - create account if don’t already have one.",
      "CodePen  - create account if don’t already have one.",
      "SPOJ",
      "HackerEarth",
      "HackerRank",
      "ProjectEuler",
      "Personal website",
      "Anything else?"
    ]
  },
  {
    heading: "What is your experience in programming?",
    list: [
      "What languages do you know?",
      "How long have you been coding?",
      "What sort of problems you like to solve?"
    ]
  },
  {
    heading: "Preparation",
    list: [
      "Ditch mouse as much as possible. Learn to use keyboard shortcuts.",
      "Start bookmarking sites that make interests you.",
      "Be open to not knowing something and then learning it.",
      "Treat others the way you’d like them to treat you."
    ]
  }
];