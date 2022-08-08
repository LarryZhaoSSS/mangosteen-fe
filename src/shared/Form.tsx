import { DatetimePicker, Popup } from "vant";
import { computed, defineComponent, PropType, ref, VNode } from "vue";
import { Button } from "./Button";
import { EmojiSelect } from "./EmojiSelect";
import s from "./Form.module.scss";
import { Time } from "./time";
export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup: (props, context) => {
    return () => (
      <form class={s.form} onSubmit={props.onSubmit}>
        {context.slots.default?.()}
      </form>
    );
  },
});

export const FormItem = defineComponent({
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String as PropType<
        "text" | "emojiSelect" | "date" | "validationCode" | "select"
      >,
    },
    error: {
      type: String,
    },
    placeholder: String,
    options: Array as PropType<Array<{ text: string; value: string }>>,
  },
  setup: (props, context) => {
    const refDatePickerVisible = ref(false);
    const content = computed(() => {
      switch (props.type) {
        case "text":
          return (
            <input
              value={props.modelValue}
              placeholder={props.placeholder}
              onInput={(e: any) =>
                context.emit("update:modelValue", e.target.value)
              }
              class={[s.formItem, s.input, props.error ? s.error : null]}
            />
          );
        case "emojiSelect":
          return (
            <EmojiSelect
              modelValue={props.modelValue?.toString()}
              onUpdateModelValue={(value) =>
                context.emit("update:modelValue", value)
              }
              class={[s.formItem, s.emojiList, s.error]}
            />
          );
        case "validationCode":
          return (
            <>
              <input
                value={props.modelValue}
                placeholder={props.placeholder}
                onInput={(e: any) =>
                  context.emit("update:modelValue", e.target.value)
                }
                class={[
                  s.formItem,
                  s.input,
                  props.error ? s.error : null,
                  s.validationCodeInput,
                ]}
              />
              <Button class={[s.formItem, , s.validationCodeButton]}>
                发送验证码
              </Button>
            </>
          );
        case "select":
          return (
            <select
              class={[s.formItem, s.select]}
              value={props.modelValue}
              onChange={(e) => {
                context.emit("update:modelValue", (e.target as any).value);
              }}
            >
              {props.options?.map((option) => (
                <option value={option.value}>{option.text}</option>
              ))}
            </select>
          );
        case "date":
          return (
            <>
              <input
                readonly
                placeholder={props.placeholder}
                value={props.modelValue}
                class={[s.formItem, s.input, props.error ? s.error : null]}
                onClick={() => {
                  refDatePickerVisible.value = true;
                }}
              />
              <Popup
                position="bottom"
                v-model:show={refDatePickerVisible.value}
              >
                <DatetimePicker
                  value={props.modelValue}
                  type="date"
                  title="选择年月日"
                  onConfirm={(date: Date) => {
                    context.emit("update:modelValue", new Time(date).format());
                    refDatePickerVisible.value = false;
                  }}
                  onCancel={() => {
                    refDatePickerVisible.value = false;
                  }}
                />
              </Popup>
            </>
          );
        case undefined:
          return context.slots.default?.();
      }
    });
    return () => {
      return (
        <div class={s.formRow}>
          <label class={s.formLabel}>
            {props.label && <span class={s.formItem_name}>{props.label}</span>}
            <div class={s.formItem_value}>{content.value}</div>
            {props.error && (
              <div class={s.formItem_errorHint}>
                <span>{props.error ?? "　"}</span>
              </div>
            )}
          </label>
        </div>
      );
    };
  },
});
