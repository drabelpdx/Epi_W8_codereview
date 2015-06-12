App.AnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    deleteAnswer: function() {
      if (confirm('Are you sure?')) {
        var answer = this.get('model');
        var question = this.get('controllers.question.model');
        question.get('answers').removeObject(answer);
        question.save();
        answer.destroyRecord();

        this.transitionToRoute('question', question.id);

      }
    }
  }
});
