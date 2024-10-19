
import ImageViem from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
    install (app){

        app.component('XtxImageView',ImageViem)
        app.component('XtxSku',Sku)
    }
}
