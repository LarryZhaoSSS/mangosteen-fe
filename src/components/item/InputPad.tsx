import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatetimePicker, Popup } from "vant";
import { time } from "../../shared/time";
export const InputPad = defineComponent({
  setup(props, context) {
    const buttons = [
      {
        text: "1",
        onclick: () => {},
      },
      {
        text: "2",
        onclick: () => {},
      },
      {
        text: "3",
        onclick: () => {},
      },
      {
        text: "清空",
        onclick: () => {},
      },
      {
        text: "4",
        onclick: () => {},
      },

      {
        text: "5",
        onclick: () => {},
      },
      {
        text: "6",
        onclick: () => {},
      },
      {
        text: "+",
        onclick: () => {},
      },
      {
        text: "7",
        onclick: () => {},
      },
      {
        text: "8",
        onclick: () => {},
      },
      {
        text: "9",
        onclick: () => {},
      },
      {
        text: "-",
        onclick: () => {},
      },
      {
        text: ".",
        onclick: () => {},
      },
      {
        text: "0",
        onclick: () => {},
      },
      {
        text: "删",
        onclick: () => {},
      },
      {
        text: "提交",
        onclick: () => {},
      },
    ];
    const refDatePickerVisible = ref(false);
    const refDate = ref(new Date());
    const showDatePicker = ()=>{
        refDatePickerVisible.value = true;
    }
    const hideDatePicker = ()=>{
        refDatePickerVisible.value = false;
    }
    const setDate = (date:Date)=>{
        refDate.value = date
                      hideDatePicker()
    }
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>
              <span
                onClick={showDatePicker}
              >
                {time(refDate.value).format()}
              </span>
              <Popup position="bottom" v-model:show={refDatePickerVisible.value}>
                <DatetimePicker
                  value={refDate.value}
                  type="date"
                  title="选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
          <div class={s.amount}>1000.00</div>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button key={button.text} onClick={button.onclick}>
              {button.text}
            </button>
          ))}
        </div>
      </>
    );
  },
});
