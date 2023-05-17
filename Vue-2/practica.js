new Vue({
    el: "#practicas",
    data: {
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        despedida: "Adiós Desde La Instancia : practicas",
        edad: 21,
        sujeto: ["Joker",
            "Poison Ivy",
            "Deadshot",
            "Catwoman",
            "Red Tool",
            "Batgirl",
            "Huntress"],
        activo: true,
        blog: "<h4>Amor, luz, felicidad, gemas, sonrisa</h4>",
        texto: "",
        texto2: "",
        nombre: "",
        n: true,
        mensaje: '',
        agente: "",
        mensaje2: "",
        text_error:false,
        text_success:false,
        sizetxt:""
    },
    methods: {
        odio: function () {
            console.log("Siento Odio")
        },
        cc: function () {
            document.body.style.backgroundColor = "red";
        },
        bg: function (color) {
            document.body.style.backgroundColor = color;
        },
        verificarname: function () {
            if (this.nombre.length > 3) {
                this.mensaje = "El Nombre Es Valido"
                let obj = document.getElementById("mensaje")
                obj.style.color = "green"
            } else {
                this.mensaje = "El Nombre No Es Valido"
                let obj = document.getElementById("mensaje")
                obj.style.color = "red"
            }
        },
        buscarAgente: function () {
            if (this.agente.length > 3) {
                if (this.agente.toLowerCase() === "jett") {
                    this.mensaje2 = "Jett es una agente móvil y letal que puede moverse rápidamente por el mapa";
                } else if (this.agente.toLowerCase() === "reyna") {
                    this.mensaje2 = "Reyna es una agente muy agresiva que puede curarse al eliminar a los enemigos";
                } else if (this.agente.toLowerCase() === "sova") {
                    this.mensaje2 = "Sova es una agente de inteligencia que puede rastrear a los enemigos y revelar su posición";
                } else {
                    this.mensaje2 = "No se ha encontrado información sobre el agente ingresado";
                }

                document.getElementById("mensaje2").innerHTML = this.mensaje2;

            } else {
                document.getElementById("mensaje2").innerHTML = " Muy Corto Bro"
            }
        },
        cotest: function(){

            let basico = document.getElementsByClassName("color-verde")
            if (this.nombre === "sidis" ){
                this.text_success = true
                this.text_error = false
            }else {
                this.text_error = true
                this.text_success = false
            }
        },
        redirigir: function (){
            window.location.href = this.url + '?autoplay=1'
        },   
        cambiarTamaño: function(){
            let size = this.sizetxt
            let cosa = document.getElementById("titular")
            cosa.style.size = size
        }
    },
});

