import db from '../config/database';

export function list(){
    const query = `SELECT E.description, M.tittle, 
    E.create_at, E.update_at FROM exercise E 
    INNER JOIN module as M ON E.module_id = M.id`;

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
    const query = `SELECT E.description, M.tittle, 
    E.create_at, E.update_at FROM exercise E 
    INNER JOIN module as M ON E.module_id = M.id WHERE E.id=${id}`;

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

export function add(description, module_id){
    const query = `INSERT INTO exercise(description, module_id)
    VALUES('${description}', ${module_id})`;

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

export function update(id, description){
    const query = `UPDATE exercise SET description='${description}' WHERE id=${id}`;

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
    const query = `DELETE FROM exercise WHERE id=${id}`;

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