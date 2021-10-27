<script setup lang=ts>
import { Sponsor } from "@/types";
import { PropType } from "vue";

defineProps({
   sponsor: {
      type: Object as PropType<Sponsor>,
      required: true
   }
})

function exists(data: string) {
   return data != undefined && data.length > 0
}

function arrExists(data: Array<String>) {
   return data != undefined && data.length > 0
}
</script>

<template>
   <div class="sponsor">
      <div class="sponsor-preview">
         <h6>Name</h6>
         <h2>{{ sponsor.name }}</h2>
         <span>
            {{ `${sponsor.county} ` }} {{ `${sponsor.city}` }}
            <i class="fas fa-chevron-right"></i>
         </span>
      </div>
      <div class="sponsor-info">
         <div class="progress-container">
            <div class="progress"></div>
            <span class="progress-text">rating</span>
         </div>
         <h6>Rating: {{ sponsor.rating }}</h6>
         <h2>{{ sponsor.type }}</h2>
         <div class="sponsor-routes">
            <button class="btn" v-for="route in sponsor.route">{{ route }}</button>
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
   padding: 30px;
   width: 350px;
}

.sponsor-preview > span {
   color: #fff;
   display: inline-block;
   font-size: 12px;
   opacity: 0.6;
   margin-top: 30px;
   text-decoration: none;
}

.sponsor-info {
   padding: 30px;
   position: relative;
   width: 100%;
}

.progress-container {
   position: absolute;
   top: 30px;
   right: 30px;
   text-align: right;
   width: 150px;
}

.progress {
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
   width: 100%;
}

.progress-text {
   font-size: 10px;
   opacity: 0.6;
   letter-spacing: 1px;
}

.sponsor-routes {
   position: absolute;
   bottom: 30px;
   right: 30px;
}
.btn {
   background-color: var(--color-primary);
   border: 0;
   border-radius: 5px;
   box-shadow: 0 10px 10px var(--button-shadow);
   color: var(--card-detail-background-color);
   font-size: 0.8em;
   padding: 5px 10px;
   margin-left: 5px;
   letter-spacing: 1px;
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
}

/* .card { */
/* --content-padding: 1rem;
   display: grid;
   grid-template-columns: 1fr 2fr;
   grid-template-rows: auto;
   margin: 1rem;
   border-radius: var(--content-padding);
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
.card-main {
   display: flex;
   flex-direction: row;
   font-weight: bold;
   background-color: var(--text-color);
   color: var(--text-color-alt);
   border-radius: var(--content-padding) 0 0 var(--content-padding);
}

.card-main > .main-content {
   margin: 0;
}

.label {
   margin-right: 0.6rem;
}

.card-details {
   border-radius: 0 var(--content-padding) var(--content-padding) 0;
}
.card-detail {
   margin: 0;
   text-align: left;
} */
</style>