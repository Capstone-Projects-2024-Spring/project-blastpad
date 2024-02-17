const express = require('express');
const path = require('path');
var passport = require('passport');
var session = require('express-session');
var passport_local = require('passport-local');

passport.use(new passport_local((username, password, done) => {
	console.log(username, password)
	if (username != "j_snarr") { return done(null, false); }
	if (password != "blastpadforever") { return done(null, false); }
	return done(null, {session: 1});
}
));

passport.serializeUser(function(user, cb) {
	cb(null, { session: user.session});
});

passport.deserializeUser(function(user, cb) {
	return cb(null, user);
});

// pull admin/password from file or database

class ClassroomServer {
	constructor() {

		this.port = 3001
		this.app = express()
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));

		this.app.use(session({
			secret: process.env.SESSION_SECRET || "VERY SECRET PHRASE",
			resave: false,
			saveUninitialized: false,
		  }));
		  
		this.app.use(passport.initialize());
		this.app.use(passport.session());

        this.app.use(express.static(path.join(__dirname, 'public')));
		
		this.set_routes(this.app);
		this.app.use('/', express.static(path.join(__dirname, 'views')))

		this.app.listen(this.port, () => {
		  console.log(`Classrooms is listening at http://localhost:${this.port}`)
		})
	}

	set_routes(app) {
		
		app.get('/whoami', (req, res, next) => {
			console.log(req.user);
		})


		app.post('/logout', (req, res, next) =>  {
			req.logout((err) => {
			if (err) { return next(err); }
			res.redirect('/');
			});
		});
		
		app.post('/login/go', passport.authenticate("local", { failureRedirect: '/login.html' }), (req, res) => {
			res.redirect('/index.html')
		});
	}
}

var classrooms = new ClassroomServer();