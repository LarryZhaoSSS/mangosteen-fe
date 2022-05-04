import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>
          <ul>
            <li>
              <router-link to="/">Foo</router-link>
            </li>
            <li>
              <router-link to="/about">Bar</router-link>
            </li>
          </ul>
        </header>
        <div>
          <RouterView />
        </div>
      </>
    );
  },
});
