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
