Template.sizesList.helpers({
  'size': function(){
    return SessionsList.findOne({_id: Session.get("sessionId")}).sizes;    
  }
});
