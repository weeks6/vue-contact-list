import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultFieldsModel = [
  { label: "Имя", type: "text", data: "" },
  { label: "Номер телефона", type: "tel", data: "" },
];

export default {
  state: {
    defaultFields: [
      { label: "Имя", type: "text", data: "" },
      { label: "Номер телефона", type: "tel", data: "" },
    ],
    currentFields: [...defaultFieldsModel],
  },
  getters: {
    defaultFields: (state) => state.defaultFields,
    allFields: (state) => state.currentFields,
    getField: (state) => (key) => state.currentFields[key],
  },
  mutations: {
    deleteField: (state, fieldKey) =>
      (state.currentFields[fieldKey] = undefined),
    resetDefaultFields: (state) =>
      (state.defaultFields = [...defaultFieldsModel]),
  },
  actions: {
    resetDefaultFields({ commit }) {
      commit("resetDefaultFields");
    },
  },
  modules: {},
};
