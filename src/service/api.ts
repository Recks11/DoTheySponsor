import Events from '@/events';
import useEvent from '@/state/useEvent';
import { Sponsor } from "@/types";
import { NotificationType } from '@/util/notificationParser';
import fetch from "cross-fetch";

const { LOADING, LOADED, MODAL_SHOW, MODAL_HIDE } = Events
const { emit } = useEvent()

const sponsorUrl = `${import.meta.env.VITE_API_URL}/sponsors`

function showModal() {
   emit(MODAL_SHOW, {
      type: NotificationType.INFO,
      message: 'Loading Data'
   })
}

function showError() {
   emit(MODAL_SHOW, {
      type: NotificationType.ERROR,
      message: 'Error Fetching Data'
   })
}
async function ping() {
   emit(LOADING)
   showModal()
   return await fetch(sponsorUrl)
      .then(res => res.json())
      .finally(() => {
         emit(LOADED)
         emit(MODAL_HIDE)
      })
      .catch(() => showError())
}

async function getSponsor(name: string) {
   emit(LOADING)
   showModal()
   return await fetch(`${sponsorUrl}?name=${name}`)
      .then(res => extractBodyArray(res))
      .finally(() => {
         emit(LOADED)
         emit(MODAL_HIDE)
      })
      .catch(() => showError())
}

async function findSponsorsByType(type: string) {
   emit(LOADING)
   showModal()
   return await fetch(`${sponsorUrl}?type=${type}`)
      .then(res => extractBodyArray(res))
      .finally(() => {
         emit(LOADED)
         emit(MODAL_HIDE)
      })
      .catch(() => emit(MODAL_SHOW, {
         type: NotificationType.ERROR,
         message: 'Error Fetching Data'
      }))
}

async function requestBody(response: Response) {
   if (response.status >= 400) {
      const error = await response.text()
      throw new Error(`an api error occured ${error}`)
   }
   return await response.json() as unknown
}

async function extractBodyArray(response: Response) {
   return await requestBody(response) as Sponsor[]
}

async function extractBody(response: Response) {
   return await requestBody(response) as Sponsor
}
export const Api = {
   getSponsor,
   findSponsorsByType,
   ping
}