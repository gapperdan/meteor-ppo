Meteor.methods({
    'sendLogMessage': function(){
        console.log("Hello world");
    },
    'insertSession': function(sessionId, title, description){
        SessionsList.insert({
          _id: sessionId,
          title: title,
          description: description,
          sizes: [ ]
        });
    },
    'removeSession': function(sessionId){
        SessionsList.remove({"_id": sessionId});
    },
    'updateSessionSize': function(sessionId, sizePoints, sizeDescription){
        SessionsList.update({_id: sessionId},{$push: {sizes: {size: sizePoints, description: sizeDescription}}});
    }
});
