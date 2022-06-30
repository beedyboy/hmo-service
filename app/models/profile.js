import mongoose from "mongoose";
const { Schema } = mongoose; 

const profileSchema = new Schema(
  {
    user: { type: String, default: "" },
    officeName: { type: String, default: "" },
    address: { type: String, default: "" },
    country: { type: String, default: "" },
    state: { type: String, default: "" },
    region: { type: String, default: "" },
    landmark: { type: String, default: "" },
    phone: { type: String, default: "" },  
    regNumber: { type: String, default: "" },
  },
  { timestamps: true }
);
const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
