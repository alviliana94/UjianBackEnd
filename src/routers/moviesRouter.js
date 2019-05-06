const router = require('express').Router()

const conn = require ('../connection/connection')


// ADD MOVIES
router.post('/addmovies', (req, res) => {
    var sql = `INSERT INTO movies SET ?;`
    var sql2 = `SELECT * FROM movies;`
    var data = req.body

    conn.query(sql, data, (err, result) => {
        if (err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
    })
})

// EDIT MOVIES
router.patch('/editmovies/:moviesid', (req, res) => {
    const sql = `UPDATE movies SET ? WHERE id = ?`
    const sql2 = `SELECT * FROM movies;`
    const data = [req.body, req.params.moviesid]

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
    })
})

//DELETE MOVIES
router.delete('/deletemovies/:moviesid', (req, res) => {
    const sql = `DELETE FROM movies WHERE id = ?`
    const sql2 = 'SELECT * FROM movies;'
    const data = req.params.moviesid

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
        
    })
})

//SHOW ALL MOVIES
router.get ('/showmovies', (req, res) => {
    const sql = `SELECT * FROM movies`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        res.send(result)
    })
})






module.exports= router