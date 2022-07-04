import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = { x: number; y: number };
export const useSwipe = (element: Ref<HTMLElement | null>) => {
  const start = ref<Point>();
  const end = ref<Point>();
  const swiping = ref(false);
  const distance = computed(() => {
    if (!start.value || !end.value) {
      return undefined;
    }
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y,
    };
  });
  const direction = computed(() => {
    if (!distance.value || !swiping) {
      return "";
    }
    const { x, y } = distance.value;
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? "right" : "left";
    }
    return y > 0 ? "down" : "up";
  });
  const onStart = (e:TouchEvent) => {
    start.value = {
      x: e.touches[0].screenX,
      y: e.touches[0].screenY,
    };
    end.value = undefined;
    swiping.value = true;
  }
  const onMove =  (e:TouchEvent) => {
    end.value = {
      x: e.touches[0].screenX,
      y: e.touches[0].screenY,
    };
  }
  const onEnd = (e:TouchEvent) => {
    swiping.value = false;
    start.value = undefined
  }
  onMounted(() => {
      if(!element.value){
          return
      }
    element.value.addEventListener("touchstart",onStart );
    element.value.addEventListener("touchmove", onMove);
    element.value.addEventListener("touchend", onEnd);
  });
  onUnmounted(()=>{
    if(!element.value){
        return
    }
    element.value.removeEventListener("touchstart",onStart );
    element.value.removeEventListener("touchmove", onMove);
    element.value.removeEventListener("touchend", onEnd);
  })
  return {
    swiping,
    distance,
    direction,
    start,
    end,
  };
};
