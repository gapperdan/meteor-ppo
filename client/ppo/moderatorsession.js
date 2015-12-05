Template.moderatorSession.helpers({
  'sizingSession': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")});
  },
  'sizers': function(){
      //this returns _id and the sizers array; necessary because cannot exlude _id from the 'fields' projection
      var sizingSession = SessionsList.find({_id: Session.get("sessionId")},{fields: {sizers:1}}).fetch();
      //pluck out the sizers array from the result
      var names = _.chain(sizingSession).pluck('sizers').flatten().value();
      //return the sizers array
      return names;
  },
  'sessionUrl': function(){
      return "/session/ids/"+Session.get("sessionId");
  },
  'currentStory': function(){
      return StoriesList.findOne({sessionId: Session.get("sessionId"), sized: false});
  }
});

Template.moderatorSession.events({
  'submit form': function(event){
      console.log("clicked size-story");
      event.preventDefault();
      var description = event.target.description.value;
      var storyId = Random.id(24);
      Session.set("storyId", storyId);
      Meteor.call('insertStory', Session.get("sessionId"), storyId, description);
  }
});
