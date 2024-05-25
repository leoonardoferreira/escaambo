const express = require('express')
const router = express.Router();
const upload = require('../config/multerConfig')

const UsuariosController = require('../controllers/UsuariosController');

const usuariosController = new UsuariosController;

router.post('/', upload.single('foto'), usuariosController.create)
router.put('/:id', upload.single('foto'), usuariosController.update)
router.get('/', usuariosController.getAllUsuarios)
router.get('/:id', usuariosController.getUsuarioById)
router.delete('/:id', usuariosController.delete)

module.exports = router