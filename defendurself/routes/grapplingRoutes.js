const express = require('express');
const grapplingRoutes = express.Router();
const grapController  = require('../controllers/grapController');


function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

boxingRoutes.route('/grappling')
    .get(grapController.allGrapplingGyms)

boxingRoutes.route('/:grappling_id')
    .get(grapController.getOneG)
    .put(grapController.updateGrapGym)
    .post(grapController.editGGym)
    .delete(grapController.destoryGrapplingGym);


module.exports = grapplingRoutes;
