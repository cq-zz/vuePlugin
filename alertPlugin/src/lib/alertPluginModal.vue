<template>
    <div v-if="show" class="content">
        <div class="alert-modal">
            <div class="alert-header">
                {{title}}
            </div>
            <div class="alert-body">
                {{msg}}
            </div>
            <div class="alert-footer">
                <button class="close-btn" @click="show=false">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'alertModal',
    data(){
        return{
            show:true,
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
html,body{
    width: 100%;
    height: 100%;
}
.content{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
}
.content .alert-modal{
    position: absolute;
    width: 200px;
    height: 150px;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 10px 5px 5px #fff;
}
.content .alert-modal div{
    width: 100%;
}
.content .alert-modal .alert-header{
    height: 30px;
    text-align: left;
    font-size: 22px;
}
.content .alert-modal .alert-body{
    height: 80px;
    text-align: center;
}
.content .alert-modal .alert-footer{
    height: 40px;
    text-align: center;
}
.content .alert-modal .alert-footer .close{
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 8px;
    border: none;
}
</style>


