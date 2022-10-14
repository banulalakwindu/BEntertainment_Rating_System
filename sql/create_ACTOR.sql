CREATE TABLE `ratingdb`.`actor` (
  `Act_Id` INT NOT NULL AUTO_INCREMENT,
  `Act_Name` VARCHAR(55) NOT NULL,
  `Act_Dob` DATE NOT NULL,
  `Act_Country` VARCHAR(55) NOT NULL,
  `Act_Link` TEXT NOT NULL,
  `Act_Desc` TEXT NOT NULL,
  PRIMARY KEY (`Act_Id`));