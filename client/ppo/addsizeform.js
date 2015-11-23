Template.addSizeForm.helpers({
  'sizingSession': function(){
      return SessionsList.findOne({_id: Session.get("sessionId")});
  }
});

Template.addSizeForm.events({
  'submit form': function(event){
      event.preventDefault();
      console.log("add clicked");
      var sizePoints = Number(event.target.sizePoints.value);
      var sizeDescription = event.target.sizeDescription.value;

      console.log("adding sizePoints="+sizePoints+",sizeDescription="+sizeDescription);
      Meteor.call('updateSessionSize', Session.get("sessionId"), sizePoints, sizeDescription);
      event.target.sizeDescription = '';
  }
});
