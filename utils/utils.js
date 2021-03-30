const TodayDate = new Date();
const formatData = `${TodayDate.getDate()}${(TodayDate.getMonth() + 1)}${TodayDate.getFullYear()}`
let postvalue = ''

const map = (dataset) => {
    return dataset.map((el) => {
        // convert date to whole number for comparing
        const convert = el.opening.replace('-', '').replace('-', '')
        if (formatData > convert || formatData === convert) {
            return {
                'Subject': el.Subject,
                'id': el.id,
                'image': el.image,
                'opening': el.opening,
                'locked': false,
            }
        } else {
            return {
                'Subject': el.Subject,
                'id': el.id,
                'image': el.image,
                'opening': el.opening,
                'locked': true,
            }
        }
    })
}

const checkstudent = (dataset, value) => {
    for (let i = 0; i < dataset.length; i++) {
        if (dataset[i].student === value) {
            return true
        }
    }
    return false

}

const uuid = (value) => {
    if (value) {
        return postvalue = value
    }
    return postvalue
}


module.exports = {
    map,
    checkstudent,
    uuid,
}