-- PostgresQL database table creation

--example below 
CREATE TABLE users (
    "_id" serial NOT NULL,
    "first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"password" varchar NOT NULL,
	"favorite_shoe" varchar,
	"gender" varchar,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE wishlist (
    "_id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	CONSTRAINT "wishlist_pk" PRIMARY KEY ("_id"),
    FOREIGN KEY (user_id) REFERENCES users(_id)
)  WITH (
  OIDS=FALSE
);

-- drop table 
-- DROP TABLE wishlist users;

--postgres://ynsexszd:noSPD_3-duKzULOAOw0mCzEfOiuVs9dC@lallah.db.elephantsql.com:5432/ynsexszd
--command to run --> psql -d postgres://ynsexszd:noSPD_3-duKzULOAOw0mCzEfOiuVs9dC@lallah.db.elephantsql.com:5432/ynsexszd -f sneakers_postgres_create.sql
