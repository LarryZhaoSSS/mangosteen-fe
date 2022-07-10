import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = { x: number; y: number };
interface Options {
  beforeStart?: (e: TouchEvent) => void;
  afterStart?: (e: TouchEvent) => void;
  beforeMove?: (e: TouchEvent) => void;
  afterMove?: (e: TouchEvent) => void;
  beforeEnd?: (e: TouchEvent) => void;
  afterEnd?: (e: TouchEvent) => void;
}
export const useSwipe = (
  element: Ref<HTMLElement | undefined>,
  options?: Options
) => {
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
  const onStart = (e: TouchEvent) => {
    options?.beforeStart?.(e);
    start.value = {
      x: e.touches[0].screenX,
      y: e.touches[0].screenY,
    };
    end.value = undefined;
    swiping.value = true;
    options?.afterStart?.(e);
  };
  const onMove = (e: TouchEvent) => {
    options?.beforeMove?.(e);
    end.value = {
      x: e.touches[0].screenX,
      y: e.touches[0].screenY,
    };
    options?.afterMove?.(e);
  };
  const onEnd = (e: TouchEvent) => {
    options?.beforeEnd?.(e);
    swiping.value = false;
    start.value = undefined;
    options?.afterEnd?.(e);
  };
  onMounted(() => {
    if (!element.value) {
      return;
    }
    element.value.addEventListener("touchstart", onStart);
    element.value.addEventListener("touchmove", onMove);
    element.value.addEventListener("touchend", onEnd);
  });
  onUnmounted(() => {
    if (!element.value) {
      return;
    }
    element.value.removeEventListener("touchstart", onStart);
    element.value.removeEventListener("touchmove", onMove);
    element.value.removeEventListener("touchend", onEnd);
  });
  return {
    swiping,
    distance,
    direction,
    start,
    end,
  };
};
