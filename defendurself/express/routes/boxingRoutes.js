// const express               = require('express');
const boxingRoutes          = require('express').Router();
const boxingController      = require('../controllers/boxController');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

boxingRoutes.route('/')
  .get(
    boxingController.allBoxingGyms,
    sendThisError
  )
  .post(
    boxingController.makeBoxingGym,
    sendThisError
  );

boxingRoutes.route('/:id')
  .get(
    boxingController.getOneB,
    sendThisError
  )
  .put(
    boxingController.updateBoxGym,
    sendThisError
  )
  .delete(
    boxingController.destoryBoxingGym,
    sendThisError
  );

  module.exports = boxingRoutes;


