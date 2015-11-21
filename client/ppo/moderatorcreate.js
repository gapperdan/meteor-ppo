Template.moderatorCreate.events({
  'submit form': function(event){
      event.preventDefault();
      console.log("submit prevented!")
  },
  'click .button-cancel': function(){
      Router.go('/');
  }
});
