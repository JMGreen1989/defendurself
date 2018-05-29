const db    = require ('../config/connection');

module.exports = {

    getAllGGyms() {
      return db.many(`
      SELECT * FROM grappling
        `);
    }

    getOneGGym(id) {
      return db.one (`
      SELECT * FROM grappling
      WHERE id = $1`, id
        );
    }

    makeGGym(id) {
      return db.one (`
      INSERT INTO grappling
      (name, location, style, img)
      VALYES ($/name/, $/location/, $/style/, $/img/)
      RETURNING *`, grappling
        );
    }

    updateGGyms(id) {
      return db.one (`
      UPDATE grappling
      SET name = $/name/, location = $/location/,
      style = $/style/, img = $/img/, id = $/id/
      WHERE id = $/id/
      RETURNING *`, grappling
        );
    }

    deleteGGym(id) {
      return db.none (`
        DELETE FROM grappling
        WHERE id = $1`, id
        );

    }

}
