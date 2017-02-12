"use strict";
var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.matchPassword = function (control) {
        console.log(control);
        if (control.value != "") {
            return { dontMatch: true };
        }
        return null;
    };
    PasswordValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            //simulate a connection to server
            setTimeout(function () {
                if (control.value == 'gabi') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    };
    PasswordValidators.cannotContainSpace = function (control) {
        console.log(control);
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    return PasswordValidators;
}());
exports.PasswordValidators = PasswordValidators;
//# sourceMappingURL=passwordValidator.js.map