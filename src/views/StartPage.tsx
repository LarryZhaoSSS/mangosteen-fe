import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { OverlayIcon } from "../shared/Overlay";
import s from "./StartPage.module.scss";
export const StartPage = defineComponent({
  props: ["name"],
  setup(props, context) {
    return () => (
      <div>
        <MainLayout>
          {{
            title: () => "山竹记账",
            icon: () => (
              <OverlayIcon/>
            ),
            default: () => (
              <>
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
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
