// Template.playersList.helpers({
//   'sizes': function(){
//       return SessionList.find({},{sort: {score: -1, name: 1}})
//   }
// });

Template.moderatorCreate.events({
  'submit form': function(event){
      event.preventDefault();
      console.log("submit prevented!")
  },
  'click .button-cancel': function(){
      Router.go('/');
  }
});
