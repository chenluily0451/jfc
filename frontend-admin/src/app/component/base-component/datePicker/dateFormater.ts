/**
 * Created by jin on 6/13/17.
 */


const startDateFormatter = (date: any) => {

    if (date) {
        const dateParts = date.trim().split('-');
        if (date && dateParts.length === 3) {
            return {
                year: Number(dateParts[0]),
                month: Number(dateParts[1]),
                day : Number(dateParts[2])
            }
        }
    }

    return date
}

const postDateFormatter = (date: any) => {

    if ( date && typeof date.year !== 'undefined' ) {
        return date.year + '-' + date.month + '-' + date.day;
    }
    return null
}



export { startDateFormatter, postDateFormatter }
