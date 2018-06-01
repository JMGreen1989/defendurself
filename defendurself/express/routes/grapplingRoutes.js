// const express             = require('express');
const grapplingRoutes     = require('express').Router();
const grapController      = require('../controllers/grapController');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

grapplingRoutes.route('/')
  .get(
    grapController.allGrapplingGyms,
    sendThisError
  )
  .post(
    grapController.makeGrapplingGym,
    sendThisError
  );

grapplingRoutes.route('/:grap_id')
  .get(
    grapController.getOneG,
    sendThisError
  )
  .put(
    grapController.updateGrapGym,
    sendThisError
  )
  .delete(
    grapController.destoryGrapplingGym,
    sendThisError
  );

  module.exports = grapplingRoutes;

