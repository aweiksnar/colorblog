if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'The First post',
    content: 'This is the first fixture post',
  });

  Posts.insert({
    title: 'Second post',
    content: 'This is the second fixture post',
  });

  Posts.insert({
    title: 'A third post',
    content: 'This is another post',
  });
  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      content: "Test Post Content...."
    });
  }
}