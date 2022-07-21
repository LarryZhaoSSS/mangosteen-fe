import { defineComponent } from "vue";
import s from "./TagCreate.module.scss";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
export const TagCreate = defineComponent({
  setup(props, context) {
    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => <Icon name="left" />,
          default: () => {
            return <form>
              <div>
                <label>
                  <span>标签名</span>
                  <input type="text" />
                </label>
              </div>
              <div>
                <label>
                  <span>符号</span>
                  <div>
                    <nav>
                      <span>表情</span>
                      <span>手势</span>
                      <span>职业</span>
                    </nav>
                    <ol>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li>10</li>
                      <li>11</li>
                      <li>12</li>
                      <li>13</li>
                      <li>14</li>
                      <li>15</li>
                      <li>16</li>
                      <li>17</li>
                      <li>18</li>
                      <li>19</li>
                      <li>20</li>
                    </ol>
                  </div>
                </label>
              </div>
              <div>
                {" "}
                <p>记账时长按标签进行编辑</p>
              </div>
              <div>
                <button>确定</button>
              </div>
            </form>;
          },
        }}
      </MainLayout>
    );
  },
});
