/**
 * Created by Vladimir on 12/31/17.
 */
export class Feedback {
  firstname: string;
  lastname: string;
  telnum: number;
  email: string;
  agree: boolean;
  contacttype: string;
  message: string;
};

export const ContactType = ['None', 'Tel', 'Email'];
