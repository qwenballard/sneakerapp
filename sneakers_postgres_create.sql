-- PostgresQL database table creation

--example below 
CREATE TABLE users (
    "_id" SERIAL NOT NULL,
	"username" varchar NOT NULL,
    "first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"password" varchar NOT NULL,
	"favorite_shoe" varchar,
	"gender" varchar,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id"),
	CONSTRAINT "username" UNIQUE ("username")
);

CREATE TABLE wishlist (
    "_id" SERIAL NOT NULL,
	"user_id" int NOT NULL,
	"sneaker_id" varchar NOT NULL,
	"brand" varchar,
	"colorway" varchar,
	"gender" varchar,
	"name" varchar NOT NULL,
	"release_date" varchar,
	"release_price" int,
	"shoe_name" varchar,
	"style_id" varchar,
	"title" varchar,
	"year" int,
	"image_url" text,
	"small_imageurl" text,
	"thumb_url" text,
	CONSTRAINT "wishlist_pk" PRIMARY KEY ("_id"),
    FOREIGN KEY ("user_id") REFERENCES users("_id")
);

-- drop table 
-- DROP TABLE wishlist, users;

--postgres://ynsexszd:noSPD_3-duKzULOAOw0mCzEfOiuVs9dC@lallah.db.elephantsql.com:5432/ynsexszd
--command to run --> psql -d postgres://ynsexszd:noSPD_3-duKzULOAOw0mCzEfOiuVs9dC@lallah.db.elephantsql.com:5432/ynsexszd -f sneakers_postgres_create.sql
