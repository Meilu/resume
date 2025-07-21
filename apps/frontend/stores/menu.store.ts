import { defineStore } from "pinia";
import { ref } from "vue";
import _ from "lodash";

export const useMenuStore = defineStore("menu", () => {
  
  const speechText = ref<string>("");
  const isAnimatingSpeechText = ref<boolean>(false);

  return {
    speechText,
    isAnimatingSpeechText,
  };
});
