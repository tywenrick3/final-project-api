const express = require('express');
const router = express.Router();
// Require Firestore
const firestore = require('firestore/firestore');
// Ref DB
const db = firestore.getFirestore();

// API Endpoint for sumbitting data through form
router.get('/', (req, res) => {
	const queryParams = req.query; // Query params from URL
	const { imageAlt, imageSrc, userMessage, userId, userName } = queryParams;
	// collection name = users
	const setUserPost = firestore.setDoc(firestore.doc(db, 'users'), {
		imageAlt,
		imageSrc,
		userMessage,
		userId,
		userName,
	});

	setUserPost
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			console.warn(error);
			res.send(error);
		});
});

module.exports = router;