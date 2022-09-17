import { add, list, get, update, remove } from "../model/userModel";
import bcrypt from 'bcryptjs';

export function findAll(req, res) {
    list().then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function getUserById(req, res) {
    get(req.params.id).then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function addUser(req, res) {
    add(req.body.name, req.body.email, bcrypt.hashSync(req.body.password)).then((response) => {
      return res.status(200).send({ message: 'Conta criada com sucesso! :)' });
    }).catch((error) => {
      return res.status(500).send({ message: 'Erro ao tentar criar a conta! :(', error })
    })
  }

export function updateUser(req, res) {
    update(req.params.id, req.body.name)
    .then((response) => {
      return res.status(200).send({ message: 'Conta atualizado com sucesso! :)'});
    }).catch((error) => {
      return res.status(404).send({ message: 'Erro ao tentar atualizar a conta! :(', error });
    })
  }
  
  export function deleteUser(req, res) {
    remove(req.params.id).then((response) => {
      return res.status(200).send({ message: 'Conta removida!' });
    }).catch((error) => {
      return res.status(404);
    })
  }