// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = [];

export function getFeelings() {

    console.log("db : "+db)
    return db;
}

export function createFeeling(user, description) {
    if (description === '') {
        throw new Error('You must express your feelings today');
    }
    db.push({
        id: crypto.randomUUID(),
        description,
        done: false,
        user: user
    });
}

export function deleteFeeling(feelingid) {
    const index = db.findIndex((feeling) => feeling.id === feelingid);

    if (index !== -1) {
        db.splice(index, 1);
    }
}
