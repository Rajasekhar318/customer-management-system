const express = require('express');
const {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware); // Ensure authentication middleware is applied

router.post('/', createCustomer);
router.get('/', getCustomers); // This handles GET requests to fetch customers
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
