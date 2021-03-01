<template>
  <span class="icon_size_l">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="icon_type_generic"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  </span>
</template>

<script>
export default {
  name: "BackNav",
};
</script>

<style>
.icon_size_l {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.icon_type_generic {
  width: 24px;
  height: 24px;
}
</style>