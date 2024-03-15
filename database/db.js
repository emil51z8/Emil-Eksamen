const sqlite3 = require('sqlite3');
//importering af databasen
const path = require('path');
const dbPath = path.join(__dirname,'database.db');
const db = new sqlite3.Database(dbPath);

function getAllElslugere(){ //metode til at hente alle elslugere fra databasen
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM elslugere'; //sql statement
        db.all(sql, [], (err, elslugerer) => {
            if(err){
                reject(err);
            }
            resolve(elslugerer); //resultatet af sql statementet bliver resolved når alle data er hentet
        });
    });
}

function createElsluger(elsluger){ //metode til at oprette en ny elsluger i databasen
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO elslugere (apparat,forbrug,forbrugKWH) VALUES (?, ?, ?)'; //sql statement
        db.run(sql, [elsluger.apparat, elsluger.forbrug, elsluger.forbrugKWH], (err) => { //udførelse af sql statement
            if(err){
                reject(err);
            }
            resolve(); //resultatet af sql statementet bliver resolved når alle data er hentet
        });
    });
}


module.exports = {
    getAllElslugere,
    createElsluger
};