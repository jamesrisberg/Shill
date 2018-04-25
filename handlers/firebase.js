import firebase from 'react-native-firebase'
const config = {
    apiKey: "AIzaSyDblTESEB1SbAVkpy2q39DI2OHphL2-Jxw",
    authDomain: "fun-food-friends-eeec7.firebaseapp.com",
    databaseURL: "https://fun-food-friends-eeec7.firebaseio.com",
    projectId: "fun-food-friends-eeec7",
    storageBucket: "fun-food-friends-eeec7.appspot.com",
    messagingSenderId: "144750278413"
};
firebase.initializeApp(config);

export const sendSwipeData = (coinID, direction) => {
    db.collection('userSwipeData').doc(coinID).set({
        coin: coinID,
        direction: direction
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    updateAllSwipeData();
};

const updateAllSwipeData = (coinID, direction) => {
    var allSwipeData = db.collection('allSwipeData').doc(coinID);

    allSwipeData.get()
    .then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());

            if (direction == 'left') {
                var newCount = doc.data().left + 1;
                allSwipeData.set({
                    left: newCount
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            } else {
                var newCount = doc.data().right + 1;
                allSwipeData.update({
                    right: newCount
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");

            if (direction == 'left') {
                allSwipeData.set({
                    left: 1
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            } else {
                allSwipeData.update({
                    right: 1
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            }
        }
    })
    .catch(function(error) {
        console.error("Error getting document: ", error);
    });
};

export const getSwipeDataForCoin = (coinID) => {
    db.collection('userSwipeData').doc(coinID).get().then((doc) => {
        if (doc.exists) {
            console.log(`${doc.data()}`);
        } else {
            console.log('No such doc!');
        }
    });
};

export const getAllSwipeData = () => {
    db.collection('allSwipeData').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
};

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;