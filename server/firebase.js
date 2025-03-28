// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://your-firebase-db.firebaseio.com",
// });

// const db = admin.firestore();
// module.exports = { db };

const admin = require("firebase-admin");

// Check if Firebase is already initialized
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(require("./serviceAccountKey.json")),
    });
}

module.exports = admin;
