// const express             = require('express');
const grapplingRoutes     = require('express').Router();
const grapController      = require('../controllers/grapController');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

//grappling gym routes for getting all and posting a new gym
grapplingRoutes.route('/')
  .get(
    grapController.allGrapplingGyms,
    sendThisError
  )
  .post(
    grapController.makeGrapplingGym,
    sendThisError
  );

//individual grappling gym routes for getting or updating one
// also deleting one
grapplingRoutes.route('/:id')
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

