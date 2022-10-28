import { excuteQuery } from "../../config/db";

const getAllUsers = async (req, res) => {
  try {
    let userData = await excuteQuery("SELECT * FROM ratingdb.users;", []);
    res.send(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserByEmail = async (req, res) => {
  let id = req.query.id;
  try {
    let userData = await excuteQuery(
      `SELECT * FROM ratingdb.user_t WHERE email = "${id}"`,
      []
    );
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUserByEmail = async (req, res) => {
  let id = req.query.id;
  try {
    let userData = await excuteQuery(
      `DELETE FROM ratingdb.users WHERE email ="${id}"`,
      []
    );
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const saveUser = async (req, res) => {
  console.log(req.body);
  let User_Name = req.body.User_Name;
  let User_Country = req.body.User_Country;
  let User_Email = req.body.User_Email;
  let User_Link = req.body.User_Link;
  let User_Dob = req.body.User_Dob;
  try {
    let userData = await excuteQuery(
      "insert into user_t (User_Name, User_Country, User_Email, User_Link, User_Dob) values (?,?,?,?,?)",
      [User_Name, User_Country, User_Email, User_Link, User_Dob]
    );
    userData = await excuteQuery(
      `SELECT * FROM ratingdb.user_t where User_Id=${userData.insertId}`,
      []
    );
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  let id = req.query.id;
  const { name, email, image, country, dob } = req.body;
  try {
    let userData = await excuteQuery(
      `select * from ratingdb.users where email=?`,
      [id]
    );
    if (userData.length > 0) {
      userData = await excuteQuery(
        `UPDATE ratingdb.users SET name="${name}", image="${image}", country="${country}", dob="${dob}" WHERE email="${email}"`,
        []
      );
      res.status(200).json(userData);
    } else {
      res.status(404).json(`User to id=${id} not found`);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllUsers, getUserByEmail, deleteUserByEmail, saveUser, updateUser };
