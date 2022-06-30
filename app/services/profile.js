import mongoose from "mongoose"; 
import Profile from '../models/profile';
class ProfileService {
  getAll = async () => { 
    try {
      return await Profile.find({});
    } catch (error) {
      throw error;
    }
  };
  create = async (payload) => {
    try { 
      return Profile.create(payload).then((data, err) => {
        if (err) {
          throw err;
        } else {
          return { status: 201, message: "Profile created successfully", data };
        }
      });
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
    try { 
      return await Profile.findById(id).then((data, err) => {
        return { status: 200, data };
      });
    } catch (err) {
      throw err;
    }
  };
 
  update = async (payload) => {
    try { 
      return await Profile.findByIdAndUpdate(payload.id, payload).then(
        (data, err) => {
          if (data) {
            return { status: 200, message: "Record updated successfully" };
          }
        }
      );
    } catch (error) {
      throw error;
    }
  };
 
  remove = async (req, res) => {
    try { 
      const id = req.params.id;
      await Profile.findByIdAndDelete(id).then((dt, err) => {
        if (dt) {
          return { status: 200, message: "Profile deleted successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };
}
export default ProfileService;
