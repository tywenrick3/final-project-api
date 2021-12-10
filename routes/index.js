const express = require('express');
const router = express.Router();
// Require Firestore
const firestore = require('firebase/firestore');
// Init Firestore Database
const db = firestore.getFirestore();

//Get all articles from firebase
router.get('/', (req, res) => {
	const users = firestore.getDocs(firestore.collection(db, 'users'));

	const usersArray = [];

	users
		.then((response) => {
			response.forEach((doc) => {
				const docData = doc.data();
				docData.id = doc.id;
				usersArray.push(docData);
			});
			return res.send(usersArray);
		})
		.catch(function (error) {
			console.log('Error:', error);
			return res.send(error);
		});
});

module.exports = router;
