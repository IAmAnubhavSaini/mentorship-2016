mentorship2016.indexData = mentorship2016.indexData || {};

mentorship2016.app.controller("indexDataController", function(){
  this.contentData = mentorship2016.indexData.simple;
  this.downloadLinks = mentorship2016.common.downloadLinks;
  this.footerLinks = mentorship2016.common.footerLinks;
});

mentorship2016.indexData.simple = [
  {
    heading: "Overview",
    text: "This is my way of giving back to programming community. There is no catch. You have questions that you think people will make fun of, ask me. You find learning to program hard, talk to me. You want to learn to be able to solve problems and do cool stuff, raise your hand. "
  },
  {
    heading: "Specifications",
    text: "Read about stuff that you learned today. Think how you solved a problem. Figure out how things connect to form solutions. Ask yourself how can you make your code better. Have a problem to solve at your fingertips, always."
  },
  {
    heading: "Do not copy.",
    text: "You can ask for general directions, but please do not ask me or others to solve your problems for you. You have to build your own solutions, your own concepts, your own understandings. You have to challenge yourself. Do not copy other’s answers. That’ll kick you out of the program."
  }
];