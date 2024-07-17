// mentorModel.js
class AppGallery {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


const apps = [
    new AppGallery(1, 'You Version'),
    new AppGallery(2, 'MessengerX'),
    new AppGallery(2, 'Got Questions?'),
    new AppGallery(2, '412 Teens')
];

module.exports = {
    AppGallery,
    apps
};