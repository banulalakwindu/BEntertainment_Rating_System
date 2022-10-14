use ratingdb;

ALTER TABLE cast_t
ADD FOREIGN KEY (Cast_Act) REFERENCES actor(Act_Id);