import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import icon from "../../assets/icons/clock.svg";
import s from "./WelcomeLayout.module.scss";
import { WelcomeLayout } from "./WelcomeLayout";
export const Second = defineComponent({
    setup(props, context) {
        const slots = {
          icon: () => <img class={s.icon} src={icon} />,
          title: () => (
            <h2>
              每日提醒
              <br />
              不遗漏一笔账
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
              <RouterLink class={s.next} to="/welcome/3">
                下一页
              </RouterLink>
              <RouterLink to="/start"> 跳过</RouterLink>
            </>
          ),
        };
        return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
      },
});
