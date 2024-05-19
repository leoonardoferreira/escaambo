const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const upload = require('../config/multerConfig')

router.post('/', upload.single('foto'), userController.createUser)
router.put('/:id', upload.single('foto'), userController.updateUser)
router.get('/', userController.getAllUser)
router.get('/:id', userController.getUserById)
router.delete('/:id', userController.deleteUser)

module.exports = router