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

    function makeBGym(body) {
    console.log('in boxmodel', body)
    return db.one(`
      INSERT INTO boxing (
      name, location, type, image
      ) VALUES (
      $/name/, $/location/, $/type/, $/image/
      )
      RETURNING *
    `, body);
  }

    function updateBGyms(id) {
      console.log('this is the id', id)
      return db.one (`
      UPDATE boxing
      SET

      name = $/name/,
      location = $/location/,
      type = $/type/,
      image = $/image/

      WHERE id = $/id/
      RETURNING *`, id
        );
    }

    function deleteBGym(id) {
      return db.none (`
        DELETE FROM boxing
        WHERE id = $1`, [id]
        );

    }



module.exports = {
  getAllBGyms,
  getOneBGym,
  makeBGym,
  updateBGyms,
  deleteBGym
}
