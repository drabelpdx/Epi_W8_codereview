App.Router.map(function(){
  this.resource('questions', {path: '/'});
  this.resource('new-question');
  this.resource('question', {path: '/questions/:question_id'});

});
