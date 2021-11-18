import Events from '@/events';
import useEvent from '@/state/useEvent';
import { Sponsor } from "@/types";
import { notifyError, notifyInfo, clearNotifications } from '@/util/notifier';
import fetch from "cross-fetch";

const { LOADING, LOADED, MODAL_HIDE } = Events
const { emit } = useEvent()

const sponsorUrl = `${import.meta.env.VITE_API_URL}/sponsors`

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

function cleanUp() {
   emit(LOADED)
   clearNotifications()
}


async function ping() {
   emit(LOADING)
   notifyInfo('loading initial data')

   try {
      const res = await fetch(sponsorUrl)
      return res.json()
   } catch (ex) {
      notifyError('error fetching data')
      throw ex;
   } finally {
      cleanUp()
   }
}

async function getSponsor(name: string) {
   emit(LOADING)
   notifyInfo('getting sponsors')
   try {
      const res = await fetch(`${sponsorUrl}?name=${name}`)
      return extractBodyArray(res)
   } catch (ex) {
      notifyError('error fetching data')
      throw ex;
   } finally {
      cleanUp()
   }
}

async function findSponsorsByType(type: string) {
   emit(LOADING)
   notifyInfo('getting sponsors')
   try {
      const res = await fetch(`${sponsorUrl}?type=${type}`)
      return extractBodyArray(res)
   } catch (ex) {
      notifyError('error fetching data')
      throw ex;
   } finally {
      cleanUp()
   }
}

export const Api = {
   getSponsor,
   findSponsorsByType,
   ping
}