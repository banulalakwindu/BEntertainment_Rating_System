CREATE TABLE `ratingdb`.`director` (
  `Dir_Id` INT NOT NULL AUTO_INCREMENT,
  `Dir_Name` VARCHAR(55) NOT NULL,
  `Dir_Country` VARCHAR(55) NOT NULL,
  `Dir_Dob` DATE NOT NULL,
  `Dir_Desc` TEXT NOT NULL,
  `Dir_Link` TEXT NOT NULL,
  PRIMARY KEY (`Dir_Id`));