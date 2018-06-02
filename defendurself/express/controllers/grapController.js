const grapplingDb    = require('../models/grapModel');


  function allGrapplingGyms(req, res, next) {
    grapplingDb.getAllGGyms()
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

