App.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var controller = this;
      var answer = this.store.createRecord('answer', {
        text: this.get('text'),
        name: this.get('name')
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save().then(function(){
        controller.set('text', '');
        controller.set('name', '');
      });

      this.transitionToRoute('question', question.id);
    }
  }
});
