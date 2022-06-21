const getDateObj = (dateObj: Date) => {


    const addZero = (number: number) => {
        if (number <= 9) {
            return "0" + number
        } else {
            return number
        }
    }

    const month = addZero(dateObj.getUTCMonth() + 1)
    const day =  addZero(dateObj.getUTCDate())
    const year =  dateObj.getUTCFullYear()

    const hours =  addZero(dateObj.getHours())
    const minutes =  addZero(dateObj.getMinutes())
    const seconds =  addZero(dateObj.getSeconds())

    return {
        month,
        day,
        year,
        hours,
        minutes,
        seconds,
    }
}

export default getDateObj