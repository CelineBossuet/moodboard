// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
let db = [];

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
