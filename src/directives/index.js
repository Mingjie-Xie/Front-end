
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app){

        
app.directive('img-lazy',{
    mounted(el,binding){
        console.log(el,binding.value); 

       const { stop } = useIntersectionObserver(
            el,
            ([{isIntersecting }]  )=>{
                console.log(isIntersecting);

                if(isIntersecting){
                    //进入视口
                    el.src = binding.value

                    stop()
                }
             },
            )
        }
})
    }
}