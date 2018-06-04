const db    = require ('../config/connection');


    //getting all boxing gym table data
    function getAllBGyms() {
      return db.many(`
      SELECT * FROM boxing
        `);
    }

    //getting one value to display from boxing gym
    function getOneBGym(id) {
      return db.oneOrNone (`
      SELECT * FROM boxing
      WHERE id = $1`, [id]
        );
    }

    //making a new boxing gym
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

    //updating or editing a boxing gym
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

    //deleting a boxing gym
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
