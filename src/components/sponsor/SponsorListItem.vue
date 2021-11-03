<script setup lang=ts>
import { cleanString } from "@/util/stringutils";
import { Sponsor } from "@/types";
import { parsePercentage } from '@/util/ratingparser';
import Button from "@/components/micro/Button.vue";

const props = defineProps<{ sponsor: Sponsor }>()

</script>

<template>
   <div class="sponsor">
      <div class="sponsor-preview">
         <h6>Name</h6>
         <h2>{{ props.sponsor.name }}</h2>
         <span>
            {{ `${props.sponsor.county} ` }} {{ `${props.sponsor.city}` }}
            <i class="fas fa-chevron-right"></i>
         </span>
      </div>
      <div class="sponsor-info">
         <div class="progress-container">
            <div
               class="progress"
               :style="{ '--progress': `${parsePercentage(props.sponsor.rating)}%` }"
            ></div>
            <span class="progress-text">RATING: {{ props.sponsor.rating }}</span>
         </div>
         <h6>TYPE</h6>
         <h2>{{ cleanString(props.sponsor.type) }}</h2>
         <div class="sponsor-routes">
            <Button class="button-sm mt5" :text="route" v-for="route in props.sponsor.route" />
         </div>
      </div>
   </div>
</template>

<style scoped>
.sponsor-container {
   display: flex;
   flex-direction: row;
   justify-content: center;
   text-align: left;
}

.sponsor {
   --content-padding: 30px;
   background-color: var(--card-detail-background-color);
   border-radius: 10px;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
   display: flex;
   max-width: 100%;
   margin: 20px;
   overflow: hidden;
   width: 700px;
}

.sponsor h6 {
   opacity: 0.6;
   margin: 0;
   letter-spacing: 1px;
   text-transform: uppercase;
}

.sponsor h2 {
   letter-spacing: 1px;
   margin: 10px 0;
}

.sponsor-preview {
   background-color: var(--color-primary);
   color: #fff;
   padding: var(--content-padding);
   width: 350px;
}

.sponsor-preview > span {
   color: #fff;
   display: inline-block;
   font-size: 12px;
   opacity: 0.6;
   margin-top: var(--content-padding);
   text-decoration: none;
}

.sponsor-info {
   padding: var(--content-padding);
   position: relative;
   width: 100%;
}

.progress-container {
   position: absolute;
   top: var(--content-padding);
   right: var(--content-padding);
   text-align: right;
   width: 150px;
}

.progress {
   --progress: 100%;
   background-color: var(--progress-bar-back);
   border-radius: 3px;
   height: 5px;
   width: 100%;
}

.progress::after {
   border-radius: 3px;
   background-color: var(--progress-bar);
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   height: 5px;
   width: var(--progress);
}

.progress-text {
   font-size: 0.6em;
   opacity: 0.6;
   letter-spacing: 1px;
}

.sponsor-routes {
   text-align: right;
   position: absolute;
   bottom: var(--content-padding);
   right: var(--content-padding);
   left: var(--content-padding);
}
.btn {
   margin-top: 10px;
}

@media screen and (max-width: 767px) {
   .sponsor {
      flex-direction: column;
   }

   .sponsor-preview {
      width: unset;
   }

   .sponsor-preview > span {
      margin-top: 8px;
   }

   .sponsor-info {
      height: 150px;
   }

   .progress-text {
      font-size: 0.8em;
   }
}
</style>