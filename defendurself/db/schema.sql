\c defendurself_db

DROP TABLE IF EXISTS boxing CASCADE;
DROP TABLE IF EXISTS grappling CASCADE;
-- DROP TABLE IF EXISTS reference CASCADE;

CREATE TABLE boxing (
 box_id SERIAL PRIMARY KEY,
 name VARCHAR(128),
 location VARCHAR(128),
 type VARCHAR(128),
 image VARCHAR(128)
);

CREATE TABLE grappling (
 grap_id SERIAL PRIMARY KEY,
 name VARCHAR(128),
 location VARCHAR(128),
 type VARCHAR(128),
 image VARCHAR(128)
);

-- CREATE TABLE reference (
--  box_id INT,
--  grap_id INT
-- )
