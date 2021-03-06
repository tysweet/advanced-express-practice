const ContactModel = require("../models/Contact");

module.exports.list = function list(request, response) {
  ContactModel.find({}).exec()
  .then(contacts => {
    response.json(contacts);
  });
};

module.exports.show = function show(request, response) {
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    response.json(contact);
  });
};

module.exports.create = function create(request, response) {
  const newContact = new ContactModel(request.body);
  newContact.save()
  .then(savedContact => {
    response.json(savedContact);
  });
};
