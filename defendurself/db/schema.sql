DROP TABLE IF EXISTS boxing CASCADE;
DROP TABLE IF EXISTS grappling CASCADE;
DROP TABLE IF EXISTS reference CASCADE;

CREATE TABLE boxing (
 box_id SERIAL PRIMARY KEY,
 name VARCHAR(28),
 location VARCHAR(128),
 style VARCHAR(28),
 img VARCHAR(28)
);

CREATE TABLE grappling (
 grap_id SERIAL PRIMARY KEY,
 name VARCHAR(28),
 location VARCHAR(128),
 style VARCHAR(28),
 img VARCHAR(28)
);

CREATE TABLE reference (
 box_id INT,
 grap_id INT
)
