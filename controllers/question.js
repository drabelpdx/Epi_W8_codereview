App.QuestionController = Ember.ObjectController.extend({
  needs: ['question'],
  isEditing: false,
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
        var answer = this.get('model');
        var question = this.get('controllers.question.model');
        question.get('answers').removeObject(answer);
        question.save();

        this.transitionToRoute('question', question.id);

      }
    }
  }
});
