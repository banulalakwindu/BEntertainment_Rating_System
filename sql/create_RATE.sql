CREATE TABLE `ratingdb`.`rate` (
  `Mov_Id` INT NOT NULL,
  `User_Id` INT NOT NULL,
  `TV_Id` INT NOT NULL,
  `Rate_Type` VARCHAR(10) NOT NULL,
  `Rate_Size` INT NOT NULL,
  `Rate_Desc` TEXT NULL,
  PRIMARY KEY (`Mov_Id`, `User_Id`, `TV_Id`));