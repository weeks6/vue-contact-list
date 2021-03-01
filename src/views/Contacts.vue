<template>
  <main>
    <section class="view-container">
      <ul class="contacts__list">
        <contact-preview
          v-for="contact in contactList"
          :contact="contact"
          :key="contact.id"
          @dialog-confirm:open="
            (payload) => $emit('dialog-confirm:open', payload)
          "
        />
      </ul>
    </section>

    <controls class="controls__bottom">
      <button class="button" @click="openAddForm">
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
import { mapGetters } from "vuex";
import ContactPreview from "../components/ContactPreview.vue";
import Controls from "../components/Controls.vue";

export default {
  name: "Contacts",
  computed: {
    ...mapGetters(["contactList"]),
  },
  components: {
    ContactPreview,
    Controls,
  },
  methods: {
    openAddForm: function () {
      this.$emit("dialog-add-form:open");
    },
  },
};
</script>

<style>
.contacts__list {
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
}
</style>