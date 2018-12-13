
export class AppModel {

  constructor(
    public title?: string,
    public checked: boolean = false,
    public category?: Category,
    public text?: string) {

      //Object.keys(Category);

    /*  if (Category.BILLING === category) {
        console.log('');
      } */

  }
}

export enum Category {      // statikus fix adattag,konstans értékeket tudunk felvenni hozzá,mindig u.a a példányt fogja visszaadni (enum)
    BILLING = 'BILLING',
    HOUSE = 'HOUSE',
    SHOPPING = 'SHOPPING',
    TRAVEL = 'TRAVEL'
}

export interface AppInterface {
    title?: string;
    checked?: boolean;
    category?: Category;
    text?: string
  }