const AppError = require('../utils/AppError');

// const { compare } = require('bcryptjs');
// const authConfig = require('../configs/auth');
// const { sign } = require('jsonwebtoken');

class SessionsController {
    async create(request, response) {
        const { email, senha } = request.body;

        const [usuario] = await db.query(`SELECT * FROM usuarios WHERE email = ? LIMIT 1`, [email]);

        if(!usuario) {
            throw new AppError("E-mail e/ou senha incorreta", 401)
        }

        const senhaConfere = await compare(senha, usuario.senha);

        if (!senhaConfere) {
            throw new AppError("E-mail e/ou senha incorreta", 401)
        }

        // const { secret, expiresIn } = authConfig.jwt;
        // const token = sign({}, secret, {
        //     subject: String(usuario.id),
        //     expiresIn
        // })
        
        return response.json(usuario);
    }
}

module.exports = SessionsController;