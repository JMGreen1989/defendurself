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

    function makeGGym(id) {
      return db.one (`
      INSERT INTO grappling
      (name, location, style, image)
      VALUES ($/name/, $/location/, $/style/, $/image/)
      RETURNING *`, grappling
        );
    }

    function updateGGyms(id) {
      return db.one (`
      UPDATE grappling
      SET name = $/name/, location = $/location/,
      style = $/style/, image = $/image/, id = $/id/
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
