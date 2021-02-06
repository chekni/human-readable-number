module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    let hundred = 'hundred';
    let translate = new Map([
        [0, ''],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety'],
        [100, 'hundred']
    ]);
    if (number <= 20) {
        return `${translate.get(number)}`;
    }
    if (number < 100) {
        return (number % 10 == 0) ? `${translate.get(number % 100 - number % 10)}` : `${translate.get(number % 100 - number % 10)} ${translate.get(number % 10)}`;
    } else {
        let firstPart = `${translate.get((number % 1000 - number % 100) / 100)} ${hundred}`;
        if (number % 100 == 0) return firstPart;
        if ((number % 100 - number % 10) < 20) {
            return `${firstPart} ${translate.get(number % 100)}`;
        } else if (number % 10 == 0) {
            return `${firstPart} ${translate.get(number % 100 - number % 10)}`;
        } else return `${firstPart} ${translate.get(number % 100 - number % 10)} ${translate.get(number % 10)}`;

    }
}

// console.log(toReadable(927));