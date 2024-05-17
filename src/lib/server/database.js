// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
import {use} from "marked";

let db = [];
let users = [];

export function getUsers() {
    return users
}

export function getUser(username) {
    return users.filter(user => user.id === username)
}

export function createUser(username, password) {
    if (getUser(username) !== []) {
        users.push({
            id:  username,
            pwd: password
        })
    }
    console.log(users)
}

export function getFeelings() {

    console.log("db : "+db)
    return db;
}

export function createFeeling(user, description) {
    if (description === '') {
        throw new Error('You must express your feelings today');
    }
    db = db.filter( feel => feel.user !== user)

    db.push({
        id: crypto.randomUUID(),
        description,
        done: false,
        user: user
    });
}

export function deleteFeelings() {
    db = []
}
