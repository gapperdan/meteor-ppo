Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('moderatorStart');
});

Router.route('moderator-create', function(){
  var sessionId = Random.id(24);
  console.log(sessionId);
  Meteor.call('insertSession', sessionId)
  this.render('moderatorCreate');
});
