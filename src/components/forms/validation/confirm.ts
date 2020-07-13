import {Validator} from '@/types';

export default function confirmFactory(confirmed: string): Validator {
  return function (value: string): boolean | string {
    if (confirmed === value){
      return true;
    }
    return 'Value is not same'
  }
}