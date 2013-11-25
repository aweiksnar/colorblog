Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {limit: postsHandle.limit()})
  },
  postsReady: function() {
    return postsHandle.ready();
  },
  allPostsLoaded: function() {
    return postsHandle.ready() && 
      Posts.find().count() < postsHandle.loaded();
  }
});


Template.postsList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    postsHandle.loadNextPage();
  }
});