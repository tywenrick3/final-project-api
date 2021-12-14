const express = require('express');
const router = express.Router();
// Require Firestore
const firestore = require('firebase/firestore');
// Init Firestore Database
const db = firestore.getFirestore();

// Get all articles from a single user firebase
router.get('/:userId', (req, res) => {
	const userId = req.params.userId;
	//const userposts = firestore.getDoc(firestore.doc(db, 'users', userId));
	//const users = firestore.getDocs(firestore.collection(db, 'users'));
	const query = firestore.query(
		firestore.collection(db, 'users'),
		where('userId', '==', userId)
	);

	const usersArray = [];

	query.then(
		function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				usersArray.push(doc.data());
			});
			return res.send(usersArray);
		}.catch(function (error) {
			console.log('Error:', error);
			return res.send(error);
		})
	);

	// query
	// 	.then((response) => {
	// 		response.forEach((doc) => {
	// 			const docData = doc.data();
	// 			console.log(docData);
	// 			docData.id = doc.id;
	// 			usersArray.push(docData);
	// 		});
	// 		return res.send(usersArray);
	// 	})
	// 	.catch(function (error) {
	// 		console.log('Error:', error);
	// 		return res.send(error);
	// 	});
});

module.exports = router;
