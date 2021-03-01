<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/" v-if="!isHome" class="navigation__link">
        <back-nav />
      </router-link>

      <h1 class="navigation__title">{{ setTitle }}</h1>
    </nav>
    <router-view
      @dialog-add-form:open="addContact = true"
      @dialog-add-field:open="handleAddField"
      @dialog-confirm:open="handleConfirmation"
      :confirmState="confirmState"
    />

    <add-contact-form @dialog:close="addContact = false" :show="addContact" />

    <add-field-form
      @dialog:close="addField = false"
      :show="addField"
    ></add-field-form>

    <confirm-action
      @dialog:close="confirmDialog = false"
      :show="confirmDialog"
      :action="confirmPayload"
      @dialog:confirm="(evt) => (confirmState = evt.payload)"
    />
  </div>
</template>

<script>
import BackNav from "./components/BackNav.vue";
import AddContactForm from "./components/AddContactForm.vue";
import AddFieldForm from "./components/AddFieldForm.vue";
import ConfirmAction from "./components/ConfirmAction";

export default {
  components: {
    BackNav,
    AddContactForm,
    AddFieldForm,
    ConfirmAction,
  },
  methods: {
    handleConfirmation(evt) {
      this.confirmDialog = true;
      this.confirmPayload = evt;
    },
    handleAddField(evt) {
      this.addField = true;
      this.addFieldPayload = evt;
    },
  },
  data: function () {
    return {
      addContact: false,
      addField: false,
      confirmDialog: false,
      confirmPayload: {},
      addFieldPayload: {},
      confirmState: {},
    };
  },
  computed: {
    isHome() {
      return this.$route.name === "Home";
    },

    setTitle() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

#app {
  height: 100vh;
  position: relative;
}

:root {
  --foreground-primary: #000;
  --foreground-secondary: #353535;
  --background-primary: #ffffff;
  --background-secondary: #d9d9d9;
}

.view-container {
  position: relative;
  width: 94%;
  margin: 0 auto;
  z-index: 44;
  transform: translateY(72px);
}

.navigation {
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  background-color: var(--background-primary);
  border-bottom: 1px solid var(--background-secondary);
  z-index: 52;
  box-sizing: border-box;
}

.navigation__link {
  position: absolute;
  vertical-align: middle;
  left: 0;
}

.navigation__title {
  font-size: 16px;
  margin: 0;
  text-align: center;
}
</style>