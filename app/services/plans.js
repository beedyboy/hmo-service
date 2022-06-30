import Plans from "../models/plans";
class PlanService {
  getAll = async () => {
    try {
      return await Plans.find({}).populate("hmo", "-createdAt -updatedAt");
    } catch (error) {
      throw error;
    }
  };
  create = async (payload) => {
    try {
      //do a check whether it already exist or not
      return Plans.create(payload).then((data, err) => {
        if (err) {
          throw err;
        } else {
          return { status: 201, message: "Record created successfully", data };
        }
      });
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
    try {
      return await Plans.findById(id)
        .populate("hmo", "-createdAt -updatedAt")
        .then((data, err) => {
          return { status: 200, data };
        });
    } catch (err) {
      throw err;
    }
  };

  getByHMO = async (hmo) => {
    try {
      return await Plans.find({ hmo })
        .populate("hmo")
        .then((data, err) => {
          if (err) {
            throw err;
          }
          return { status: 200, data };
        });
    } catch (err) {
      throw err;
    }
  };
  update = async (id, payload) => {
    try {
      return await Plans.findByIdAndUpdate(id, payload).then((data, err) => {
        if (data) {
          return { status: 200, message: "Record updated successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };

  remove = async (req, res) => {
    try {
      const id = req.params.id;
      await Plans.findByIdAndDelete(id).then((dt, err) => {
        if (dt) {
          return { status: 200, message: "HMO Plan deleted successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };
}
export default PlanService;
