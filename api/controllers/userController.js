const db = require('../db')

exports.createUser = async(req, res) => {

    const {name, description} = req.body
    const photo = req.file.filename

    try {
        const [result] = await db.query('INSERT INTO users (name, description, photo) VALUES (?, ?, ?)', [name, description, photo])
        res.status(201).send(`Usuario criado com ID: ${result.insertId}`)
    } catch(err) {
        console.error(err)
        res.status(500).send(err.message)
    }
} 

exports.getAllUser = async(req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users')
        res.status(200).json(users)
    } catch(err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.getUserById = async(req, res) => {
    const id = req.params.id

    try {
        const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id])

        if(user.length > 0) {
            res.status(200).json(user[0])
        } else {
            res.status(404).send('Usuário não Encontrado')
        }
    } catch(err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.updateUser = async(req, res) =>{
    const id = req.params.id
    const {name, description} = req.body
    const photo = req.file ? req.file.filename : null
    try {
        const fields = []
        const values = []

        if(name) {
            fields.push('name = ?')
            values.push(name)
        }

        if(description) {
            fields.push('description = ?')
            values.push(description)
        }

        if(photo) {
            fields.push('photo = ?')
            values.push(photo)
        }

        if(fields.length === 0) {
            return res.status(400).send('Nenhum campo para atualizar')
        }

        values.push(id)

        const query = `UPDATE personagens SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await db.query(query, values)

        if(result.affectedRows > 0) {
            res.status(200).send('Foi atualizado!')
        } else {
            res.status(404).send('Não foi possível atualizar')
        }

    } catch(err) {
        console.error('Erro ao atualizar o personagem', err)
        res.status(500).send(err.message)
    }
}


exports.deleteUser = async(req, res) => {
    const id = req.params.id

    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id])

        if(result.affectedRows > 0) {
            res.status(200).send('Usuario deletado com sucesso')
        } else {
            res.status(404).send('Usuario não encontrado')
        }

    } catch(err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}