// mentorModel.js
class App {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


const apps = [
    new App(1, 'You Version'),
    new App(2, 'MessengerX'),
    new App(2, 'Got Questions?'),
    new App(2, '412 Teens')
];

module.exports = {
    App,
    apps
};