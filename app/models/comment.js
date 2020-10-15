import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr text;
  @attr('date') publishedAt;
  @belongsTo post;
}
