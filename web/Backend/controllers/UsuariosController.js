const db = require('../db')

class UsuariosController {
    async create(req, res) {
        
        const {nome, email, senha} = req.body
        
        try{
            const [result] = await db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha])
            res.status(201).send(`Personagem criado com o ID: ${result.insertId}`)
        } catch (err){
            console.error(err)
            res.status(500).send(err.message)
        }
    }
    
    async update(req, res) {
        const id = req.params.id
        const {nome, texto} = req.body
        const foto = req.file ? req.file.filename : null
        try{
            const fields = []
            const values = []
            if(nome){
                fields.push('nome = ?')
                values.push(nome)
            }
            if(texto){
                fields.push('texto = ?')
                values.push(texto)
            }
            if(foto){
                fields.push('foto = ?')
                values.push(foto)
            }
            if(fields.length === 0){
                return res.status(400).send('Nenhum campo para atualizar')
            }
            values.push(id)
            const query = `UPDATE usuarios SET ${fields.join(', ')} WHERE id = ?`
            const [result] = await db.query(query, values)
            if(result.affectedRows > 0){
                res.status(200).send('Foi atualizado!')
            } else {
                res.status(404).send('Não foi possível atualizar')
            }
        } catch (err){
            console.error('Erro ao atualizar o personagem', err)
            res.status(500).sen(err.message)
        }
    }
}

module.exports = UsuariosController;


// exports.getAllPersonagem = async(req, res) =>{
//     try{
//         const [usuarios] =  await db.query('SELECT * FROM usuarios')
//         res.status(200).json(usuarios)
//     } catch (err){
//         console.error(err)
//         res.status(500).send(err.message)
//     }
// }
