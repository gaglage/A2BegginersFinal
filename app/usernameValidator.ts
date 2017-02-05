import { FormControl } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: FormControl) {
        console.log(control);
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }

}