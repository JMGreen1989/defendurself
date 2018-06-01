const db    = require ('../config/connection');


    function getAllGGyms() {
      return db.many(`
      SELECT * FROM grappling
        `);
    }

    function getOneGGym(grap_id) {
      return db.one (`
      SELECT * FROM grappling
      WHERE grap_id = $1`, id
        );
    }

    function makeGGym(grap_id) {
      return db.one (`
      INSERT INTO grappling
      (name, location, style, img)
      VALUES ($/name/, $/location/, $/style/, $/img/)
      RETURNING *`, grappling
        );
    }

    function updateGGyms(grap_id) {
      return db.one (`
      UPDATE grappling
      SET name = $/name/, location = $/location/,
      style = $/style/, img = $/img/, id = $/id/
      WHERE id = $/id/
      RETURNING *`, grappling
        );
    }

    function deleteGGym(grap_id) {
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
