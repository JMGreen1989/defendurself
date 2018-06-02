const db    = require ('../config/connection');



    function getAllBGyms() {
      return db.many(`
      SELECT * FROM boxing
        `);
    }

    function getOneBGym(id) {
      return db.oneOrNone (`
      SELECT * FROM boxing
      WHERE id = $1`, [id]
        );
    }

    function makeBGym(id) {
      return db.one (`
      INSERT INTO boxing
      (name, location, style, image)
      VALUES ($/name/, $/location/, $/style/, $/image/)
      RETURNING *`, boxing
        );
    }

    function updateBGyms(id) {
      return db.one (`
      UPDATE boxing
      SET name = $/name/, location = $/location/,
      style = $/style/, image = $/image/, id = $/id/
      WHERE id = $/id/
      RETURNING *`, boxing
        );
    }

    function deleteBGym(id) {
      return db.none (`
        DELETE FROM boxing
        WHERE id = $1`, id
        );

    }



module.exports = {
  getAllBGyms,
  getOneBGym,
  makeBGym,
  updateBGyms,
  deleteBGym
}
