/**
 * Created by Vladimir on 12/14/17.
 */
import { Comment } from './comment';

export class Dish {
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}
