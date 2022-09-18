import { add, list, get, update, remove } from "../model/exerciseModel";

export function findAll(req, res) {
    list().then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function getExerciseById(req, res) {
    get(req.params.id).then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function addExercise(req, res) {
    add(req.body.description, req.body.module_id).then((response) => {
      return res.status(200).send({ message: 'Exercício adicionado' });
    }).catch((error) => {
      return res.status(500).send({ message: 'Ocorreu um error ao tentar adicionar exercício', error })
    })
  }

export function updateExercise(req, res) {
    update(req.params.id, req.body.description)
    .then((response) => {
      return res.status(200).send({ message: 'Exercício atualizada'});
    }).catch((error) => {
      return res.status(404).send({ message: 'Ocorreu um erro ao tentar atualizar a exercício', error });
    })
  }
  
  export function deleteExercise(req, res) {
    remove(req.params.id).then((response) => {
      return res.status(200).send({ message: 'Exercício removido' });
    }).catch((error) => {
      return res.status(404);
    })
  }