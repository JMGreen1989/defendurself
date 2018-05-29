const grapplingDb    = require('../models/boxModel');

module.exports = {

  allGrapplingGyms(req, res, next) {
    grapplingDb.getAllGGyms()
    .then(data => {
      res.locals.grappling = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

  getOneB(req, res, next) {
    grapplingDb.getOneGGym(req.params.id)
    .then(data => {
      res.locals.grappling = data;
      next();
    })
    .catch(err => {
      next(err);
    })
  }
    makeGrapplingGym(req, res, next) {
      grapplingDb.makeGGym(req.body)
      .then(data => {
        res.locals.grappling = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    editBGym(req, res, next) {
      grapplingDb.updateGGyms(req.body)
      .then(data => {
        res.locals.grappling = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    }

    updateGrapGym(req, res, next) {
      grapplingDb.updateBGyms(req.body)
      .then(data => {
        res.redirect(`/grappling/${req.body.box_id}`)
      })
      .catch(err => {
        next(err);
      })
    }

    destoryGrapplingGym(req, res){
      grapplingDb.deleteBGym(req.params.box_id)
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

