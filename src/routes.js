const { Router } = require('express');
const MedicinalPlan = require('./controllers/MedicinalPlanController');

const router = Router();

router.get('/', (req, res) => res.json({ Rota: 'Home' }));
router.get('/medicinalPlans', MedicinalPlan.index);
router.post('/medicinalPlans', MedicinalPlan.store);
router.delete('/medicinalPlans', MedicinalPlan.delete);

module.exports = router;
