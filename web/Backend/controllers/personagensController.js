const db = require('../db')

exports.createPersonagem = async(req, res) =>{
    
    //console.log(req.body)
    //console.log(req.file)

    const {nome, texto} = req.body
    const foto = req.file.filename //path
    try{
        const [result] = await db.query('INSERT INTO personagens (nome, texto, foto) VALUES (?, ?, ?)', [nome, texto, foto])
        res.status(201).send(`Personagem criado com o ID: ${result.insertId}`)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.getAllPersonagem = async(req, res) =>{
    try{
        const [personagens] =  await db.query('SELECT * FROM personagens')
        res.status(200).json(personagens)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.getPersonagemById = async(req, res) =>{
    const id = req.params.id
    try{
        const [personagem] = await db.query('SELECT * FROM personagens WHERE id = ?', [id])
        if(personagem.length > 0){
            res.status(200).json(personagem[0])
        }else{
            res.status(404).send('Personagem não Encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}

exports.updatePersonagem = async(req, res) =>{
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
        const query = `UPDATE personagens SET ${fields.join(', ')} WHERE id = ?`
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

exports.deletePersonagem = async(req, res) =>{
    const id = req.params.id
    try{
        const[result] = await db.query('DELETE FROM personagens WHERE id = ?', [id])
        if(result.affectedRows > 0){
            res.status(200).send('Personagem deletado com sucesso')
        } else {
            res.status(404).send('Personagem não encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}