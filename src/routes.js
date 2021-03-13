const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json({ Rota: 'Home' }));
router.post('/users', (req, res) => res.status(201).send());

module.exports = router;
