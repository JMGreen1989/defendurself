const db    = require ('../config/connection');


    //getting all grappling gym data
    function getAllGGyms() {
      return db.many(`
      SELECT * FROM grappling
        `);
    }

    //getting one value from grappling gym
    function getOneGGym(id) {
      return db.oneOrNone (`
      SELECT * FROM grappling
      WHERE id = $1`, [id]
        );
    }

    //making a new grappling gym
    function makeGGym (body) {
      return db.one (`
      INSERT INTO grappling (
      name, location, type, image
      ) VALUES (
      $/name/, $/location/, $/type/, $/image/
      )
      RETURNING *
    `, body
        );
    }

    //updating or editing a current gym
    function updateGGyms(id) {
      return db.one (`
      UPDATE grappling
      SET name = $/name/, location = $/location/,
      type = $/type/, image = $/image/, id = $/id/
      WHERE id = $/id/
      RETURNING *`, grappling
        );
    }

    //deleting grappling gym
    function deleteGGym(id) {
      return db.none (`
        DELETE FROM grappling
        WHERE id = $1`, id
        );

    }

module.exports = {
  getAllGGyms,
  getOneGGym,
  makeGGym,
  updateGGyms,
  deleteGGym
}
