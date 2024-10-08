/**
 * Define a class representing an app in the gallery.
 */
class AppGallery {
    /**
     * Create an app.
     * 
     * @param {number} id - The ID of the app.
     * @param {string} name - The name of the app.
     */
    constructor(id, name) {
        // Initialize the app with an ID and a name
        this.id = id;
        this.name = name;
    }
}

/**
 * Create an array of app instances representing the app gallery.
 * 
 * @type {AppGallery[]}
 */
const apps = [
    new AppGallery(1, 'You Version'),
    new AppGallery(2, 'MessengerX'),
    new AppGallery(2, 'Got Questions?'),
    new AppGallery(2, '412 Teens')
];

/**
 * Export the AppGallery class and the apps array so they can be used in other parts of the application.
 */
module.exports = {
    AppGallery,
    apps
};