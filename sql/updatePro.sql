DELIMITER //

CREATE PROCEDURE updateMovie(`MName` VARCHAR(55), `MYear` INT, `MTime` INT, `MLang` VARCHAR(55), `MCountry` VARCHAR(55), `MAge` VARCHAR(10), `MDesc` TEXT, `MType` VARCHAR(55), `MLink` TEXT, `M_Id` INT)
BEGIN
	UPDATE ratingdb.movie SET Mov_Name=MName, Mov_Year=MYear, Mov_Time=MTime, Mov_Lang=MLang, Mov_Country=MCountry, Mov_Age=MAge, Mov_Desc=MDesc, Mov_Type=MType, Mov_Link=MLink WHERE Mov_Id=M_Id;
END //

DELIMITER ;