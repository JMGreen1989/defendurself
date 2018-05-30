const express = require('express');
const boxingRoutes   = require('express').Router();
const boxController  = require('../controllers/boxController');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

boxingRoutes.route('/boxing')
    .get(boxController.allBoxingGyms);

boxingRoutes.route('/:boxing_id')
    .get(boxController.getOneB)
    .put(boxController.updateBoxGym)
    .post(boxController.editBGym)
    .delete(boxController.destroyBoxingGym);

module.exports = boxingRoutes;
