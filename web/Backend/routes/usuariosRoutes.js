const express = require('express')
const router = express.Router();
const upload = require('../config/multerConfig')

const UsuariosController = require('../controllers/usuariosController');

const usuariosController = new UsuariosController;

router.post('/', usuariosController.create)
router.put('/:id', usuariosController.update)
// router.get('/', usuariosController.getAllPersonagem)
// router.get('/:id', usuariosController.getPersonagemById)
// router.delete('/:id', usuariosController.deletePersonagem)

module.exports = router