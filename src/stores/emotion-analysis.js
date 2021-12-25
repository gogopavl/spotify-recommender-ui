import { writable } from "svelte/store";

export const emotionAnalysisStore = writable({
  userMessage:
    "Looks like you didn't submit any text or image. That's fine, here's a random playlist for you either way!",
});
