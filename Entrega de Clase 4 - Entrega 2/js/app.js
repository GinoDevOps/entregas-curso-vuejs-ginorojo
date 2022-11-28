Vue.component("tabla", {
    props: {
        titulos: {
            type: Array,
            required: true
        },
        registros: {
            type: Array,
            required: true
        },
        clases:{
            type: String
        } 
    },
    template: `
        <div>
            <table class="table table-striped table-dark">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(registro, i) in registros" :key="i">
                        <th :class="clases">{{ i + 1 }}</th>
                        <th :class="clases" v-for="(row, r) in registro" :key="r">{{row}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});

var app = new Vue({
    el: "#app",
    data: {
        tabla1: {
            titulos: ["ID", "Nombre", "Director", "Año"],
            registros: [
                ["La Mascara", "Velez", "1999"],
                ["El Rey Leon", "Gomez", "2001 "],
                ["Titanic", "Godino", "2001"],
                ["Los Simpsons", "Gimenez", "1998"],
            ],
            clases:"azul fondoRojo",
                
    
        },
        tabla2: {
            titulos: ["ID", "Linea", "Ramal", "Color"],
            registros: [
                ["93", "Avellaneda", "Amarillo"],
                ["107", "Ciudad Universitaria", "Blanco"],
                ["111", "Constitucion", "Verde"],
                ["10", "Wilde", "Cyan"],
            ],
            clases:"rojo fondoAzul",

        },
        tabla3: {
            titulos: ["ID", "Gerencia", "Origen", "Destino"],
            registros: [
                ["Roca", "Constitucion", "Retiro"],
                ["San Martin", "Retiro", "Pilar"],
                ["Servicio Nacional", "A", "B"],
                ["Tren de la Costa", "Retiro", "Olivos"],
            ],
            clases:"verde fondoGris"
        },
        
    },
    template: `
        <div>
            
            <div>
                <tabla :titulos="tabla1.titulos" :registros="tabla1.registros" :clases="tabla1.clases"></tabla>
            </div>
                
            <div>
                <tabla :titulos="tabla2.titulos" :registros="tabla2.registros" :clases="tabla2.clases"></tabla>
             </div>
        
             <div>
                <tabla :titulos="tabla3.titulos" :registros="tabla3.registros" :clases="tabla3.clases"></tabla >
             </div>
        
        </div>
    `
});