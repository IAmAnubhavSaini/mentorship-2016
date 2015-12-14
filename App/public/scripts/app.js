var mentorship2016 = mentorship2016 || {};
if (window.mentorship2016 === undefined ){
  window.mentorship2016 = mentorship2016;
}

mentorship2016.common = mentorship2016.common || {};

mentorship2016.common.footerLinks = [
  { href:"http://twitter.com/iamanubhavsaini", text:"@iamanubhavsaini" },
  { href:"https://www.facebook.com/groups/mentorship2016/", text:"Group" },
  { href:"https://drive.google.com/open?id=0B2HdMWV_X6CCTjIzNWVfRFk3N0E", text:"Drive" },
];

mentorship2016.common.downloadLinks = [
  { item:"First step", 
      links: [
        { href:"./public/docs/Firststep.docx", text:"DOCX - MS Office" },
        { href:"./public/docs/Firststep.odt", text:"ODT - Open Document Type" },
        { href:"./public/docs/Firststep.pdf", text:"PDF" },
        { href:"./public/docs/Firststep.txt", text:"Text Format" }
      ]
  },
  { item:"Second step", 
      links: [
        { href:"./public/docs/Secondstep.docx", text:"DOCX - MS Office" },
        { href:"./public/docs/Secondstep.odt", text:"ODT - Open Document Type" },
        { href:"./public/docs/Secondstep.pdf", text:"PDF" },
        { href:"./public/docs/Secondstep.txt", text:"Text Format" }
      ]
  },
  { item:"Project Proposal", 
      links: [
        { href:"./public/images/Projectproposal-Mentorship2016.pdf", text:"PDF" }
      ]
  },
];

mentorship2016.app = angular.module("mentorshipApp", []);
