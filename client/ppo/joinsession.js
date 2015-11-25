Template.joinSession.helpers({
  'sizingSession': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")});
  }
});
