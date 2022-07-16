import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { NavBar } from "../shared/NavBar";
import { Overlay } from "../shared/Overlay";
import s from "./StartPage.module.scss";
export const StartPage = defineComponent({
  props: ["name"],
  setup(props, context) {
    const refOverlayVisible = ref(false);
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value;
    };
    return () => (
      <div>
        <NavBar>
          {{
            default: () => "山竹记账",
            icon: () => (
              <Icon name="menu" class={s.navIcon} onClick={onClickMenu} />
            ),
          }}
        </NavBar>
        <Center class={s.pigWrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <RouterLink to="/items/create">
            <Button
              class={s.button}
              onClick={() => {
                console.log("hi");
              }}
            >
              开始记账
            </Button>
          </RouterLink>
        </div>
        <RouterLink to="/items/create">
          <FloatButton iconName="add" />
        </RouterLink>
        {refOverlayVisible.value && (
          <Overlay onClose={() => (refOverlayVisible.value = false)} />
        )}
      </div>
    );
  },
});
