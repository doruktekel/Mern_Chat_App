import UserModel from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user.id;
    const filteredUsers = await UserModel.find({
      _id: {
        $ne: loggedInUserId,
      },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error getUsersForSidebars in user controller", error.message);
    res.status(500).json({ error: "interval server error" });
  }
};

export default getUsersForSidebar;
