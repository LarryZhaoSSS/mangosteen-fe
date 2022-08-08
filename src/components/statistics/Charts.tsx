import { defineComponent, PropType, ref, onMounted } from "vue";
import { FormItem } from "../../shared/Form";
import s from "./Charts.module.scss";
import * as echarts from "echarts";

// 基于准备好的dom，初始化echarts实例

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props, context) {
    const category = ref("expense");
    const refDiv = ref<HTMLDivElement>();
    const refDiv2 = ref<HTMLDivElement>();
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
    onMounted(() => {
      if (!refDiv2.value) {
        return;
      }
      const myChart = echarts.init(refDiv2.value);
      // 绘制图表
      const options = {
        grid:[
            {left:0,top:0,right:0,bottom:0}
        ],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(options);
    });
    return () => (
      <div class={s.wrapper}>
        <FormItem
          label="类型"
          type="select"
          options={[
            { value: "expense", text: "支出" },
            { value: "income", text: "收入" },
          ]}
          v-model={category.value}
        ></FormItem>
        <div ref={refDiv} class={s.demo}></div>
        <div ref={refDiv2} class={s.demo2}></div>
      </div>
    );
  },
});
