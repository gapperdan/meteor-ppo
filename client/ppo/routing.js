Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('moderatorStart');
});

Router.route('moderatorCreate', function(){
  this.render('moderatorCreate');
});
