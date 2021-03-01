<template>
  <section class="controls">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Controls",
};
</script>

<style>
.controls {
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--background-secondary);
  z-index: 50;
  box-sizing: border-box;
}

.controls__bottom {
  position: fixed;
  bottom: 0;
}

.button {
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  flex-basis: 100%;
  min-height: 56px;
  background-color: var(--background-primary);
}
</style>