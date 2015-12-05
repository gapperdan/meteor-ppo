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

Router.route('moderator-session/ids/:paramSessionId', function(){
  console.log("path="+Router.current().url);
  var paramSessionId = this.params.paramSessionId;
  Session.set("sessionId", paramSessionId);
  this.render('moderatorSession');
});

Router.route('session/ids/:paramSessionId', function(){
  var paramSessionId = this.params.paramSessionId;
  console.log("paramSessionId="+paramSessionId);
  Session.set("sessionId", paramSessionId);
  this.render('joinSession');
})
