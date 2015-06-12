App.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        text: this.get('text'),
        name: this.get('name')
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.transitionToRoute('question', question.id);
    }
  }
});
