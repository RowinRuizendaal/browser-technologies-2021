const TodayDate = new Date();
const formatData = `${TodayDate.getDate()}/${(TodayDate.getMonth() + 1)}/${TodayDate.getFullYear()}`


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


module.exports = {
    map
}