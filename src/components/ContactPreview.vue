<template>
  <li class="contacts__list-item">
    <div class="list-item__content" @click="openDetails">
      <h2 class="list-item__heading">{{ contact.fields[0].data }}</h2>
      <p class="list-item__number">
        {{ contact.fields[1].data }}
      </p>
    </div>
    <button class="button button_no-grow" @click="handleDelete">
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
  </li>
</template>

<script>
export default {
  name: "ContactPreview",
  props: {
    contact: Object,
  },
  methods: {
    handleDelete() {
      const payload = {
        type: "DELETE_CONTACT",
        id: this.contact.id,
      };
      this.$emit("dialog-confirm:open", payload);
      // this.deleteContact({ id: this.contact.id });
    },
    openDetails() {
      this.$router.replace({
        name: "Details",
        params: { id: this.contact.id },
      });
    },
  },
};
</script>

<style>
.contacts__list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
}

.list-item__content {
  flex-basis: 100%;
  height: 100%;
}

.list-item__heading {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.button_no-grow {
  flex-basis: 56px;
}

.list-item__number {
  font-size: 16px;
  margin: 0;
  margin-top: 8px;
}
</style>