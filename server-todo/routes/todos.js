const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')(/* options */)
require('dotenv/config');
console.log("ENV::: ", "postgres://"+ process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + ":5432/" + process.env.DB_SCHEMA)
const db = pgp("postgres://"+ process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + ":5432/" + process.env.DB_SCHEMA)

router.get('/', (req, res) => {
    console.log("Get All tasks ")
    db.any("SELECT todo, status FROM todos").then(
        rows => {
            res.status(200).json({
                status: 'success',
                data: rows,
                message: 'Retrieved ALL puppies'
            });
        }
    )
})

router.post('/', (req, res) => {
    console.log("Add ", req.body.todo)
    req.body.status = parseInt(req.body.status);
    db.none('insert into todos(todo, status)' +
        'values(${todo}, (ENUM_RANGE(NULL::todo_status))[${status}] )',
        req.body).then(
            rows => {
                res.status(200).json({
                    status: 'success',
                    message: 'Inserted one puppyy'
                });
            }
        )
})


router.delete('/', (req, res) => {
    console.log("Delete ", req.query.todo)
    db.result('delete from todos where todo=$1', req.query.todo).then(function (result) {
        res.status(200).json({
            status: 'success',
            message: 'removed ${result.rowCount} puppy'
        });
    }
    )
})

module.exports = router;