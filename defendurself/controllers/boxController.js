const boxingDb    = require('../models/boxModel');

module.exports = {

  allBoxingGyms(req, res, next) {
    boxingDb.getAllBGyms()
    .then(data => {
      res.locals.boxing = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

  getOneB(req, res, next) {
    boxingDb.getOneBGym(req.params.id)
    .then(data => {
      res.locals.boxing = data;
      next();
    })
    .catch(err => {
      next(err);
    })
  }
    makeBoxingGym(req, res, next) {
      boxingDb.makeBGym(req.body)
      .then(data => {
        res.locals.boxing = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    editBGym(req, res, next) {
      boxingDb.updateBGyms(req.body)
      .then(data => {
        res.locals.boxing = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    updateBoxGym(req, res, next) {
      boxingDb.updateBGyms(req.body)
      .then(data => {
        res.redirect(`/boxing/${req.body.box_id}`)
      })
      .catch(err => {
        next(err);
      })
    }

    destoryBoxingGym(req, res){
      boxingDb.deleteBGym(req.params.box_id)
      .then(() => {
        res.redirect(`./src/App`)
      })
      catch(err => {
        res.status(500).json({
          message:error.message
        })
      })
    }

  }

