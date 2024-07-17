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
    new MentorModel(1, 'Ivan Orellana', 'Drug Addiction', 'Saved after 20 years as an addict.'),
    new MentorModel(2, 'Jady McIntyre', 'Drug Addiction', 'Saved after 4 years as an addict.')
];

module.exports = {
    MentorModel,
    mentors
};