import express from "express"
import 'dotenv/config'
const app=express()
const PORT=3000;
// hello
app.get('/',
	function (req, res) {
		res.locals.user = 'GeeksforGeeks';
		console.log(res.locals);
		res.end();
	});
// hello 10/06
app.listen(process.env.PORT,
	function (err) {
		if (err) console.log(err);
		console.log(
			"Server listening on PORT",
			process.env.PORT
		);
	});
