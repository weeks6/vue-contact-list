<template>
  <div class="field__item">
    <div class="field__main">
      <slot></slot>
      <delete-action
        v-if="$vnode.key > 1"
        :id="$vnode.key"
        @dialog-confirm:open="(evt) => $emit('dialog-confirm:open', evt)"
      />
    </div>

    <div class="field__actions" v-if="showAction">
      <controls class="field__controls">
        <save-action @edit-save="$emit('edit-save')"></save-action>
        <cancel-action
          @dialog-confirm:open="(evt) => $emit('dialog-confirm:open', evt)"
          type="CANCEL_EDIT"
          :id="$vnode.key"
        ></cancel-action>
      </controls>
    </div>
  </div>
</template>

<script>
import DeleteAction from "./DeleteAction.vue";
import SaveAction from "./SaveAction.vue";
import CancelAction from "./CancelAction.vue";
import Controls from "./Controls.vue";
export default {
  name: "FieldItem",
  components: {
    DeleteAction,
    Controls,
    SaveAction,
    CancelAction,
  },
  props: {
    showAction: Boolean,
  },
};
</script>

<style>
.field__item {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.field__main {
  display: flex;
}

.field__controls {
  border-top: none;
}
</style>