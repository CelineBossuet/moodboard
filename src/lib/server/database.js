// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = [];

export function getFeelings() {

    console.log(db)
    return db;
}

export function createFeeling(userid, description) {

    db.push({
        id: crypto.randomUUID(),
        description,
        done: false,
        userid: userid
    });
}

export function deleteFeeling(userid, feelingid) {
    const feelings = db.get(userid);
    const index = feelings.findIndex((feeling) => feeling.id === feelingid);

    if (index !== -1) {
        feelings.splice(index, 1);
    }
}
