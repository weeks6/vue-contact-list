<template>
  <button class="button button_no-grow" @click="handleDeletion">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "DeleteAction",
  props: {
    action: Function,
    id: Number,
  },
  methods: {
    handleDeletion() {
      this.$emit("dialog-confirm:open", {
        type: "DELETE_FIELD",
        id: this.id,
        contactId: this.$route.params.id,
      });
    },
  },
};
</script>

<style>
</style>