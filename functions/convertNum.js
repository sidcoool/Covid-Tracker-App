const convertNum = (num) => {
    if (num >= 10000000) {
        return (num / 10000000).toPrecision(4).toString() + ' Cr'
    }
    else if (num >= 100000) {
        return (num / 100000).toPrecision(4).toString() + ' Lakh'
    }
    else if (num >= 1000) {
        return (num / 1000).toPrecision(4).toString() + ' K'
    }
    else {
        return num
    }
}

export default convertNum