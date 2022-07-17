import mongoose from "mongoose";

const Userschema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const Schema = mongoose.model("Schema", Userschema);
export default Schema;
