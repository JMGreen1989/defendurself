const boxingDb    = require('../models/boxModel');


  function allBoxingGyms(req, res) {
    boxingDb.getAllBGyms()
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
    function makeBoxingGym(req, res, next) {
      boxingDb.makeBGym(req.body)
      .then(data => {
      console.log('this is data in boxController', data)
        res.locals.boxing = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

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

    function destoryBoxingGym(req, res, next){
      boxingDb.deleteBGym(req.params.id)
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
  allBoxingGyms,
  getOneB,
  makeBoxingGym,
  editBGym,
  // updateBoxGym,
  destoryBoxingGym
}

