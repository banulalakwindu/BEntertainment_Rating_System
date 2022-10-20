import { excuteQuery } from "../../config/db";

const getAllUsers = async (req, res) => {
  try {
    let userData = await excuteQuery("SELECT * FROM ratingdb.user_t;", []);
    res.send(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  let id = req.query.id;
  try {
    let userData = await excuteQuery(
      `SELECT * FROM ratingdb.user_t WHERE User_Id =${id}`,
      []
    );
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUserById = async (req, res) => {
  let id = req.query.id;
  try {
    let userData = await excuteQuery(
      `DELETE FROM ratingdb.user_t WHERE user_id =${id}`,
      [id]
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
  const { User_Name, User_Country, User_Email, User_Link, User_Dob } = req.body;
  try {
    let userData = await excuteQuery(
      `select User_Id, User_Name, User_Country, User_Email, User_Link, DATE_FORMAT(User_Dob, "%Y-%m-%d") as User_Dob from ratingdb.user_t where User_Id=?`,
      [id]
    );
    if (userData.length > 0) {
      userData = await excuteQuery(
        "UPDATE ratingdb.user_t SET User_Name=?, User_Country=?, User_Email=?, User_Link=?, User_Dob=? WHERE User_Id=?",
        [User_Name, User_Country, User_Email, User_Link, User_Dob, id]
      );
      res.status(200).json(userData);
    } else {
      res.status(404).json(`User to id=${id} not found`);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllUsers, getUserById, deleteUserById, saveUser, updateUser };
