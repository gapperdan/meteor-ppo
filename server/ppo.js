Meteor.methods({
    'sendLogMessage': function(){
        console.log("Hello world");
    },
    'insertSession': function(sessionId, title, description){
        SessionsList.insert({
          _id: sessionId,
          title: title,
          description: description,
          sizes: [ ],
          sizers: [ ]
        });
    },
    'removeSession': function(sessionId){
        SessionsList.remove({"_id": sessionId});
    },
    'updateSessionSize': function(sessionId, points, size){
        SessionsList.update({_id: sessionId},{$push: {sizes: {points: points, size: size}}});
    },
    'insertSizer': function(sessionId, name){
        console.log("inserting name="+name);
        SessionsList.update({_id: sessionId},{$push: {sizers: {name: name}}});
    }
});
