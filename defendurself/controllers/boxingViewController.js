

function lookingAtBoxGyms(req, res) {
  res.render('boxingViews/show', {
    boxing: res.locals.boxing
  })
}


function showOneBoxGym(req, res) {
  boxing = res.locals.boxing
  res.render('boxingViews/gym', {
    boxing: res.locals.boxing
  })
}

function makeNewBoxGym(req, res) {
  boxing = res.locals.boxing
  res.render('boxingViews/new', {
    boxing: res.locals.boxing
  })
}

function editBoxGym(req, res) {
  boxing = res.locals.boxing
  res.render('boxingViews/edit', {
    boxing: res.locals.boxing
  })
}

function deleteBoxGym(req, res) {
  res.redirect('/show');
}

module.exports = {
  lookingAtBoxGyms,
  showOneBoxGym,
  makeNewBoxGym,
  editBoxGym,
  deleteBoxGym
}
