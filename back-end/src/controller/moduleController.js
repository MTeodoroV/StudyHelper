import { add, list, get, update, remove } from "../model/moduleModel";

export function findAll(req, res) {
    list().then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function getModuleById(req, res) {
    get(req.params.id).then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function addModule(req, res) {
    add(req.body.tittle, req.body.description, req.body.matter_id, req.body.user_id).then((response) => {
      return res.status(200).send({ message: 'Modulo criada' });
    }).catch((error) => {
      return res.status(500).send({ message: 'Ocorreu um error ao tentar adicionar modulo', error })
    })
  }

export function updateModule(req, res) {
    update(req.params.id, req.body.tittle, req.body.description, req.body.matter_id, req.body.user_id)
    .then((response) => {
      return res.status(200).send({ message: 'Modulo atualizado'});
    }).catch((error) => {
      return res.status(404).send({ message: 'Ocorreu um erro ao tentar atualizar o modulo', error });
    })
  }
  
  export function deleteModule(req, res) {
    remove(req.params.id).then((response) => {
      return res.status(200).send({ message: 'Matéria removida' });
    }).catch((error) => {
      return res.status(404);
    })
  }