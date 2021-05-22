const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
	multipleStatements: true,
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'alumniconnect',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
	console.log('Server is up and running!!!!');
});

app.post('/signup', (req, res) => {
	const fullName = req.body.fullName;
	const email = req.body.email;
	const password = req.body.password;

	const sqlInsert =
		'INSERT INTO userslogin (fullName, email, password) VALUES (?,?,?);';
	db.query(sqlInsert, [fullName, email, password], (err, result) => {
		console.log(err);
	});
});

app.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const sqlCheck = 'SELECT * FROM userslogin WHERE email=?;';
	db.query(sqlCheck, email, (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			if (password == result[0].password) {
				res.json({ loggedIn: true, email: email });
			}
		} else {
			res.json({ loggedIn: false, message: 'Wrong User/Password!!!' });
		}
	});
});

app.get('/gallery', (req, res) => {
	const sqlQuery = 'SELECT * FROM gallery ORDER BY time DESC;';
	db.query(sqlQuery, (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send({ message: 'No image to show' });
		}
	});
});

app.post('/gallery', (req, res) => {
	const image = req.body.image;
	const author = req.body.author;

	const sqlCheck = 'INSERT INTO gallery (user_name, photo_name) VALUES (?,?);';
	db.query(sqlCheck, [author, image], (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			res.send(result);
			console.log(result);
			res.send({ message: 'Insert Successful' });
		} else {
			res.send({ message: 'Cannot Insert' });
		}
	});
});

app.get('/event', (req, res) => {
	const sqlQuery =
		'SELECT event_id,time,event_name,venue,DATE_FORMAT(day,"%y-%m-%d") AS day FROM event WHERE day>=current_date();';
	db.query(sqlQuery, (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send({ message: 'No event to show' });
		}
	});
});

app.post('/addevent', (req, res) => {
	const event_name = req.body.event_name;
	const venue = req.body.venue;
	const time = req.body.time;
	const day = req.body.day;

	const sqlInsert =
		'INSERT INTO event (event_name, venue, time,day) VALUES (?,?,?,?);';
	db.query(sqlInsert, [event_name, venue, time, day], (err, result) => {
		if (err) {
			res.send({ err: err });
		}

		if (result.length > 0) {
			res.send(result);
			res.send({ message: 'Insert Successful' });
		} else {
			res.send({ message: 'Cannot Insert' });
		}
	});
});

app.get('/featured', (req, res) => {
	const sqlQuery =
		'SELECT alumni_id,current_job,alumni_name,profile_link,passout_year FROM alumni;';
	db.query(sqlQuery, (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send({ message: 'No alumni to show' });
		}
	});
});

app.post('/upload', (req, res) => {
	const description = req.body.description;
	const image = req.body.image;
	const author = req.body.author;

	const sqlInsert =
		'INSERT INTO post (user_name, img_name,description) VALUES (?,?,?);';
	db.query(sqlInsert, [author, image, description], (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			res.send(result);
			console.log(result);
			res.send({ message: 'Insert Successful' });
		} else {
			res.send({ message: 'Cannot Insert' });
		}
	});
});

app.post('/register', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const location = req.body.location;
	const current_job = req.body.current_job;
	const experience = req.body.experience;
	const edu = req.body.edu;
	const pass_year = req.body.pass_year;
	const skills = req.body.skills;
	const bio = req.body.bio;
	const image = req.body.image;

	// const sqlInsert =
	// 	'INSERT INTO alumni (email,alumni_name,current_job,experiences,education,skills,bio,profile_link,passout_year,location ) VALUES (?,?,?,?,?,?,?,?,?,?);';
	db.query(
		'INSERT INTO alumni (email,alumni_name,current_job,experiences,education,skills,bio,profile_link,passout_year,location ) VALUES (?,?,?,?,?,?,?,?,?,?);',
		[
			email,
			name,
			current_job,
			experience,
			edu,
			skills,
			bio,
			image,
			pass_year,
			location,
		],
		(err, result) => {
			if (err) {
				res.send({ err: err });
			} else {
				res.send(result);
			}
		}
	);
});

app.get('/feed', (req, res) => {
	// const email = req.body.email;
	// console.log(req.body.email);

	db.query('SELECT * FROM post;', (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send({ message: 'No post to show' });
		}
	});
});

app.get('/profile/byId/:id', (req, res) => {
	const id = req.params.id;
	const sqlQuery = 'SELECT * FROM alumni WHERE alumni_id=?';
	db.query(sqlQuery, [id], (err, result) => {
		if (err) {
			res.send({ err: err });
		}
		if (result.length > 0) {
			res.send(result);
		} else {
			res.send({ message: 'No result found' });
		}
	});
});
