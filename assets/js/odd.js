// ProRubrics 
// [Chris Chapman](http://twitter.com/_chapman). 
// Using Firebase adapter to persist Backbone models. based on [Backfire](https://github.com/firebase/backfire)

// Load the application once the DOM is ready, using anoyn function
$(function(){

  window.App = {
    Models          : {},
    Views           : {},
    Collections     : {},
    Routes          : {},
  }

  //
  window.template = function(id) {
    return _.template($('#' + id).html());
  }

  App.Models.Task = Backbone.Model.extend({

  });

  App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task,
  });
  App.Views.Task = Backbone.View.extend({
    tagName: 'li',
    template: template('huffDuff'),
    events:{
      'click' : 'handleIt'
    },
    handleIt: function(){
      alert('hit');
    },
    render: function(){
      //this.$el.html(this.model.get('title'));
       $('.target').append( this.template( this.model.toJSON() ) );

      return this;
    }
  });

App.Views.Tasks = Backbone.View.extend({
  tagName: 'ul',
  render: function(){
    this.collection.each(this.addOne,this);
    return this;
  },
  addOne: function(task){
    //console.log('===', task.toJSON());
    var taskView = new App.Views.Task({model:task});
    this.$el.append(taskView.render().el);
  }
});


var tasksCollection = new App.Collections.Tasks([
{title:"dssds"},{title:"hie123123tter"},{title:"hitter"}
])



//var taskView = App.Views.Task({model:task});
var tasksView = new App.Views.Tasks({collection:tasksCollection});
tasksView.render();
$(".target").append( tasksView.el );

});



