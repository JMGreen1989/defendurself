const express             = require('express');
const grapplingRoutes     = express.Router();
const grapController      = require('../controllers/grapController');
const grapViewController  = require('../controllers/grapViewController');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

grapplingRoutes.route('/show')
.get(grapController.allGrapplingGyms, grapViewController.lookingAtGrapGyms, sendThisError)
.post(grapController.makeGrapplingGym, grapController.allGrapplingGyms, grapViewController.lookingAtGrapGyms, sendThisError);

grapplingRoutes.route('/gym/:id')
.get(grapController.getOneG, grapViewController.showOneGrapGym, sendThisError)
.delete(grapController.destoryGrapplingGym, grapViewController.deleteGrapGym);

grapplingRoutes.route('/new')
.get(grapViewController.makeNewGrapGym, sendThisError);

grapplingRoutes.route('/:id/edit')
.get(grapController.getOneG, grapViewController.editGrapGym, sendThisError)
.put(grapController.updateGrapGym);

module.exports = grapplingRoutes;

