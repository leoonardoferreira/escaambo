const db = require('../db')

exports.createUsuario = async(req, res) =>{
    console.log(req.body)
    console.log(req.file)

    const {nome, descricao} = req.body
    const foto = req.file.path
    try{
      const[result] = await db.query('INSERT INTO usuarios (nome, descricao, foto) VALUES (?,?,?)', [nome, descricao, foto] )
      res.status(201).send(`Usuario criado com ID: ${result.insertId}`)

    }catch(err){
        console.error(err)
        res.status(500).send(err.message)
    }

} 

exports.getAllusuario = async(req, res) =>{
     try{
        const [usuarios] = await db.query('SELECT * FROM usuarios')
        res.status(200).json(usuarios)
     }catch(err){
        console.error(err)
        res.status(500).send(err.message)
     }
}
exports.getPersonagemById = async(req, res) =>{
    const id = req.params.id
    try{
        const [personagens] = await db.query('SELECT * FROM personagens WHERE id = ?', [id])
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

exports.updateUsuario = async(req, res) =>{
    const id = req.params.id
    const {nome, texto, foto} = req.body
    try{
        const [result] = await db.query('UPDATE usuarios SET nome = ?, texto = ?, foto = ? WHERE id = ?', [nome, descricao, foto, id])
        if (result.affectedRows > 0){
            res.status(200).send('Usuario atualizado com sucesso')
        } else {
         
            res.status(404).send('Usuario não Encontrado')
         }

} catch (err){
    console.error(err)
    res.status(500).send(err.message)
}


exports.deletePersonagem = async(req, res) =>{
const id = req.params.id
try{
    const[result] = await db.query('DELETE FROM Usuario WHERE id = ?', [id])
    if(result.affectedRows > 0){
        res.status(200).send('Usuario deletado com sucesso')
    } else {
        res.status(404).send('Usuario não encontrado')
    }
} catch (err){
    console.error(err)
    res.status(500).send(err.message)
}
}
}