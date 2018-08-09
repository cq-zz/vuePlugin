import Alert from './alertPluginModal'

function install(Vue){
    Object.defineProperty(Vue.prototype,'$alert',{
        get(){
            let div = document.createElement('div');
            document.body.appendChild(div);
            return (options)=>{
                let info = {};
                if(typeof options === "Object"){
                    info = {
                        title:options.tritle || "信息提示",
                        msg:options.msg || ""
                    }
                }else{
                    info = {
                        title:"提示",
                        msg:options || ""
                    }
                }

                const Constructor = Vue.extend(Alert);
                new Constructor({
                    data(){
                        return info
                    }
                }).$mount(div)
            };
        }
    });
}

export default install