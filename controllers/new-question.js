App.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var controller = this;
      var newQuestion = this.store.createRecord('question', {
        asked: this.get('asked'),
        description: this.get('description'),
        author: this.get('author')
      });

      newQuestion.save().then(function(){
        controller.set('asked', '');
        controller.set('description', '');
        controller.set('author', '');
      });
      
      this.transitionToRoute('questions');
    }
  }
});
