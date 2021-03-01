<template>
  <overlay :show="show" @dialog:close="$emit('dialog:close')">
    <div class="form__container">
      <form
        class="form__container-inner"
        id="add-field-form"
        @submit.prevent="submitAddFieldForm"
      >
        <h1 class="form__heading">Добавить новое поле</h1>

        <input-field
          label="Название"
          type="text"
          v-model="field.label"
          required
        ></input-field>
        <label
          class="input-field__label input-field__label-text"
          for="fieldTypes"
          >Тип поля
          <select
            name="fieldTypes"
            class="input-field__select"
            v-model="field.type"
            required
          >
            <option value="text">Текст</option>
            <option value="tel">Номер телефона</option>
            <option value="email">E-mail</option>
          </select>
        </label>
      </form>
      <div class="controls">
        <button class="button" type="submit" form="add-field-form">
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
      </div>
    </div>
  </overlay>
</template>

<script>
import { mapActions } from "vuex";
import InputField from "./InputField.vue";
import Overlay from "./Overlay.vue";

export default {
  name: "AddFieldForm",
  components: {
    InputField,
    Overlay,
  },
  props: {
    show: Boolean,
  },
  data: function () {
    return {
      field: {
        label: "",
        type: "text",
        data: "",
      },
    };
  },
  methods: {
    submitAddFieldForm() {
      const payload = {
        contactId: this.$route.params.id,
        field: this.field,
      };
      this.addField(payload);
      this.resetField();
      this.closeDialog();
    },
    handleCancel() {
      this.resetField();
      this.closeDialog();
    },
    resetField() {
      this.field = { label: "", type: "text", data: "" };
    },
    closeDialog() {
      this.$emit("dialog:close");
    },
    ...mapActions(["addField"]),
  },
};
</script>

<style>
.form__container-overlay {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 50;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.form__container {
  background-color: var(--background-primary);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  flex-grow: 0;
}

.input-field__select {
  margin-top: 12px;
  padding: 8px;
}

.form__heading {
  display: block;
  font-size: 16px;
  margin: 0;
  margin-bottom: 16px;
}
</style>