mentorship2016.firststep = mentorship2016.firststep || {};

mentorship2016.app.controller("secondstepDataController", function(){
  this.simpleContentList = mentorship2016.firststep.simpleContentListData;
  this.downloadLinks = mentorship2016.common.downloadLinks;
  this.footerLinks = mentorship2016.common.footerLinks;
});

mentorship2016.firststep.simpleContentListData = [
  {
    heading: "Plan your year.",
    list: [
      "Take a few steps back and look at the whole year.",
      "What is that you want to learn by the end of 2016?",
      "What programming skills would like to have?",
      "How much time in total will you have to learn yourself?",
      "Tell me what it is. I might point out flaws or give suggestions about your plan."
    ]
  },
  {
    heading: "Break your year in 24 equal pieces.",
    list: [
      "Divide whole year in 2 week long pieces.",
      "Some weeks will have more work and some will will have more vacations.",
      "Create a personal calendar, on paper or online."
    ]
  },
  {
    heading: "Plan your year again.",
    list: [
      "Reduce the commitment you made above by 75%.",
      "You cannot learn everything in one year, but you can learn one or two things very well. Pick them.",
      "Plan to read and implement. Studying alone is not sufficient.",
      "Give me your calendar that has your plan. Online or document."
    ]
  },
  {
    heading: "What are the things you want to learn.",
    list: [
      "Create a separate document that lists the things you hope to learn.",
      "In that document, list the things that you really want to learn."
    ]
  },
  {
    heading: "Suggest some projects.",
    list: [
    "What sort of projects do you want to build?",
    "Suggest at least 12 projects - look online for the small projects that other people have created."
    ]
  },
  {
    heading: "Questions",
    list: [
      "What questions do you want to ask about me?",
      "What questions do you want to ask about the program?",
      "What questions do you want to ask about programming?",
      "What questions do you want to ask about work, job etc?",
      "Really ask anything. Put your questions in a separate document and send or share it with me."
    ]
  },
  {
    heading: "Starting on 1st of January.",
    list: [
      "Since, we are starting next month, I'd like to know about your system configuration.",
      "Tell me if you need help in setting up git or any other tool.",
      "I do not want you to play catch, so setup your computers before we being."
    ]
  },
  {
    heading: "Thanks!",
    list:[
    "Tell your friends about the program. Learning becomes effective, fun and easy when family and friends are involved."
    ]
  }
];