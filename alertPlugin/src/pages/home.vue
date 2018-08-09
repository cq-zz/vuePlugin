<template>
    <div class="home">
        <button @click="alertModal">点击弹出alert框</button>
    </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return{

        }
    },
    methods: {
        alertModal(){
            this.$alert({
                title:"信息提示",
                msg:"你点击了这个按钮!"
            })
        }
    }
}
</script>
<style scoped>
html,body{
    width: 100%;
    height: 100%;
}
.home{
    width: 100%;
    height: 100%;
}
.home button{
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
}
</style>
