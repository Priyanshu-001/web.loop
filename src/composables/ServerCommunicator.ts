import { onMounted, ref } from "vue";

export default function useServiceWorkerCommunication() {
  const isSupported = ref(false);
  onMounted(() => (isSupported.value = "serviceWorker" in navigator));

  /**
   *
   * @param routelist
   */

  function addNewRoutes(routelist) {
    //TODO: optimize it as it is highly unoptimized sending all routes for every update

    if (!isSupported.value) throw new Error("Service Worker Not Found");
    navigator.serviceWorker.controller.postMessage({
      dest: "routes/load",
      payload: routelist.value,
    });
  }
  return {
    isSupported,
    addNewRoutes,
  };
}
