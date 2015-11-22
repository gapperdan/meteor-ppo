Template.addSizeForm.helpers({
  'sizingSession': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")});
  }

});

Template.addSizeForm.events({
  'click .button-add': function(){
    event.preventDefault();
    console.log("add clicked");
  }
});
