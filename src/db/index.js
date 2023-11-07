import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL , email TEXT NOT NULL, token TEXT NOT NULL)',
                [],
                () => resolve(),
                (_, error) => {
                    reject(error)
                }
            )
        })
    })
    return promise
}

export const insertSession = ({ localId, email, token }) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE sessions SET token = ? WHERE localId = ?;',
                [token, localId],
                (_, updateResult) => {
                    if (updateResult.rowsAffected > 0) {
                        resolve(updateResult);
                    } else {
                        tx.executeSql(
                            'INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);',
                            [localId, email, token],
                            (_, insertResult) => resolve(insertResult),
                            (_, error) => reject(error)
                        );
                    }
                },
                (_, error) => reject(error)
            );
        });
    });
}


export const fetchSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM sessions',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const deleteSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM sessions',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}
