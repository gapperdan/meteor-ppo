Template.sizesList.helpers({
  'sizeEntry': function(){
    return SessionsList.findOne({_id: Session.get("sessionId")}).sizes;
  }
});
