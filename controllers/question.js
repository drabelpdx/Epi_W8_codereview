App.QuestionController = Ember.ObjectController.extend({
  needs: ['question', 'answers', 'answer'],
  isEditing: false,

  // answers: Ember.computed.alias('model.answers'),
  // answer: Ember.computed.alias('model.answer'),

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var asked = this.get('model');
      var question = this.get('controllers.question.model');
      asked.save();
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    deleteAnswer: function() {
      if (confirm('Are you sure?')) {

        var question = this.get('controllers.question.model');
        var answers = this.get('model.answers');
        var answer = answers.get('model.answer', {id: '55g0n'});

        answers.removeObject(answer);
        question.save();
        answer.destroyRecord();

        this.transitionToRoute('question', question.id);

      }
    }
  }
});
