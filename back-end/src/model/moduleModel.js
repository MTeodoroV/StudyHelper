import db from '../config/database';

export function list(){
    const query = `SELECT M.tittle, M.description, MA.matter, 
    US.name as author, M.create_at, M.update_at FROM module M 
    INNER JOIN matter as MA ON M.matter_id = MA.id
    INNER JOIN user as US ON M.user_id = US.id;`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function get(id){
    const query = `SELECT M.tittle, M.description, MA.matter, US.name as author, M.create_at, M.update_at FROM module M 
    INNER JOIN matter as MA ON M.matter_id = MA.id
    INNER JOIN user as US ON M.user_id = US.id WHERE MA.id=${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function add(tittle, description, matter_id, user_id){
    const query = `INSERT INTO module(tittle, description, matter_id, user_id)
    VALUES('${tittle}', '${description}', ${matter_id}, ${user_id})`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function update(id, tittle, description, matter_id, user_id){
    const query = `UPDATE module SET tittle='${tittle}', description='${description}',
    matter_id=${matter_id}, user_id=${user_id} WHERE id=${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function remove(id){
    const query = `DELETE FROM module WHERE id=${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}