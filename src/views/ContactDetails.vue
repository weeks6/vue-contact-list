<template>
  <main>
    <section class="view-container">
      <ul class="contacts__list" v-if="contact">
        <field-item
          v-for="(field, idx) in contact.fields"
          :key="idx"
          :showAction="showActions[idx]"
          @dialog-confirm:open="(evt) => $emit('dialog-confirm:open', evt)"
          @edit-cancel="() => handleEditCancel(idx)"
          @edit-save="() => handleEditSave(idx)"
        >
          <input-field
            :label="field.label"
            :type="field.type"
            v-model="updatedFields[idx].data"
            @input="(evt) => handleInputChange(evt, idx)"
            required
          ></input-field>
        </field-item>
      </ul>
    </section>
    <controls class="controls__bottom">
      <button class="button" @click="handleAddField">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </controls>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InputField from "../components/InputField.vue";

import Controls from "../components/Controls.vue";
import FieldItem from "../components/FieldItem.vue";
export default {
  name: "ContactDetails",
  components: {
    InputField,
    Controls,
    FieldItem,
  },
  props: {
    confirmState: Object,
  },
  data: function () {
    return {
      updatedFields: [],
      showActions: [],
    };
  },
  watch: {
    contactFieldsLength: function () {
      this.showActions.push(false);
    },
    contactFields: function (fields) {
      this.updatedFields.push(JSON.parse(JSON.stringify(fields.slice(-1)[0])));
    },
    confirmState: function () {
      this.handleEditCancel();
    },
  },
  created() {
    // странный хак для "заморозки" данных из стейта
    this.updatedFields = JSON.parse(
      JSON.stringify(this.getContact(Number(this.$route.params.id)).fields)
    );
    this.showActions = new Array(this.contactFieldsLength).fill(false);
  },
  methods: {
    handleAddField() {
      const payload = { id: this.contact.id, type: "ADD_FIELD" };
      this.$emit("dialog-add-field:open", payload);
    },
    handleInputChange(evt, idx) {
      evt === this.contactFields[idx].data
        ? (this.showActions[idx] = false)
        : (this.showActions[idx] = true);
    },
    handleEditSave(idx) {
      this.showActions = this.showActions.map((action, i) =>
        i === idx ? false : action
      );
      const payload = {
        contactId: this.contact.id,
        fieldId: idx,
        newField: this.updatedFields[idx],
      };
      this.editField(payload);
    },
    handleEditCancel() {
      const idx = this.confirmState.fieldId;
      if (this.confirmState.isCancel) {
        this.updatedFields = this.updatedFields.map((field, i) =>
          i === idx
            ? JSON.parse(JSON.stringify(this.contactFields[idx]))
            : field
        );
        this.showActions = this.showActions.map((action, i) =>
          i === idx ? false : action
        );
      }
    },

    ...mapActions(["editField"]),
  },
  computed: {
    contact() {
      return this.getContact(Number(this.$route.params.id));
    },

    contactFields() {
      return this.getContact(Number(this.$route.params.id)).fields;
    },

    contactFieldsLength() {
      return this.contact.fields.length;
    },

    ...mapGetters(["getContact"]),
  },
};
</script>

<style>
</style>