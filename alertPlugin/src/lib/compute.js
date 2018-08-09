export default {
    install : function(Vue,options){
        Vue.prototype.computeNum = function(type,num1,num2){
            switch(type){
                case "*":
                    return num1*num2
                case "/":
                    return num1/num2
                case "+":
                    return num1+num2
                case "-":
                    return num1-num2
                default:
                    break;
            }
        }
    }
}