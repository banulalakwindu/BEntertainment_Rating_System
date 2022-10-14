use ratingdb;

ALTER TABLE movie
ADD FOREIGN KEY (Mov_Cast_1) REFERENCES cast_t(Cast_Id);

ALTER TABLE movie
ADD FOREIGN KEY (Mov_Cast_2) REFERENCES cast_t(Cast_Id);

ALTER TABLE movie
ADD FOREIGN KEY (Mov_Cast_3) REFERENCES cast_t(Cast_Id);

ALTER TABLE movie
ADD FOREIGN KEY (Mov_Dir) REFERENCES director(Dir_Id);

