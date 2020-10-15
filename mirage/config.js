export default function() {
  this.get('/posts');
  this.get('/posts/:id');
  this.post('/comments');
}
