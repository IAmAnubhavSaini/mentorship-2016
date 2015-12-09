var app = angular.module("mentorshipApp", []);

app.controller("footerLinksController", function(){
  this.links = footerLinks;
});

app.controller("downloadLinksController", function(){
  this.links = downloadLinks;
});

var footerLinks = [
  { href:"http://twitter.com/iamanubhavsaini", text:"@iamanubhavsaini" },
  { href:"https://www.facebook.com/groups/mentorship2016/", text:"Group" },
  { href:"https://drive.google.com/open?id=0B2HdMWV_X6CCTjIzNWVfRFk3N0E", text:"Drive" },
];

var downloadLinks = [
  { item:"First step", 
      links: [
        { href:"./public/docs/firststep.docx", text:"DOCX - MS Office" },
        { href:"./public/docs/firststep.odt", text:"ODT - Open Document Type" },
        { href:"./public/docs/firststep.pdf", text:"PDF" },
        { href:"./public/docs/firststep.txt", text:"Text Format" }
      ]
  },
  { item:"Project Proposal", 
      links: [
        { href:"./public/images/Projectproposal-Mentorship2016.pdf", text:"PDF" }
      ]
  },
];