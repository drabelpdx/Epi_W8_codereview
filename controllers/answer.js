App.AnswerController = Ember.ObjectController.extend({
  	isEditing: false,
  	actions: {
  		edit: function() {
  			this.set('isEditing', true);
  		},
  		save: function() {
  			this.get('model').save();
  			this.set('isEditing', false);
  		},
  		delete: function(){
  			if(confirm("are you sure?")) {
  				this.get('model').destroyRecord();
  				this.transitionToRoute('question');
  			}
  		}
  	}

  });
