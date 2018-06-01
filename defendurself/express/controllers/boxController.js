const boxingDb    = require('../models/boxModel');


  function allBoxingGyms(req, res) {
    boxingDb.getAllBGyms()
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

  function getOneB(req, res, next) {
    boxingDb.getOneBGym(req.params.box_id)
    .then(data => {
      res.locals.boxing = data;
      next();
    })
    .catch(err => {
      next(err);
    })
  }
    function makeBoxingGym(req, res, next) {
      boxingDb.makeBGym(req.body)
      .then(data => {
        res.locals.boxing = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    function editBGym(req, res, next) {
      boxingDb.updateBGyms(req.body)
      .then(data => {
        res.locals.boxing = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    function updateBoxGym(req, res, next) {
      boxingDb.updateBGyms(req.body)
      .then(data => {
        res.locals.boxing = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    function destoryBoxingGym(req, res){
      boxingDb.deleteBGym(req.params.box_id)
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
  updateBoxGym,
  destoryBoxingGym
}

