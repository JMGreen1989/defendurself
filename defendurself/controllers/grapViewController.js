

function lookingAtGrapGyms(req, res) {
  res.render('grapplingViews/show', {
    grappling: res.locals.grappling
  })
}


function showOneGrapGym(req, res) {
  grappling = res.locals.grappling
  res.render('grapplingViews/gym', {
    grappling: res.locals.grappling
  })
}

function makeNewGrapGym(req, res) {
  grappling = res.locals.grappling
  res.render('grapplingViews/new', {
    grappling: res.locals.grappling
  })
}

function editGrapGym(req, res) {
  grappling = res.locals.grappling
  res.render('grapplingViews/edit', {
    grappling: res.locals.grappling
  })
}

function deleteGrapGym(req, res) {
  res.redirect('/show');
}

module.exports = {
  lookingAtGrapGyms,
  showOneGrapGym,
  makeNewGrapGym,
  editGrapGym,
  deleteGrapGym
}
