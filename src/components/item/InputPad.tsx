import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatetimePicker, Popup } from "vant";
import { Time } from "../../shared/time";
export const InputPad = defineComponent({
  setup(props, context) {
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
    const refAmount = ref('0')
    const appendText = (n:number | string)=>{
        const nString = n.toString()
      const dotIndex = refAmount.value.indexOf('.')
      if (refAmount.value.length >= 13) {
        return
      }
      if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) {
        return
      }
      if (nString === '.') {
        if (dotIndex >= 0) { // 已经有小数点了
          return
        }
      } else if (nString === '0') {
        if (dotIndex === -1) { // 没有小数点
          if (refAmount.value === '0') { // 没小数点，但是有0
            return
          }
        }
      } else {
        if (refAmount.value === '0') {
          refAmount.value = ''
        }
      }
      refAmount.value += n.toString()
    }
    const buttons = [
      {
        text: "1",
        onclick: () => {
            appendText(1)
        },
      },
      {
        text: "2",
        onclick: () => {
            appendText(2)
        },
      },
      {
        text: "3",
        onclick: () => {
            appendText(3)
        },
      },
      
      {
        text: "4",
        onclick: () => {
            appendText(4)
        },
      },

      {
        text: "5",
        onclick: () => {
            appendText(5)
        },
      },
      {
        text: "6",
        onclick: () => {
            appendText(6)
        },
      },
      
      {
        text: "7",
        onclick: () => {
            appendText(7)
        },
      },
      {
        text: "8",
        onclick: () => {
            appendText(8)
        },
      },
      {
        text: "9",
        onclick: () => {
            appendText(9)
        },
      },
      
      {
        text: ".",
        onclick: () => {
            appendText('.')
        },
      },
      {
        text: "0",
        onclick: () => {
            appendText(0)
        },
      },
      {
        text: "清空",
        onclick: () => {
            refAmount.value = '0'
        },
      },
      {
        text: "提交",
        onclick: () => {},
      },
    ];
    
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>
              <span
                onClick={showDatePicker}
              >
                {(new Time(refDate.value)).format()}
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
          <div class={s.amount}>{refAmount.value}</div>
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
