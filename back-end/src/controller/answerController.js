import { add, list, get, update, remove } from "../model/answerModel";

export function findAll(req, res) {
    list().then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function getAnswerById(req, res) {
    get(req.params.id).then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function addAnswer(req, res) {
    add(req.body.answer, req.body.exercise_id).then((response) => {
      return res.status(200).send({ message: 'Solução adicionada' });
    }).catch((error) => {
      return res.status(500).send({ message: 'Ocorreu um error ao tentar adicionar solução', error })
    })
  }

export function updateAnswer(req, res) {
    update(req.params.id, req.body.description)
    .then((response) => {
      return res.status(200).send({ message: 'Solução atualizada'});
    }).catch((error) => {
      return res.status(404).send({ message: 'Ocorreu um erro ao tentar atualizar a solução', error });
    })
  }
  
  export function deleteAnswer(req, res) {
    remove(req.params.id).then((response) => {
      return res.status(200).send({ message: 'Solução removido' });
    }).catch((error) => {
      return res.status(404);
    })
  }