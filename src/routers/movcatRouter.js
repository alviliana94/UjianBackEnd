const router = require('express').Router()

const conn = require ('../connection/connection')



// ADD CONECTION
router.post('/addmovcat', (req, res) => {
    var sql = `INSERT INTO movcat SET ?`
    var sql2 = `select mc.id as movcat_id, m.nama as nama_film, c.nama as category from movies m
    join movcat mc on m.id = mc.movie_id
    join categories c on c.id = mc.category_id;`
    var data = req.body

    conn.query(sql, data, (err, result) => {
        if (err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if (err) return res.send(err.sqlMessage)

            res.send(result)
        })

    })
})



// DELETE CONNECTION
router.delete('/deletemovcat/:movcatid', (req, res) => {
    const sql = `DELETE FROM movcat WHERE id = ?`
    const sql2 = `select mc.id as movcat_id, m.nama as nama_film, c.nama as category from movies m
    join movcat mc on m.id = mc.movie_id
    join categories c on c.id = mc.category_id;`
    const data = req.params.movcatid

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
    })
})











module.exports= router