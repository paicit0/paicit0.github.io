regexp = /^[A-Z]/
let chk_uppercase = function str(n) {
    if (regexp.test(n)) {

        console.log(n + " has the first character as uppercase");
    } else {
        console.log(n + " does not have the first character as uppercase");
    }
}

chk_uppercase("Kku")
chk_uppercase("kku")