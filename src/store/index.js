import Vue from "vue";
import Vuex from "vuex";

// import Forms from "./modules/forms";

Vue.use(Vuex);

export const contact = {
  id: "",
  fields: {
    label: {
      type: "",
      data: "",
    },
  },
};

const MOCK_DATA = [
  {
    id: 1,
    fields: [
      { label: "Имя", type: "text", data: "Igor" },
      { label: "Номер телефона", type: "tel", data: "+7 981 987 8730" },
    ],
  },
  {
    id: 2,
    fields: [
      { label: "Имя", type: "text", data: "Igor 2" },
      { label: "Номер телефона", type: "tel", data: "+7 981 987 8730" },
    ],
  },
  {
    id: 3,
    fields: [
      { label: "Имя", type: "text", data: "Igor 3" },
      { label: "Номер телефона", type: "tel", data: "+7 981 987 8730" },
    ],
  },
  {
    id: 4,
    fields: [
      { label: "Имя", type: "text", data: "Igor 4" },
      { label: "Номер телефона", type: "tel", data: "+7 981 987 8730" },
    ],
  },
];

export default new Vuex.Store({
  state: {
    contactList: MOCK_DATA,
    fieldTypes: [],
  },
  getters: {
    contactList: (state) => state.contactList,
    getContact: (state) => (id) =>
      state.contactList.find((contact) => contact.id === id),
    lastUnusedId: (state) => state.contactList.length + 1,
  },
  mutations: {
    addContact: (state, contact) => state.contactList.unshift(contact),
    deleteContact: (state, id) =>
      (state.contactList = state.contactList.filter(
        (contact) => contact.id !== id
      )),
    addField: (state, { contactId, field }) => {
      state.contactList = state.contactList.map((contact) => {
        if (contactId === contact.id) {
          return {
            ...contact,
            fields: [...contact.fields, field],
          };
        } else {
          return contact;
        }
      });
    },
    deleteField: (state, { id, contactId }) => {
      state.contactList = state.contactList.map((contact) => {
        if (contactId === contact.id)
          return {
            ...contact,
            fields: contact.fields.filter((field, idx) => idx !== id),
          };
        else return { ...contact };
      });
    },
    editField: (state, { contactId, fieldId, newField }) => {
      state.contactList = state.contactList.map((contact) => {
        if (contactId === contact.id)
          return {
            ...contact,
            fields: contact.fields.map((field, idx) =>
              idx === fieldId ? newField : field
            ),
          };
        else return { ...contact };
      });
    },
  },
  actions: {
    addContact({ commit }, { payload }) {
      commit("addContact", payload);
    },
    deleteContact({ commit }, { id }) {
      commit("deleteContact", id);
    },
    addField({ commit }, { contactId, field }) {
      commit("addField", {
        contactId,
        field,
      });
    },
    deleteField({ commit }, { id, contactId }) {
      commit("deleteField", {
        id,
        contactId,
      });
    },
    editField({ commit }, { contactId, fieldId, newField }) {
      commit("editField", {
        contactId,
        fieldId,
        newField,
      });
    },
  },
  modules: {
    // Forms,
  },
});
