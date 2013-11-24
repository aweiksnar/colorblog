Posts = new Meteor.Collection('posts');


Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user();

    if (!user)
      throw new Meteor.Error(401, "You need to login to post");

    if (!postAttributes.content)
      throw new Meteor.Error(422, 'Please fill in a with Content');

    var post = _.extend(_.pick(postAttributes, 'title', 'content'), {
      userId: user._id, 
      submitted: new Date().getTime()
    });

    var postId = Posts.insert(post);

    return postId;
  }
});

//only logged in users can post
Posts.allow({
  insert: function(userId, doc) {
    return !! userId;
  },
  update: ownsDocument,
  remove: ownsDocument
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    //these fields can be edited
    return (_.without(fieldNames, 'title', 'content').length > 0);
  }
});