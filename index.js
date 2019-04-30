const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const cors = require('cors')({origin: true});

var db = admin.database();

exports.listhero = functions.https.onRequest((req, res) => {
  cors((req, res, () => {
    if(request.method === 'GET'){
      var ref = db.ref("Marvel");
      ref.once("value", function(snapshot) {
        response.contentType('application/json');
        response.send(JSON.stringify(snapshot.val()));
      });
   }
  }));
});

