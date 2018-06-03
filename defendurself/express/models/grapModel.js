const db    = require ('../config/connection');


    function getAllGGyms() {
      return db.many(`
      SELECT * FROM grappling
        `);
    }

    function getOneGGym(id) {
      return db.oneOrNone (`
      SELECT * FROM grappling
      WHERE id = $1`, [id]
        );
    }

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

    function updateGGyms(id) {
      return db.one (`
      UPDATE grappling
      SET name = $/name/, location = $/location/,
      type = $/type/, image = $/image/, id = $/id/
      WHERE id = $/id/
      RETURNING *`, grappling
        );
    }

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
