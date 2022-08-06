import { defineComponent, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tabs,Tab } from '../../shared/Tabs';
import s from './ItemList.module.scss'
import { ItemSummary } from './ItemSummary';
export const ItemList = defineComponent({
    setup(props,context){
        const refSelected = ref(0)
        return ()=>(
           <MainLayout>{
               {
                   title:()=>'山竹记账',
                   icon:()=><Icon name="menu"/>,
                   default:()=>(
                       <Tabs classPrefix={'cutomTabs'} v-model:selected={refSelected.value}>
                           <Tab name="本月"><ItemSummary/></Tab>
                           <Tab name="上月"><ItemSummary/></Tab>
                           <Tab name="今年"><ItemSummary/></Tab>
                           <Tab name="自定义时间"><ItemSummary/></Tab>
                       </Tabs>
                   )
               }
               }
           </MainLayout>
        )
    }
})