import { FormControl } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: FormControl) {
        console.log(control.value);
        console.log(control.value.indexOf(' '));
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }

}