import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PostController extends Controller {
  @tracked commentDraft;

  @action
  addComment() {
    const comment = this.store.createRecord('comment', {
      text: this.commentDraft,
      publishedAt: new Date(),
      post: this.model
    });
    comment.save();
    this.commentDraft = "";
  }
}
