Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('moderatorStart');
});

Router.route('moderator-create', function(){
  this.render('moderatorCreate');
});

Router.route('add-size', function(){
  this.render('addSizeForm');
});

Router.route('join-session/id/:paramSessionId', function(){
  var paramSessionId = this.params.paramSessionId;
  console.log("paramSessionId="+paramSessionId);
  Session.set("sessionId", paramSessionId);
  this.render('joinSession');
})
