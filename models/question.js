App.Question = DS.Model.extend({
  asked: DS.attr(),
  description: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
