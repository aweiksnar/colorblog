Meteor.subscribe('posts');
postsHandle = Meteor.subscribeWithPagination('posts', 10);