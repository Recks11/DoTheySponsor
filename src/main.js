import { createApp } from 'vue'
import App from './App.vue'
import useEvent from '@/state/useEvent'
import Events from "@/events"

import '@/css/global.css'

const { on } = useEvent()
on(Events.PING, (data) => console.log('pinged server', data))
on(Events.ERROR, (error) => console.error('an error occured:', error))

createApp(App).mount('#app')
