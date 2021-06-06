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

app.post('/studentsignup', (req, res) => {
	const fullName = req.body.fullName;
	const email = req.body.email;
	const password = req.body.password;

	const sqlInsert =
		'INSERT INTO studentlogin (fullName, email, password) VALUES (?,?,?);';
	db.query(sqlInsert, [fullName, email, password], (err, result) => {
		console.log(err);
	});
});

app.post('/alumnisignup', (req, res) => {
	const fullName = req.body.fullName;
	const email = req.body.email;
	const password = req.body.password;

	const sqlInsert =
		'INSERT INTO alumnilogin (fullName, email, password) VALUES (?,?,?);';
	db.query(sqlInsert, [fullName, email, password], (err, result) => {
		console.log(err);
	});
});

app.post('/studentlogin', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const sqlCheck = 'SELECT * FROM studentlogin WHERE email=?;';
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

app.post('/alumnilogin', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const sqlCheck = 'SELECT * FROM alumnilogin WHERE email=?;';
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
		'SELECT event_id,time,event_name,user_id,venue,event_link,DATE_FORMAT(day,"%y-%m-%d") AS day ,TIME_FORMAT(time, "%h:%i:%s %p") AS time FROM event WHERE day>=current_date();';
	db.query(sqlQuery, (err, result) => {
		if (err) {
			res.send({ err: err });
		} else if (result.length > 0) {
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
	const user_id = req.body.user_id;
	const event_link = req.body.event_link;

	const sqlInsert =
		'INSERT INTO event (event_name, venue, time,day,user_id,event_link) VALUES (?,?,?,?,?,?);';
	db.query(
		sqlInsert,
		[event_name, venue, time, day, user_id, event_link],
		(err, result) => {
			if (err) {
				res.send({ err: err });
			} else {
				console.log('Cannot insert');
				res.send(result);
			}
		}
	);
});

app.delete('/delete/:event_id', (req, res) => {
	const event_id = req.params.event_id;
	db.query('DELETE FROM event WHERE event_id = ?', event_id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.delete('/deletePost/:postId', (req, res) => {
	const postId = req.params.postId;
	db.query('DELETE FROM post WHERE post_id = ?', [postId], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
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
	const status = req.body.status;

	const sqlInsert =
		'INSERT INTO post (user_name, img_name,description, status) VALUES (?,?,?,?);';
	db.query(sqlInsert, [author, image, description, status], (err, result) => {
		if (err) {
			res.send({ err: err });
		} else {
			res.send(result);
			console.log(result);
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

app.get('/post/byId/:id', (req, res) => {
	const id = req.params.id;
	const sqlQuery = 'SELECT * FROM post WHERE post_id=?';
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

app.get('/comment/:id', (req, res) => {
	const id = req.params.id;

	const sqlQuery = 'SELECT * FROM comments WHERE post_id=?';
	db.query(sqlQuery, [id], (err, result) => {
		if (err) {
			res.send({ err: err });
		} else {
			res.send(result);
		}
	});
});

app.post('/comment', (req, res) => {
	const postId = req.body.postId;
	const email = req.body.email;
	const text = req.body.text;

	const sqlInsert =
		'INSERT INTO comments (post_id, email, text) VALUES (?,?,?);';
	db.query(sqlInsert, [postId, email, text], (err, result) => {
		if (err) {
			res.send({ err: err });
		} else {
			res.send(result);
		}
	});
});

app.get('/comment', (req, res) => {
	const sqlQuery = 'SELECT * FROM comments';
	db.query(sqlQuery, (err, result) => {
		if (err) {
			res.send({ err: err });
		} else {
			res.send(result);
		}
	});
});

app.put('/updateProfile', (req, res) => {
	const alums = req.body;

	db.query(
		'UPDATE alumni SET alumni_name = ? , location= ? , bio= ? ,  skills= ? , education= ? , current_job= ? , experiences= ? , profile_link=?  WHERE alumni_id = ?',

		[
			alums.name,
			alums.location,
			alums.bio,
			alums.skills,
			alums.edu,
			alums.current_job,
			alums.experience,
			alums.image,
			alums.id,
		],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

app.delete('/deleteProfile/:alumni_id', (req, res) => {
	const alumni_id = req.params.alumni_id;
	db.query(
		'DELETE FROM alumni WHERE alumni_id = ?',
		[alumni_id],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

app.put('/updateBio', (req, res) => {
	const alumni_id = req.body.alumni_id;
	const bio = req.body.bio;
	const sqlUpdate = 'UPDATE  alumni SET bio=? WHERE alumni_id=?';
	db.query(sqlUpdate, [bio, alumni_id], (err, result) => {
		if (err) console.log(err);
	});
});

app.put('/updateSkills', (req, res) => {
	const alumni_id = req.body.alumni_id;
	const skills = req.body.skills;
	const sqlUpdate = 'UPDATE  alumni SET skills=? WHERE alumni_id=?';
	db.query(sqlUpdate, [skills, alumni_id], (err, result) => {
		if (err) console.log(err);
	});
});

app.put('/updateEducation', (req, res) => {
	const alumni_id = req.body.alumni_id;
	const education = req.body.education;
	const sqlUpdate = 'UPDATE  alumni SET education=? WHERE alumni_id=?';
	db.query(sqlUpdate, [education, alumni_id], (err, result) => {
		if (err) console.log(err);
	});
});

app.put('/updateCurrent_job', (req, res) => {
	const alumni_id = req.body.alumni_id;
	const current_job = req.body.current_job;
	const sqlUpdate = 'UPDATE  alumni SET current_job=? WHERE alumni_id=?';
	db.query(sqlUpdate, [current_job, alumni_id], (err, result) => {
		if (err) console.log(err);
	});
});

app.put('/updateExperience', (req, res) => {
	const alumni_id = req.body.alumni_id;
	const experiences = req.body.experiences;
	const sqlUpdate = 'UPDATE  alumni SET experiences=? WHERE alumni_id=?';
	db.query(sqlUpdate, [experiences, alumni_id], (err, result) => {
		if (err) console.log(err);
	});
});

app.put('/updatelocation', (req, res) => {
	const alumni_id = req.body.alumni_id;
	const location = req.body.location;
	const sqlUpdate = 'UPDATE  alumni SET location=? WHERE alumni_id=?';
	db.query(sqlUpdate, [location, alumni_id], (err, result) => {
		if (err) console.log(err);
	});
});

app.put('/updateAlumni_name', (req, res) => {
	const alumni_id = req.body.alumni_id;
	const alumni_name = req.body.alumni_name;
	const sqlUpdate = 'UPDATE  alumni SET alumni_name=? WHERE alumni_id=?';
	db.query(sqlUpdate, [alumni_name, alumni_id], (err, result) => {
		if (err) console.log(err);
	});
});
