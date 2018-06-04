const boxingDb    = require('../models/boxModel');


  //all boxing gyms to display, tied into it's model
  function allBoxingGyms(req, res) {
    boxingDb.getAllBGyms()
    //had issues getting this to display
    //thank you to Joe Keohan(TA) and Michael Klopman(SRC tutor)
    .then(data => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(data)
      // console.log('thisis runnning', data)
    })
    .catch(err => {
      next(err);
    })
  }

  //getting one boxing gym
  function getOneB(req, res) {
    boxingDb.getOneBGym(req.params.id)
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
    function makeBoxingGym(req, res, next) {
      boxingDb.makeBGym(req.body)
      .then(data => {
      console.log('this is data in boxController', data)
        res.json(res.body);
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    //editing a gym
    function editBGym(req, res, next) {
      req.body.id = req.params.id
      boxingDb.updateBGyms(req.body)
      .then(data => {
        console.log('in editBGym', data)
        res.locals.boxing = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    //Turns out i don't need this function
    // function updateBoxGym(req, res, next) {
    //   boxingDb.updateBGyms(req.body)
    //   .then(data => {
    //     res.locals.boxing = data;
    //     next();
    //   })
    //   .catch(err => {
    //     next(err);
    //   })
    // }

    //deleting a gym
    function destoryBoxingGym(req, res){
      boxingDb.deleteBGym(req.params.id)
      .then(() => {
        next();
      })
      .catch(err => {
        res.status(500).json({
          message:err.message
        })
      })
    }

module.exports = {
  allBoxingGyms,
  getOneB,
  makeBoxingGym,
  editBGym,
  // updateBoxGym,
  destoryBoxingGym
}

