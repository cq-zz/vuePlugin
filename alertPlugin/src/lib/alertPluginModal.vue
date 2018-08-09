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
    padding: 20px;
    top: 50%;
    left: 50%;
    margin-top: -95px;
    margin-left: -120px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 5px 5px 5px 5px grey;
}
.content .alert-modal .alert-header{
    width: 100%;
    height: 30px;
    text-align: left;
    font-size: 22px;
}
.content .alert-modal .alert-body{
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    height: 80px;
}
.content .alert-modal .alert-footer{
    width: 100%;
    height: 40px;
    text-align: center;
}
.content .alert-modal .alert-footer .close-btn{
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 8px;
}
</style>


