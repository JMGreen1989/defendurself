const express               = require('express');
const boxingRoutes          = require('express').Router();
const boxingController      = require('../controllers/boxingController');
const boxingViewController  = require('../controllers/boxingViewController');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

boxingRoutes.route('/show')
.get(boxingController.allBoxingGyms, boxingViewController.lookingAtBoxGyms, sendThisError)
.post(boxingController.makeBoxingGym, boxingController.allBoxingGyms, boxingViewController.lookingAtBoxGyms, sendThisError);

boxingRoutes.route('/gym/:id')
.get(boxingController.getOneB, boxingViewController.showOneBoxGym, sendThisError)
.delete(boxingController.destoryBoxingGym, boxingViewController.deleteBoxGym);

boxingRoutes.route('/new')
.get(boxingViewController.makeNewBoxGym, sendThisError);

boxingRoutes.route('/:id/edit')
.get(boxingController.getOneB, boxingViewController.editBoxGym, sendThisError)
.put(boxingController.updateBoxGym);

module.exports = boxingRoutes;
