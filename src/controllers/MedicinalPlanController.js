const MedicinalPlan = require('../models/MedicinalPlan');

module.exports = {

  async index(req, res) {
    try {
      const medicinalPlan = await MedicinalPlan.findAll();
      return res.status(200).json(medicinalPlan);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
  async store(req, res) {
    try {
      const { name, active } = req.body;
      const medicinalPlan = await MedicinalPlan.create({ name, active });
      return res.json(medicinalPlan);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const medicinalPlan = await MedicinalPlan.findByPk(id);
      return res.status(200).json(medicinalPlan);
    } catch (err) {
      return res.status(404).send({ error: err });
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
      return res.status(200).json(medicinalPlan);
    } catch (err) {
      return res.status(404).send({ error: err });
    }
  },
  async delete(req, res) {
    try {
      await MedicinalPlan.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ message: 'Registro excluido com sucesso!' });
    } catch (err) {
      return res.status(404).send({ error: err });
    }
  },

};
// PESQUISAR CODIGOS HTTP DE ERROS
