import { add, list, get, update, remove } from "../model/tipModel";

export function findAll(req, res) {
    list().then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function getTipById(req, res) {
    get(req.params.id).then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function addTip(req, res) {
    add(req.body.tip, req.body.exercise_id).then((response) => {
      return res.status(200).send({ message: 'Dica adicionada' });
    }).catch((error) => {
      return res.status(500).send({ message: 'Ocorreu um error ao tentar adicionar dica', error })
    })
  }

export function updateTip(req, res) {
    update(req.params.id, req.body.tip)
    .then((response) => {
      return res.status(200).send({ message: 'Dica atualizada'});
    }).catch((error) => {
      return res.status(404).send({ message: 'Ocorreu um erro ao tentar atualizar a dica', error });
    })
  }
  
  export function deleteTip(req, res) {
    remove(req.params.id).then((response) => {
      return res.status(200).send({ message: 'Dica removida' });
    }).catch((error) => {
      return res.status(404);
    })
  }