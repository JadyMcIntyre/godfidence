/**
 * Class representing a mentor.
 */
class MentorModel {
    /**
     * Create a mentor.
     * 
     * @param {number} id - The ID of the mentor.
     * @param {string} name - The name of the mentor.
     * @param {string} expertise - The area of expertise of the mentor.
     * @param {string} description - A brief description of the mentor's background.
     */
    constructor(id, name, expertise, description) {
        this.id = id;
        this.name = name;
        this.expertise = expertise;
        this.description = description;
    }
}

/**
 * Array of mentor instances representing the available mentors.
 * 
 * @type {MentorModel[]}
 */
const mentors = [
    new MentorModel(1, 'John Doe', 'Drug Addiction', 'Saved after 20 years as an addict.'),
    new MentorModel(2, 'Peter Griffin', 'Terminal illness', 'Saved after 4 years as an addict.'),
    new MentorModel(3, 'This is a long name test', 'Grief', 'Saved after 20 years as an addict.'),
    new MentorModel(4, 'Jacob Bacoj', 'this is a test to see what happens', 'Saved after 4 years as an addict.')
];

/**
 * Export the MentorModel class and the mentors array so they can be used in other parts of the application.
 */
module.exports = {
    MentorModel,
    mentors
};