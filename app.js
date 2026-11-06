require("dotenv").config()
const express = require("express")
const app = express()

/* 
	? Server Side Rendering (SSR)
	* a server responsible for serving static content
	* utilizes express static middleware
	
	? Middleware
	* a function that has access to:
	* a request object
	* a response object
	* and the next function in the req/res lifecycle
		* this is commonly called next or next()
	* we bind middleware with app.use()
*/

console.log(__dirname)
// ? gives you absolute path to the current folder or file

const PORT = process.env.PORT
const HOST = process.env.HOST

// ? .use binds .static middleware to the "/" endpoint and exposes entire public folder
app.use("/", express.static(`${__dirname}/public`))


// ? File serving using an endpoint
app.get("/img", (req, res) => {
	// ? sendFile takes a resource but requires ABSOLUTE path
	res.sendFile(`${__dirname}/static/mckim-sale.jpg`)
})

app.get("/submit", (req, res) => {
	res.sendFile(`${__dirname}/static/confirmed.html`)
})

app.listen(PORT, HOST, () => {
	console.log(`[server] listening on ${HOST}:${PORT}`)
})