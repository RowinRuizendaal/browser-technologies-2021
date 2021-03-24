const TodayDate = new Date();
const formatData = `${TodayDate.getDate()}/${(TodayDate.getMonth() + 1)}/${TodayDate.getFullYear()}`
let postvalue = ''

const map = (dataset) => {
    return dataset.map((el) => {
        if (formatData > el.opening || formatData === el.opening) {
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
    return dataset.map((el) => {
        if (value === el.student) {
            return true
        }
        return false
    })
}

const test = (value) => {
    if (value) {
        return postvalue = value
    }
    console.log('value is', postvalue)
    return postvalue
}


module.exports = {
    map,
    checkstudent,
    test
}