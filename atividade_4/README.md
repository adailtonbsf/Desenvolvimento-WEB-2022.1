# 1. Popule a base de dados:
## a) Adicione 4 usuários à sua coleção "usuarios" com nome "pedro", "alice", "maria", "joao". Os outros atributos são de sua escolha.
	use usuarios

	var user = {nome:"pedro", email:"pedro@gmail.com", senha:"1111", idade:13}
	db.usuarios.insert(user)

	var user = {nome:"alice", email:"alice@gmail.com", senha:"2222", idade:27}
	db.usuarios.insert(user)

	var user = {nome:"maria", email:"maria@gmail.com", senha:"3333", idade:29}
	db.usuarios.insert(user)

	var user = {nome:"joao", email:"joao@gmail.com", senha:"4444", idade:19}
	db.usuarios.insert(user)

# 2. Elabora as seguintes consultas:
## a) Obtenha todos usuários que tenham mais de 25 anos.
    db.usuarios.find({idade:{"$gt":25}}).pretty()

## b) Obtenha um usuário que tem nome igual a "joao".
	db.usuarios.find({nome:"joao"}).pretty()

## c) Obtenha todos os usuários que tem nome igual a "joao" e idade igual a 25 anos.
	db.usuarios.find({"$and":[{nome:"joao"},{idade:25}]}).pretty()

## d) Obtenha todos os usuários que tem idade maior que 26 anos e nome diferente de "joao".
	db.usuarios.find({"$and":[{idade:{"$gt":26}},{nome:{"$ne":"joao"}}]}).pretty()

## e) Obtenha todos os usuários que tem nome "joao" ou (idade maior que 25 e nome igual a "pedro").
	db.usuarios.find({"$or":[{nome:"joao"},{"$and":[{idade:{"$gt":25}},{nome:"pedro"}]}]}).pretty()

# Códigos usados:
    use usuarios
    var user = {nome:"pedro", email:"pedro@gmail.com", senha:"1111", idade:13}
    db.usuarios.insert(user)
    var user = {nome:"alice", email:"alice@gmail.com", senha:"2222", idade:27}
    db.usuarios.insert(user)
    var user = {nome:"maria", email:"maria@gmail.com", senha:"3333", idade:29}
    db.usuarios.insert(user)
    var user = {nome:"joao", email:"joao@gmail.com", senha:"4444", idade:19}
    db.usuarios.insert(user)
    db.usuarios.find({idade:{"$gt":25}}).pretty()
    db.usuarios.find({nome:"joao"}).pretty()
    db.usuarios.find({"$and":[{nome:"joao"},{idade:25}]}).pretty()
    db.usuarios.find({"$and":[{idade:{"$gt":26}},{nome:{"$ne":"joao"}}]}).pretty()
    db.usuarios.find({"$or":[{nome:"joao"},{"$and":[{idade:{"$gt":25}},{nome:"pedro"}]}]}).pretty()