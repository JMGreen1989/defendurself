const db    = require ('../config/connection');



    function getAllBGyms() {
      return db.many(`
      SELECT * FROM boxing
        `);
    }

    function getOneBGym(box_id) {
      return db.one (`
      SELECT * FROM boxing
      WHERE box_id = $1`, id
        );
    }

    function makeBGym(box_id) {
      return db.one (`
      INSERT INTO boxing
      (name, location, style, img)
      VALUES ($/name/, $/location/, $/style/, $/img/)
      RETURNING *`, boxing
        );
    }

    function updateBGyms(box_id) {
      return db.one (`
      UPDATE boxing
      SET name = $/name/, location = $/location/,
      style = $/style/, img = $/img/, id = $/id/
      WHERE id = $/id/
      RETURNING *`, boxing
        );
    }

    function deleteBGym(box_id) {
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
