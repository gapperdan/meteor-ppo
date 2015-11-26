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
  }
});
