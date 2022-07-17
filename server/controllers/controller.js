import Schema from "../models/Schema.js";

export const registerUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const newRegistry = new Schema(user);
  try {
    await newRegistry.save();
    res.status(201).json(newRegistry);
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export const loginUser = (req, res) => {
  //   console.log(req.body);
  const { email, password } = req.body;
  //   console.log(email);
  Schema.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
        //   console.log("Login Successful");
      } else {
        res.send({ message: "Wrong Password" });
        //   console.log("Wrong Password");
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
};
