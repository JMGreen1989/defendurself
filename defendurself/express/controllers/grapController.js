const grapplingDb    = require('../models/grapModel');


   //all grappling gyms to display, tied into it's model
  function allGrapplingGyms(req, res, next) {
    grapplingDb.getAllGGyms()
    //had issues getting this to display
    //thank you to Joe Keohan(TA) and Michael Klopman(SRC tutor)
    .then(data => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(data)
      console.log('thisis runnning', data)
    })
    .catch(err => {
      next(err);
    })
  }

    //getting one grappling gym
  function getOneG(req, res) {
    grapplingDb.getOneGGym(req.params.id)
    .then(data => {
      res.body = data;
      // console.log(res.body)
      // next();
      res.send(res.body);
    })
    .catch(err => {
    console.log('something')
      // next(err);
    })
  }
     //making a new gym
    function makeGrapplingGym(req, res, next) {
      grapplingDb.makeGGym(req.body)
      .then(data => {
        res.locals.grappling = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    //editing grappling gym
    function editGGym(req, res, next) {
      grapplingDb.updateGGyms(req.body)
      .then(data => {
        res.locals.grappling = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    //updating grappling gym
    function updateGrapGym(req, res, next) {
      grapplingDb.updateBGyms(req.body)
      .then(data => {
        res.locals.grappling = data;
      })
      .catch(err => {
        next(err);
      })
    }

    //deleting gym
    function destoryGrapplingGym(req, res){
      grapplingDb.deleteBGym(req.params.id)
      .then(() => {
        next();
      })
      .catch(err => {
        res.status(500).json({
          message:error.message
        })
      })
    }

module.exports = {
  allGrapplingGyms,
  getOneG,
  makeGrapplingGym,
  editGGym,
  updateGrapGym,
  destoryGrapplingGym
}

