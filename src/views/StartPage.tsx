import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import { NavBar } from '../shared/NavBar';
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
    props:['name'],
    setup(props,context){
        return ()=>(
            <div>
                <NavBar>
                    {{
                        default:'山竹记账',
                        icon:<Icon name="menu" class={s.navIcon} />
                    }}
                </NavBar>
                <Center class={s.pigWrapper}>
                    <Icon name="pig" class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                <Button class={s.button} onClick={()=>{console.log('hi')}}>测试</Button>
                </div>
               <FloatButton iconName='add' />
            </div>
        )
    }
})