import { Api } from "@/service/api";
import { Events } from "@/state/events";
import useState from "@/state/useState";
import useEvent from "@/state/useEvent";

const { PING, FOUND, ERROR, SEARCH_ERROR, LOADING, LOADED } = Events

export default function useMutation() {
   const { setSponsorCount, setSponsors } = useState()
   const { emit } = useEvent()

   async function ping() {
      emit(LOADING)
      try {
         const response = await Api.ping();
         emit(PING, response)
         setSponsorCount(response.length)
      } catch (err) {
         emit(ERROR, err as string)
      }
      emit(LOADING)
   }

   async function findSponsor(name: string) {
      emit(LOADING)
      try {
         const res = await Api.getSponsor(name);
         emit(FOUND, res.length)
         setSponsors(res)
      } catch (err) {
         emit(ERROR, err as string)
         emit(SEARCH_ERROR)
      }
      emit(LOADED)
   }

   async function fetchSponsorByType(type: string) {
      emit(LOADING)
      try {
         const res = await Api.findSponsorsByType(type)
         setSponsors(res)
         emit(FOUND, res.length)
      } catch (error) {
         emit(ERROR, error as string)
      }
      emit(LOADED)
   }

   return {
      findSponsor,
      fetchSponsorByType,
      ping
   }
}