const MedicinalPlan = require('../models/MedicinalPlan');

module.exports = {

  async index(req, res) {
    try {
      const medicinalPlan = await MedicinalPlan.findAll();
      return res.json(medicinalPlan);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  async store(req, res) {
    try {
      const { name, active } = req.body;
      const medicinalPlan = await MedicinalPlan.create({ name, active });
      return res.json(medicinalPlan);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const medicinalPlan = await MedicinalPlan.findByPk(id);
      return res.json(medicinalPlan);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, active } = req.body;
      const medicinalPlan = await MedicinalPlan.findByPk(id);
      medicinalPlan.name = name;
      medicinalPlan.active = active;
      await medicinalPlan.save();
      return res.json(medicinalPlan);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  async delete(req, res) {
    try {
      await MedicinalPlan.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.json({ message: 'Registro excluido com sucesso!' });
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

};
