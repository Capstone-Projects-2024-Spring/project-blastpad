const express = require('express');
const path = require('path');

class ClassroomServer {

	constructor() {
		this.port = 3001
		this.app = express()
		this.app.use(express.json());
        
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use('/', express.static(path.join(__dirname, 'views')))

		// this.set_routes(this.app);

		this.app.listen(this.port, () => {
		  console.log(`Classrooms is listening at http://localhost:${this.port}`)
		})
	}

	set_routes(app) {
        // custom routes
	}
}

var classrooms = new ClassroomServer();