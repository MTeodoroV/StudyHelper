import db from '../config/database';

export function list(){
    const query = `SELECT * FROM answer`;

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
    const query = `SELECT * FROM answer WHERE id=${id}`;

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

export function add(answer, exercise_id){
    const query = `INSERT INTO answer(answer, exercise_id) VALUES('${answer}', ${exercise_id})`;

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

export function update(id, answer){
    const query = `UPDATE answer SET answer='${answer}' WHERE id=${id}`;

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
    const query = `DELETE FROM answer WHERE id=${id}`;

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