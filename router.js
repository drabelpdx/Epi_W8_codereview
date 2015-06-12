App.Router.map(function(){
  this.resource('questions');
  this.resource('question', {path: 'question/:question_id'});
  this.resource('answers'),
  this.resource('new-question')

});
