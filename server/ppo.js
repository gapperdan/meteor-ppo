Meteor.methods({
    'sendLogMessage': function(){
        console.log("Hello world");
    },
    'insertSession': function(sessionId){
        SessionsList.insert({
          _id: sessionId,
          title: null,
          description: null
        });
    },
    'removeSession': function(sessionId){
        SessionsList.remove({"_id": sessionId});
    }    
});
