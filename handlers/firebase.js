import firebase from 'react-native-firebase'

const config = {
    apiKey: "AIzaSyB-NltYRrLnqJLMk3kdd_2SepoBar7_kA4",
    authDomain: "shill-dc796.firebaseapp.com",
    databaseURL: "https://shill-dc796.firebaseio.com",
    projectId: "shill-dc796",
    storageBucket: "shill-dc796.appspot.com",
    messagingSenderId: "745503473697"
};
firebase.initializeApp(config);

export const sendSwipeData = (coinID, direction) => {
    db.collection('userData').doc(auth.currentUser.uid).collection('swipeData').doc(coinID).set({
        coin: coinID,
        direction: direction
    })
    .then(() => {
        updateAllSwipeData(coinID, direction);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

const updateAllSwipeData = (coinID, direction) => {
    var allSwipeData = db.collection('allSwipeData').doc(coinID);

    allSwipeData.get()
    .then(function(doc) {
        var leftCount = direction == 'left' ? 1 : 0;
        var rightCount = direction == 'right' ? 1 : 0;

        if (doc.exists) {
            console.log("Document data:", doc.data());

            if (direction == 'left') {
                leftCount += doc.data().left;
                rightCount = doc.data().right;
            } else {
                leftCount = doc.data().left;
                rightCount += doc.data().right;
            }
        }

        allSwipeData.set({
            left: leftCount,
            right: rightCount
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    })
    .catch(function(error) {
        console.error("Error getting document: ", error);
    });
};

export const getSwipeDataForCoin = (coinID) => {
    db.collection('allSwipeData').doc(coinID).get().then((doc) => {
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

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;