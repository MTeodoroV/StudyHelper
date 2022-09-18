import { add, list, get, update, remove } from "../model/matterModel";

export function findAll(req, res) {
    list().then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function getMatterById(req, res) {
    get(req.params.id).then((response) => {
        return res.status(200).send(response);
    }).catch((error) => {
        return res.status(404);
    })
}

export function addMatter(req, res) {
    add(req.body.matter).then((response) => {
      return res.status(200).send({ message: 'Materia criada' });
    }).catch((error) => {
      return res.status(500).send({ message: 'Ocorreu um error ao tentar adicionar matéria', error })
    })
  }

export function updateMatter(req, res) {
    update(req.params.id, req.body.matter)
    .then((response) => {
      return res.status(200).send({ message: 'Materia atualizada'});
    }).catch((error) => {
      return res.status(404).send({ message: 'Ocorreu um erro ao tentar atualizar a matéria', error });
    })
  }
  
  export function deleteMatter(req, res) {
    remove(req.params.id).then((response) => {
      return res.status(200).send({ message: 'Matéria removida' });
    }).catch((error) => {
      return res.status(404);
    })
  }