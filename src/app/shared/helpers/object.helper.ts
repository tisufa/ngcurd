import { IObject } from 'src/app/core/interfaces';

export class ObjectHelper {
  public static resolveValue(obj: IObject, field?: string): any {
    if (!field || !obj || !field) return obj;
    const fieldSplit = field.split('.');
    let result = { ...obj };
    while (fieldSplit.length > 0) {
      const firstSplit = fieldSplit.shift() as string;
      result = result[firstSplit];
      if (!result) fieldSplit.splice(0);
    }
    return result;
  }
}
