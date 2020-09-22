-- PostgresQL database table creation

--example below 
CREATE TABLE public.users (
    "_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar NOT NULL,
    "first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"password" varchar NOT NULL,
	"favorite_shoe" varchar,
	"gender" varchar,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id"),
	CONSTRAINT "username" UNIQUE ("username"),
	CONSTRAINT "email" UNIQUE ("email")
)
WITH (
	OIDS=FALSE
);

CREATE TABLE public.wishlist (
	"_id" serial NOT NULL,
	"user_id" bigint NOT NULL,
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
    FOREIGN KEY (user_id) REFERENCES public.users(_id)
)
WITH (
	OIDS=FALSE
);

-- drop table 
-- DROP TABLE wishlist, users;

--postgres://ynsexszd:noSPD_3-duKzULOAOw0mCzEfOiuVs9dC@lallah.db.elephantsql.com:5432/ynsexszd
--command to run --> psql -d postgres://ynsexszd:noSPD_3-duKzULOAOw0mCzEfOiuVs9dC@lallah.db.elephantsql.com:5432/ynsexszd -f sneakers_postgres_create.sql
