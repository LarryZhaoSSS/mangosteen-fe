import { defineComponent, ref } from "vue";
export const App = defineComponent({
  setup() {
    const refCount = ref(0);
    return () => <div>{refCount.value}</div>;
  },
});
