<template>
    <div class="columns margin">
        <div class="column">
            <div class="columns">
                <div class="column  is-one-quarter">
                    <cards :titulo="20" :contenido="20" />
                </div>
                <div class="column  is-one-quarter">
                    <cards :contenido="20" :titulo="20" />
                </div>
            </div>
            <div class="card list-card" >
                <div class="card-header">
                    <div class="card-header-title is-centered list-title">
                        Listado de ventas
                    </div>
                </div>
                <div class="card-content">
                    <the-table />
                </div>
            </div>
            <div class="columns">
                <div class="column  is-half">
                    <div class="card cards-blue">
                        <div class="card-header">
                            <div class="card-header-title ingress-title is-centered"> Ingreso total</div>
                        </div>
                        <div class="card-content">
                            <p class="label-dates">Fecha la primera venta registrada: </p>
                            <p class="label-dates">Fecha la última venta registrada: </p>
                            <p class="ingress-amount">20000 </p>
                        </div>
                    </div>
                </div>
                <div class="column  is-half">
                    <div class="card cards-blue">
                        <div class="card-header">
                            <div class="card-header-title ingress-title is-centered"> Ingreso total  por rango</div>
                        </div>
                        <div class="card-content cant">
                            <div class="columns">
                                <div class="column is-12"> 
                                    <b-field label="Selecciona un rango de fechas">
                                        <b-datepicker
                                            placeholder="Click para seleccionar..."
                                            v-model="dates"
                                            range>
                                        </b-datepicker>
                                    </b-field>
                                    <p class="ingress-amount"> 20000 </p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import TheTable from '@/components/Table.vue'
import Cards from '@/components/CantCards.vue'
export default{
    name: 'Dashboard',
    props: [],
    components:{
        TheTable,
        Cards
    },
    data() {
        return {
            dates: [],
            arraySales: []
        }

    },
    async mounted() {
    await this.getsales()
    },
    methods:{
        async getsales(){
            try {
                // const data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                // this.arraySales = data
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.margin{
    margin-top: 2em;
    margin-right: 2em;
    margin-bottom: 2em;
    margin-left: 2em;
}
.cards-blue{
    background-color: #D5E5E2;
}
.ingress-title{
    font-size: 1.5em;
}
.list-title{
    font-size: 1.8em;
}

.list-card{
    margin-top: 2em;
    margin-bottom: 2em;
    border-style: solid;
    border-color: #E3A9A5;
}
.ingress-amount{
    font-size: 3em;
    text-align: center;
}

.label-dates{
    font-size: 100%;
    font-weight: 500;
}

.prueba{
    font-size: 3em;
    text-align: center;
}
</style>
