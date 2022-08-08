import { defineComponent, onMounted, ref } from "vue";
import s from "./LineChart.module.scss";
import * as echarts from "echarts";

export const LineChart = defineComponent({
  setup(props, context) {
    const refDiv = ref<HTMLDivElement>();
    onMounted(() => {
        if (!refDiv.value) {
          return;
        }
        const myChart = echarts.init(refDiv.value);
        // 绘制图表
        const options = {
          grid: [{ left: 0, top: 0, right: 0, bottom: 24 }],
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
          ],
        };
        myChart.setOption(options);
      });
    return () => <div ref={refDiv} class={s.wrapper}></div>;
  },
});
