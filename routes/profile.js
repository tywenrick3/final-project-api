const express = require('express');
const router = express.Router();
// Require Firestore
const firestore = require('firebase/firestore');
// Init Firestore Database
const db = firestore.getFirestore();

// Get all articles from a single user firebase
router.get('/:userId', (req, res) => {
	const uid = req.params.userId;
	const query = firestore.query(
		firestore.collection(db, 'users'),
		firestore.where('userId', '==', uid)
	);
	const queryPromise = firestore.getDocs(query);
	const usersArray = [];

	queryPromise
		.then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				usersArray.push(doc.data());
			});
			return res.send(usersArray);
		})
		.catch(function (error) {
			return res.send(error);
		});
});

module.exports = router;
