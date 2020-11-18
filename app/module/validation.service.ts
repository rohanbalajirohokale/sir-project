import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static required2: any;

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any)
    {
      let config :any= {
        'required': 'First Name is Required',
      
        'invalidEmailAddress': 'Invalid email address',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
      };
 
      return config[validatorName];
    }
   
 
  
  
    static emailValidator(control: { value: string; })
    {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/))
      {
        return null;
      }
      else
      {
        return { 'invalidEmailAddress': true };
      }


  
}
}
