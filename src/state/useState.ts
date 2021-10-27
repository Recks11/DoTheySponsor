import { Sponsor } from "@/types";
import { readonly, ref } from "vue";

const sponsors = ref<Sponsor[]>([])
const sponsorCount = ref(0)

export default function useState() {

   function setSponsors(sponsor: Sponsor[]) {
      sponsors.value = sponsor
   }

   function setSponsorCount(num: number) {
      sponsorCount.value = num
   }

   return {
      sponsors: readonly(sponsors),
      sponsorCount: readonly(sponsorCount),
      setSponsors,
      setSponsorCount
   }
}