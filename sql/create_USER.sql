CREATE TABLE `ratingdb`.`user` (
  `User_Id` INT NOT NULL AUTO_INCREMENT,
  `User_Name` VARCHAR(55) NOT NULL,
  `User_Country` VARCHAR(55) NOT NULL,
  `User_Email` VARCHAR(55) NOT NULL,
  `User_Link` TEXT NOT NULL,
  `User_Dob` DATE NOT NULL,
  PRIMARY KEY (`User_Id`));