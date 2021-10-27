import Events from '@/events';
import useEvent from '@/state/useEvent';
import { Sponsor } from "@/types";
import fetch from "cross-fetch";

const { LOADING, LOADED } = Events
const { emit } = useEvent()

const sponsorUrl = `${import.meta.env.VITE_API_URL}/sponsors`

async function ping() {
   emit(LOADING)
   return await fetch(sponsorUrl)
      .then(res => res.json())
      .finally(() => emit(LOADED))
}

async function getSponsor(name: string) {
   emit(LOADING)
   return await fetch(`${sponsorUrl}?name=${name}`)
      .then(res => extractBodyArray(res))
      .finally(() => emit(LOADED))
}

async function findSponsorsByType(type: string) {
   emit(LOADING)
   return await fetch(`${sponsorUrl}?type=${type}`)
      .then(res => extractBodyArray(res))
      .finally(() => emit(LOADED))
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