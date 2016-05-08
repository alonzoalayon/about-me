var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hello',
    pic: "https://avatars1.githubusercontent.com/u/16580180?v=3&amp;s=460",
    bio: "I'm a party goer and like to jump off buildings.  Everything is nice and dandy",
    skillsTitle:"My skills are lethal! Check them out!",
    skills: ['CSS', 'HTML', 'Java', 'Javascript', 'Badass'],
    hobbiesTitle: "My hobbies are even more dangerous.  You might think you're in CoD.",
    hobbies: ['Dancing', 'Martial Arts', 'Coding', 'Eating']
  });
});

module.exports = router;
