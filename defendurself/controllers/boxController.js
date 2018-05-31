const boxingDb    = require('../models/boxingModel');


  function allBoxingGyms(req, res, next) {
    boxingDb.getAllBGyms()
    .then(data => {
      res.locals.boxing = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

  function getOneB(req, res, next) {
    boxingDb.getOneBGym(req.params.id)
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
        res.redirect(`/boxing/${req.body.box_id}`)
      })
      .catch(err => {
        next(err);
      })
    }

    function destoryBoxingGym(req, res){
      boxingDb.deleteBGym(req.params.box_id)
      .then(() => {
        res.redirect(`./src/App`)
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

