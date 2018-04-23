// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    if (isPrime(longestPalindrome(S).length)) { return "YES"; }
    return "NO";
}

function isPalindrome(str) {
    var rev = str.split('').reverse().join('');
    return str == rev;
}

function longestPalindrome(S) {

    var max_length = 0,
        maxp = '';

    for (var i = 0; i < S.length; i++) {
        var subs = S.substr(i, S.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (isPalindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;
}

function isPrime(num) {
    var isPrime = true;
    if (num >= 2) {
        if (num == 2 || num == 3) {
            isPrime = true;
        }
        else if (num % 2 == 0) {
            isPrime = false;
        }
        else {
            for (i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
    }
    else {
        isPrime = false;
    }
    return isPrime;
}