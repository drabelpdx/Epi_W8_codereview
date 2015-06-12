App.Answer = DS.Model.extend({
  text: DS.attr(),
  name: DS.attr(),

  question: DS.belongsTo('question', {async: true})
});
