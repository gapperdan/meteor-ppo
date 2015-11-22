Template.addSizeForm.helpers({
  'title': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")}).title;
  },
  'description': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")}).description;
  }
})
