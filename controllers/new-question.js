App.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        asked: this.get('asked'),
        description: this.get('description'),
        author: this.get('author')
      });

      newQuestion.save();

      this.transitionToRoute('questions');
    }
  }
});
