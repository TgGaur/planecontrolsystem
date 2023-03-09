
var firebaseConfig = {
    apiKey: "AIzaSyBPqqfAIOFBhilsH4XcpBVvQptd3xjJi8k",
    authDomain: "forplane20.firebaseapp.com",
    databaseURL: "https://forplane20-default-rtdb.firebaseio.com",
    projectId: "forplane20",
    storageBucket: "forplane20.appspot.com",
    messagingSenderId: "9897880814520",
    appId: "1:989780814520:web:7c03c00d5a2f41510b624d"
};
firebase.initializeApp(firebaseConfig);

document.addEventListener("keypress", kep)


function kep(event) {
    keypress = event.keyCode;
    console.log(keypress);

    if (keypress >= 48 && keypress <= 57) {
        console.log("ok")
        firebase.database().ref("/").child("speed").update({
            Speed: event.key
        });
    }


    if (event.key == "s") {
        console.log("elevationup");
        firebase.database().ref("/").child("elevation").update({
            Elevation: 1
        });
    }
    if (event.key == "w") {
        console.log("elevationdown");
        firebase.database().ref("/").child("elevation").update({
            Elevation: 11
        });
                }

    if (event.key == "a") {
        console.log("pitchleft");
        firebase.database().ref("/").child("pitch").update({
            Pitch: 2
        });
    }
    if (event.key == "d") {
        console.log("pitchright");
        firebase.database().ref("/").child("pitch").update({
            Pitch: 22
        });
    }
}

document.addEventListener("keyup", keyuppp)


function keyuppp(event) {
    console.log("keyup")

    if (event.keyCode == 83 || event.keyCode == 87) {
        console.log("elevationoff");
        firebase.database().ref("/").child("elevation").update({
            Elevation: 0
        });
    }
    if (event.keyCode == 65 || event.keyCode == 68) {
        console.log("pitchoff");
        firebase.database().ref("/").child("pitch").update({
            Pitch: 0
        });
    }


}
















