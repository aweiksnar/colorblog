Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val()
    }
    
    Meteor.call('post', post, function(error, id) {
      if (error)
        return alert(error.reason);
  
      Meteor.Router.to('postPage', id);
    });
  }
});