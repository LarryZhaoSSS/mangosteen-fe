import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
    setup(props,context){
        return ()=>(
            <div>
                <div class={s.button_wrapper}>
                <Button class={s.button}>测试</Button>
                </div>
               
            </div>
        )
    }
})