const grapplingDb    = require('../models/grapModel');


  function allGrapplingGyms(req, res, next) {
    console.log('inside controller', data)
    grapplingDb.getAllGGyms()
    .then(data => {
      console.log('inside grap controller', data)
      res.json(data);
      next();
    })
    .catch(err=> {
      next(err);
    })
  }

  function getOneG(req, res, next) {
    grapplingDb.getOneGGym(req.params.grap_id)
    .then(data => {
      res.locals.grappling = data;
      next();
    })
    .catch(err => {
      next(err);
    })
  }
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

    function updateGrapGym(req, res, next) {
      grapplingDb.updateBGyms(req.body)
      .then(data => {
        res.locals.grappling = data;
      })
      .catch(err => {
        next(err);
      })
    }

    function destoryGrapplingGym(req, res){
      grapplingDb.deleteBGym(req.params.grap_id)
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

