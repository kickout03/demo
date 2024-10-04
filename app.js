import express from "express"

const app=express()
const PORT=3000;

app.get('/',
	function (req, res) {
		res.locals.user = 'GeeksforGeeks';
		console.log(res.locals);
		res.end();
	});

app.listen(PORT,
	function (err) {
		if (err) console.log(err);
		console.log(
			"Server listening on PORT",
			PORT
		);
	});
