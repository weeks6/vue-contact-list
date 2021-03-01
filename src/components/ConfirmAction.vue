<template>
  <overlay
    :show="show"
    @dialog:close="$emit('dialog:close')"
    @dialog-confirm:close="$emit('dialog-confirm:close')"
  >
    <div class="form__container">
      <div class="form__container-inner">
        <h1 class="form__title">Подтвердить</h1>
      </div>
      <controls>
        <button
          class="button"
          @click="
            $emit('dialog:confirm', {
              payload: handleConfirm(),
            })
          "
        >
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
        <button class="button" @click="$emit('dialog:close')">
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
import Overlay from "./Overlay.vue";
import Controls from "./Controls.vue";
import { mapActions } from "vuex";

export default {
  components: { Overlay, Controls },
  name: "ConfirmAction",
  props: {
    show: Boolean,
    action: Object,
  },
  methods: {
    handleConfirm() {
      switch (this.action.type) {
        case "DELETE_CONTACT":
          this.deleteContact({ id: this.action.id });
          this.$emit("dialog:close");
          break;
        case "DELETE_FIELD":
          this.deleteField({
            id: this.action.id,
            contactId: this.action.contactId,
          });
          this.$emit("dialog:close");
          break;

        case "CANCEL_EDIT":
          this.$emit("dialog:close");
          return {
            isCancel: true,
            fieldId: this.action.id,
          };

        default:
          break;
      }
    },
    ...mapActions(["deleteContact", "deleteField", "addField"]),
  },
};
</script>

<style>
</style>