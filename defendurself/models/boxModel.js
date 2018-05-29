const db    = require ('../config/connection');

module.exports = {

    getAllBGyms() {
      return db.many(`
      SELECT * FROM boxing
        `);
    }

    getOneBGym(id) {
      return db.one (`
      SELECT * FROM boxing
      WHERE id = $1`, id
        );
    }

    makeBGym(id) {
      return db.one (`
      INSERT INTO boxing
      (name, location, style, img)
      VALYES ($/name/, $/location/, $/style/, $/img/)
      RETURNING *`, boxing
        );
    }

    updateBGyms(id) {
      return db.one (`
      UPDATE boxing
      SET name = $/name/, location = $/location/,
      style = $/style/, img = $/img/, id = $/id/
      WHERE id = $/id/
      RETURNING *`, boxing
        );
    }

    deleteBGym(id) {
      return db.none (`
        DELETE FROM boxing
        WHERE id = $1`, id
        );

    }

}
