import fetch from "cross-fetch";
import { Sponsor } from "@/types";

const sponsorUrl = 'http://192.168.1.108:8080/sponsors'

async function ping() {
   return await fetch(sponsorUrl)
      .then(res => res.json())
}

async function getSponsor(name: string) {
   return await fetch(`${sponsorUrl}?name=${name}`)
      .then(res => extractBodyArray(res))
}

async function findSponsorsByType(type: string) {
   return await fetch(`${sponsorUrl}?type=${type}`)
      .then(res => extractBodyArray(res))
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