const express = require("express");
const router = express.Router();

router.post("/a", function(req, res) {
  let List = [];
  let ListSession = req.session.ListSession;

  if (ListSession) {
    List = ListSession;
  } else {
    let ListRandom = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ];
    for (let i = 0; i < 4; i++) {
      let number = ListRandom[Math.floor(Math.random() * ListRandom.length)];
      List.push(number);
      ListRandom.splice(ListRandom.indexOf(number), 1);
    }
    req.session.ListSession = List;
  }

  //List = [1,2,3,4];
  let chosenNumberList = req.body.chosenNumberList;

  let vitri = [];
  for (let i = 0; i < 4; i++) {
    if (chosenNumberList[i].numberValue === List[i]) {
      vitri.push(i);
    }
  }
  res.json({ viTriTrung: vitri, resultList: List });
});

router.post("/cheat", function(req, res) {
  let List = req.body.ListCheat;
  req.session.ListSession = List;
  res.json({status:"đã update"});
});
module.exports = router;
