<template>
  <div
    class="container-overlay"
    ref="contact-overlay"
    @click="handleOverlayClick"
    v-if="show"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  props: {
    show: Boolean,
  },
  methods: {
    handleOverlayClick(evt) {
      if (evt.target == this.$refs["contact-overlay"]) {
        this.$emit("dialog:close");
      }
    },
  },
};
</script>

<style>
.container-overlay {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 55;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>