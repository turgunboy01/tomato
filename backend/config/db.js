import mongoose, { mongo } from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://turgunboychannel:oFozx0Ed3uWsI8hU@tomato.q49if.mongodb.net/?retryWrites=true&w=majority&appName=tomato"
    )
    .then(() => console.log("DB connect"));
};
