import { createApp } from 'vue'
import App from './App.vue'
import useEvent from '@/state/useEvent'
import Events from "@/events";

import '@/css/global.css'

const { on } = useEvent()
on(Events.PING, (data) => console.log('pinged server', data))
on(Events.ERROR, (data) => console.error('an error occured', data.message))

createApp(App).mount('#app')
