const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

//import firebase
const firebase = require('firebase/app');
//get config object so we can communicate w firebase
const firebaseConfig = {
	apiKey: 'AIzaSyA2AJBUmRoyxWZOaWC9Sw_XU0IoMPq4x30',
	authDomain: 'final-project-fall-2021-tyw.firebaseapp.com',
	projectId: 'final-project-fall-2021-tyw',
	storageBucket: 'final-project-fall-2021-tyw.appspot.com',
	messagingSenderId: '117157464897',
	appId: '1:117157464897:web:7607e9d033293780d2efc0',
	measurementId: '${config.measurementId}',
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);
	next();
});

app.use('/', indexRoute);

app.listen(port, () => {
	console.log(`App Listening on localhost ${port}`);
});
