<script setup lang="ts">
import { ref } from 'vue'
import useEvent from '@/state/useEvent'
import Events from '@/events'
import { AppNotification, getNotificationStyle } from '@/util/notificationParser'

const { MODAL_SHOW, MODAL_HIDE } = Events
const { on } = useEvent()

const message = ref('Loading Data ...')
const isHidden = ref(false)

on(MODAL_SHOW, (msg: AppNotification) => {
   parseNotification(msg)
   message.value = msg.message
})

on(MODAL_HIDE, closeModal)

function closeModal() {
   message.value = ''
   isHidden.value = true
}

function parseNotification(notif: AppNotification) {
   var el = document.getElementById('modal-sec')
   if (el === undefined || el === null) return;
   el.className = `modal ${getNotificationStyle(notif.type)}`
}

</script>

<template>
   <div id="modal-sec" class="modal" v-if="!isHidden">
      <p class="modal-message">{{ message }}</p>
      <span class="close" @click="closeModal()">X</span>
   </div>
</template>

<style scoped>
.modal {
   z-index: 10001;
   position: fixed;
   max-width: 300px;
   min-width: 150px;
   border-radius: 5px;
   box-shadow: var(--button-shadow);
   background-color: var(--color-primary);
   min-height: 3rem;
   top: 20px;
   right: 20px;
   margin: 0;
   padding: 13px;
}
.modal-message {
   color: var(--text-color-alt);
   margin: 0;
}

.close {
   position: absolute;
   top: 8px;
   right: 8px;
   cursor: pointer;
}

@media screen and (max-width: 767px) {
   .modal {
      max-width: unset;
      left: 20px;
      right: 20px;
   }
}
</style>
