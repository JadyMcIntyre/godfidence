// mentorModel.js
class MentorModel {
    constructor(id, name, expertise, description) {
        this.id = id;
        this.name = name;
        this.expertise = expertise;
        this.description = description;
    }
}


const mentors = [
    new MentorModel(1, 'John Doe', 'Drug Addiction', 'Saved after 20 years as an addict.'),
    new MentorModel(2, 'Peter Griffin', 'Terminal illness', 'Saved after 4 years as an addict.'),
    new MentorModel(3, 'This is a long name test', 'Grief', 'Saved after 20 years as an addict.'),
    new MentorModel(4, 'Jacob Bacoj', 'this is a test to see what happens', 'Saved after 4 years as an addict.')
];

module.exports = {
    MentorModel,
    mentors
};