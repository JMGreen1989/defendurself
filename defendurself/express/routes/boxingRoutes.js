// const express               = require('express');
const boxingRoutes          = require('express').Router();
const boxingController      = require('../controllers/boxController');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}


//boxing gym routes for getting all and posting a new gym
boxingRoutes.route('/')
  .get(
    boxingController.allBoxingGyms,
    sendThisError
  )
  .post(
    boxingController.makeBoxingGym,
    sendThisError
  );

//individual boxing gym routes for getting or updating one
// also deleting one
boxingRoutes.route('/:id')
  .get(
    boxingController.getOneB,
    sendThisError
  )
  .put(
    boxingController.editBGym,
    sendThisError
  )
  .delete(
    boxingController.destoryBoxingGym,
    sendThisError
  );

  module.exports = boxingRoutes;


