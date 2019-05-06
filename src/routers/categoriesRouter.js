const router = require('express').Router()

const conn = require ('../connection/connection')


// ADD CATEGORIES
router.post('/categories', (req, res) => {
    var sql = `INSERT INTO categories SET ?;`
    var sql2 = `SELECT * FROM categories`
    var data = req.body

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
    })
})

//EDIT CATEGORIES
router.patch('/editcategories/:categoriesid', (req, res) => {
    const sql = `UPDATE categories SET ? WHERE id = ?`
    const sql2 = `SELECT * FROM categories`
    const data = [req.body, req.params.categoriesid]

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
    })
})

//DELETE CATEGORIES
router.delete('/deletecategories/:categoriesid', (req, res) => {
    const sql = `DELETE FROM categories WHERE id = ?`
    const sql2 = `SELECT * FROM categories`
    const data = req.params.categoriesid

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
    })
})

//SHOW ALL CATEGORIES
router.get('/showcategories', (req, res) => {
    const sql = `SELECT * FROM categories`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        res.send(result)
    })
})












module.exports= router