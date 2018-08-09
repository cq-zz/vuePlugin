<template>
    <div class="home">
        <button @click="alertModal">点击弹出alert框</button>
        <button @click.stop="compute">计算</button>
        <input type="text" v-model="num1">
        <select v-model="type">
            <option value="*" selected>*</option>
            <option value="%">%</option>
            <option value="+">+</option>
            <option value="-">-</option>
        </select>
        <input type="text" v-model="num2">=
        {{num}}    
    </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return{
            num:"",
            num1:8,
            num2:4,
            type:""
        }
    },
    methods: {
        alertModal(){
            this.$alert({
                title:"信息提示",
                msg:"你点击了这个按钮!"
            })
        },
        compute:function(){
            this.num = this.computeNum(this.type,this.num1,this.num2)
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
