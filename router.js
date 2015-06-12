App.Router.map(function(){
  this.resource('questions', {path: '/'}, function() {
    this.resource('question', {path: '/questions/:question_id'}, function() {
      this.resource('answer');
      this.resource('new-answer');
    });
  });
  this.resource('new-question');


});
