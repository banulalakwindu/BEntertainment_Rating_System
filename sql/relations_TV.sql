use ratingdb;

ALTER TABLE tv_show
ADD FOREIGN KEY (TV_Cast_1) REFERENCES cast_t(Cast_Id);

ALTER TABLE tv_show
ADD FOREIGN KEY (TV_Cast_2) REFERENCES cast_t(Cast_Id);

ALTER TABLE tv_show
ADD FOREIGN KEY (TV_Cast_3) REFERENCES cast_t(Cast_Id);

ALTER TABLE tv_show
ADD FOREIGN KEY (TV_Dir) REFERENCES director(Dir_Id);

#ALTER TABLE tv_show
#ADD FOREIGN KEY (TV_Rate) REFERENCES rate(Cast_Id);