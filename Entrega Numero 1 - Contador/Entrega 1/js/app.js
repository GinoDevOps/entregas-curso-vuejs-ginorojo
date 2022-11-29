var app = new Vue({
    el: '#app',
    data:{
        resultado:0,
    },
    methods:{
        sumar(){
            this.resultado += 1;
        },
        restar(){
            this.resultado -=1;
        }
    }
})