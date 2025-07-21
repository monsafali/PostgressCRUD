import { where } from "sequelize";
import { UserModel } from "../database/postgres.js";

export const getAllEmp = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    if (users.length == 0) {
      return res.status(200).json({ errr: "users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log("Error accured in getall user controller", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const PostUser = async (req, res) => {
  const { name, email, designation, emId } = req.body;
  try {
    const emp = await UserModel.findOne({ where: { emId: emId } });
    if (emp == null) {
      await UserModel.create(req.body);
      return res.status(201).json({ message: "emp added successfuly added" });
    }
    return res.status(200).json({ message: "emp id already exist " });
  } catch (error) {
    console.log("Error accured in Post user controller", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const UpdateUser = async (req, res) => {
  let emId = req.params.emId;
  try {
    const emp = await UserModel.update(req.body, { where: { emId } });
    if (emp[0] == 0) {
      res.status(404).json({ success: false, message: "Not found" });
    }
    return res.status(200).json({ message: "Updates successfuly " });
  } catch (error) {
    console.log("Error accured in update user controller", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const DeleteUser = async (req, res) => {
  let emId = req.params.emId;
  try {
    const emp = await UserModel.findOne({ where: { emId: emId } });
    if (emp == null) {
      res.status(404).json({ success: false, message: "Not found" });
    }
    await emp.destroy();
    return res
      .status(200)
      .json({ message: "deleted successfuly successfuly " });
  } catch (error) {
    console.log("Error accured in update user controller", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
