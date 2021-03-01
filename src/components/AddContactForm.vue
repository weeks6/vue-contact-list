<template>
  <overlay :show="show" @dialog:close="$emit('dialog:close')">
    <div class="form__container">
      <form
        @submit.prevent="handleAddContact"
        class="form__container-inner"
        id="new-contact-form"
        ref="new-contact-form"
      >
        <h1 class="form__title">Новый контакт</h1>

        <input-field
          label="Имя"
          type="text"
          v-model="newContact.fields[0].data"
          required
        />
        <input-field
          label="Телефон"
          type="tel"
          v-model="newContact.fields[1].data"
          required
        />
      </form>

      <controls>
        <button class="button" type="submit" form="new-contact-form">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        </button>
        <button class="button" @click="handleCancel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
      </controls>
    </div>
  </overlay>
</template>

<script>
import InputField from "../components/InputField.vue";
import Controls from "../components/Controls.vue";
import Overlay from "../components/Overlay.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddContactForm",
  components: {
    InputField,
    Controls,
    Overlay,
  },
  props: {
    show: Boolean,
  },
  data: function () {
    return {
      newContact: {
        fields: [
          { label: "Имя", type: "text", data: "" },
          { label: "Номер телефона", type: "tel", data: "" },
        ],
      },
    };
  },
  methods: {
    handleAddContact() {
      this.addContact({
        payload: {
          id: this.lastUnusedId,
          fields: this.newContact.fields,
        },
      });

      this.resetFields();
      this.closeDialog();
    },
    handleCancel() {
      this.resetFields();
      this.closeDialog();
    },
    resetFields() {
      this.newContact.fields = [
        { label: "Имя", type: "text", data: "" },
        { label: "Номер телефона", type: "tel", data: "" },
      ];
    },
    closeDialog() {
      this.$emit("dialog:close");
    },
    ...mapActions(["addContact", "resetDefaultFields"]),
  },
  computed: {
    ...mapGetters(["lastUnusedId", "allFields", "getField", "defaultFields"]),
  },
};
</script>

<style>
.form__container {
  background-color: var(--background-primary);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  flex-grow: 0;
}

.form__container-inner {
  padding: 16px;
}

.form__title {
  font-size: 16px;
  margin: 0;
  margin-bottom: 16px;
}
</style>