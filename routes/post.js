const express = require('express');
const router = express.Router();
// Require Firestore
const firestore = require('firebase/firestore');
// Init Firestore Database
const db = firestore.getFirestore();

// Get single article from firebase
router.get('/:id', (req, res) => {
	const userId = req.params.id;
	const userpost = firestore.getDoc(firestore.doc(db, 'users', userId));

	userpost
		.then((response) => {
			const post = response.data();
			if (post) return res.send(post);
			return res.send({ userMessage: `no doc....` });
		})
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
