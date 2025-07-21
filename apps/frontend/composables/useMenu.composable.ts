import { delay } from "~/helpers/timer.helper";

export const useMenuComposable = () => {
  const { speechText, isAnimatingSpeechText } = storeToRefs(useMenuStore());

  const typewriter = async (speechTexts: string[]) => {
    if (isAnimatingSpeechText.value) return;

    isAnimatingSpeechText.value = true;
    speechText.value = "";

    if (speechTexts.length === 0) return;

    for (const textToAnimate of speechTexts) {
      await typeText(textToAnimate);
      await delay(400);
    }
    
    isAnimatingSpeechText.value = false;
  };

  const typeText = (textToAnimate: string) => {
    let index = 0;

    return new Promise<void>(async (resolve) => {
      while (index < textToAnimate.length) {
        speechText.value += textToAnimate.charAt(index);
        index++;

        await delay(40);
      }

      resolve();
    });
  };

  return {
    typewriter
  };
};
