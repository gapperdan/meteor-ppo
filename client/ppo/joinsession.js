Template.joinSession.helpers({
  'sizingSession': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")});
  }
});

Template.joinSession.events({
  'submit form': function(event){
    var name = event.target.name.value;
    event.preventDefault();
    console.log("name="+name);

    Meteor.call('insertSizer', Session.get("sessionId"), name);
    //Router.go("/");//testing only, has to go the sizing page
  }
});
