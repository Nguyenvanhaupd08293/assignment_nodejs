const getHomePage = (req, res) => {
    const today = new Date();
    const currentDay = today.getDay();
    let day = '';
    switch (currentDay) {
        case 0:
            day = 'Chủ nhật';
            break;
        case 1:
            day = 'Thứ hai';
            break;
        case 2:
            day = 'Thứ ba';
            break;
        case 3:
            day = 'Thứ tư';
            break;
        case 4:
            day = 'Thứ năm';
            break;
        case 5:
            day = 'Thứ sáu';
            break;
        case 6:
            day = 'Thứ bảy';
            break;
        default:
            console.log(`Error: ${currentDay}`);
            break;
    }
    res.render('main', { kindOfDay: day });
};

module.exports = {
    getHomePage,
};