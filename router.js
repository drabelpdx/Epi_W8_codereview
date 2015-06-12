App.Router.map(function(){
  this.resource('questions');
  this.resource('new-question');
  this.resource('question', {path: '/questions/:question_id'});

});
