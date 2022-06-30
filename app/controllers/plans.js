import PlanService from "../services/plans";

 
class PlanController {
  service = new PlanService();
  getAll = async (req, res) => {
    const result = await this.service.getAll();
    res.json(result);
  };

  getById = async (req, res) => {
    const result = await this.service.getById(req.params.id);
    res.json(result);
  };
  getByHMO = async (req, res) => {
    const result = await this.service.getByHMO(req.params.id);
    res.json(result);
  };
  create = async (req, res, next) => {
    try { 
      const result = await this.service.create(req.body);
      return res.status(result.status).json({ ...result });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const { id, division, category } = req.body;
      
      const result = await this.service.update(id, {division, category});
      return res.status(result.status).json({ ...result });
    } catch (error) {
      next(error);
    }
  };
  remove = async (req, res, next) => {
    try {
      const result = await this.service.remove(req.params.id);
      return res.status(result.status).json({ ...result });
    } catch (error) {
      next(error);
    }
  };
}
export default PlanController;
