import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: mongoose.Schema.Types.Mixed, default: {} }, // Mixed yoki Object tipi bilan belgilash
  },
  { minimize: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
