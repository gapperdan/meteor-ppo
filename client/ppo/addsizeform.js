Template.addSizeForm.helpers({
  'sizingSession': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")});
  }
});

Template.addSizeForm.events({
  'submit form': function(event){
      event.preventDefault();
      console.log("add clicked");
      var points = Number(event.target.points.value);
      var description = event.target.size.value;
      Meteor.call('updateSessionSize', Session.get("sessionId"), points, description);
      event.target.desciption = '';
  },
  'click .cancel': function(event){
      event.preventDefault();
      Meteor.call('removeSession', Session.get("sessionId"));
      Router.go("/");
      console.log("cancel clicked");
  },
  'click .start': function(event){
      event.preventDefault();
      console.log("start clicked");
      console.log("session="+Session.get("sessionId"));
      Router.go("/moderator-session/ids/"+Session.get("sessionId"));
  }
});
