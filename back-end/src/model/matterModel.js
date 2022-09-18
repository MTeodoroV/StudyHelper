import db from '../config/database';

export function list(){
    const query = `SELECT * FROM matter`;

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
    const query = `SELECT * FROM matter WHERE id=${id}`;

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

export function add(matter){
    const query = `INSERT INTO matter(matter)
    VALUES('${matter}')`;

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

export function update(id, matter){
    const query = `UPDATE matter SET matter='${matter}' WHERE id=${id}`;

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
    const query = `DELETE FROM matter WHERE id=${id}`;

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