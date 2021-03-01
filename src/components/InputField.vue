<template>
  <div class="input-field__container">
    <label class="input-field__label">
      <span class="input-field__label-text">{{ label }}</span>
      <input
        v-bind="$attrs"
        class="input-field"
        @input="$emit('input', $event.target.value)"
      />
      <span class="input-field__border"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    label: String,
  },
};
</script>

<style>
.input-field__container {
  width: 100%;
  margin-bottom: 16px;
}

.input-field__label {
  display: flex;
  flex-direction: column;
}

.input-field__label-text {
  font-size: 12px;
  margin-left: 4px;
}

.input-field {
  font-size: 16px;
  margin-top: 8px;
  padding: 4px;
  padding-bottom: 8px;
  border: none;
}

.input-field__border {
  width: 100%;
  height: 1px;
  background-color: var(--foreground-secondary);
}

.input-field:focus ~ .input-field__border {
  background-color: var(--foreground-primary);
}

.input-field:focus {
  outline: none;
}
</style>