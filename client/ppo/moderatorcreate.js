Template.moderatorCreate.helpers({
  'size': function(){
      // var sessionId = Session.get("sessionId");
      return SessionsList.find({_id: Session.get("sessionId")},{sort: {points: 1}})
  },
  'title': function(){
      console.log("trying to get title for _id="+Session.get("sessionId"));
      return SessionsList.find({_id: Session.get("sessionId")}, {_id: 0, title: 1});
  },
  'description': function(){
      console.log("trying to get description for _id="+Session.get("sessionId"));
      return SessionsList.find({_id: Session.get("sessionId")}, {_id: 0, description: 1});
  },
});

Template.moderatorCreate.events({
  'submit form': function(event){
      event.preventDefault();
      var title = event.target.title.value;
      var description = event.target.title.value;
      var sessionId = Random.id(24);
      console.log(sessionId);
      Session.set("sessionId", sessionId);
      Meteor.call('insertSession', sessionId, title, description);
      Router.go('add-size');
  },
  'click .button-cancel': function(){
      Router.go('/');
  },
  'click .button-add': function(event){
      event.preventDefault();
      var title = event.target.title.value;
      var description = event.target.title.value;
      var sizePoints = Number(event.target.sizePoints.value);
      var sizeDescription = event.target.sizeDescription.value;
      Meteor.call('updateSessionSize', Session.get("sessionId"), sizePoints, sizeDescription);
      event.target.sizeDescription = '';
  }
});
