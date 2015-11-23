// Template.moderatorCreate.helpers({
//   'size': function(){
//       // var sessionId = Session.get("sessionId");
//       return SessionsList.findOne({_id: Session.get("sessionId")},{fields: {sizes}},{sort: {points: 1}});
//   }
// });

Template.moderatorCreate.events({
  'submit form': function(event){
      event.preventDefault();
      var title = event.target.title.value;
      var description = event.target.description.value;
      var sessionId = Random.id(24);
      console.log(sessionId);
      Session.set("sessionId", sessionId);
      Meteor.call('insertSession', sessionId, title, description);
      Router.go('add-size');
  },
  'click .button-cancel': function(){
      Router.go('/');
  }
});
