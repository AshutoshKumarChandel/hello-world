import { AbstractControl } from "@angular/forms";

export class PasswordValidators {
    static validateOldPassword(control: AbstractControl) {
        return new Promise(resolve => {
            if (control.value !== "1234Qwer$") {
                return resolve({ invalidOldPassword: true });
            }
            return resolve(null);
        });
    }

    static passwordShouldMatch(formControl: AbstractControl) {
        let newPassword = formControl.get('newPassword').value;
        let confirmPassword = formControl.get('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            return { passwordsDontMatch: true };
        }

        return null;
    }
}