const express = require ('express')
const cors = require ('cors')

const moviesRouter = require ('./routers/moviesRouter')
const movcatRouter = require ('./routers/movcatRouter')
const categoriesRouter = require ('./routers/categoriesRouter')

const app = express()
const port = 2018

app.use(express.json())
app.use(cors())

app.use(moviesRouter)
app.use(movcatRouter)
app.use(categoriesRouter)




app.listen(port, () => {
    console.log("Running at port:", port);
    
})