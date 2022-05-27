<template>
    <div class="columns margin">
        <div class="column">
            <div class="columns">
                <div class="column  is-one-quarter"  v-for="item in arrayCantReports" :key="item.id">
                    <cards :title=item.name :content=item.cant />
                </div>
            </div>
            <div class="card list-card" >
                <div class="card-header">
                    <div class="card-header-title is-centered list-title">
                        Listado de ventas
                    </div>
                </div>
                <div class="card-content">
                    <the-table :data=arraySales :columns=columns />
                </div>
            </div>
            <div class="columns">
                <div class="column is-half">
                    <div class="card cards-blue">
                        <div class="card-header">
                            <div class="card-header-title income-title is-centered"> Ingreso total</div>
                        </div>
                        <div class="card-content">
                            <p class="label-dates">Fecha de la primera venta registrada: {{income.inicial_date}} </p>
                            <p class="label-dates">Fecha de la última venta registrada: {{income.final_date}} </p>
                            <p class="income-amount"> ${{income.amount}} </p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="column is-half">
                    <div class="card cards-blue">
                        <div class="card-header">
                            <div class="card-header-title income-title is-centered"> Ingreso total  por rango de fechas</div>
                        </div>
                        <div class="card-content cant">
                            <form>
                                <div class="columns">
                                    <div class="column is-12"> 
                                        <b-field label="Selecciona un rango de fechas">
                                            <b-datepicker
                                                placeholder="Click para seleccionar..."
                                                v-model="dates"
                                                range>
                                            </b-datepicker>
                                        </b-field>
                                        <div class="buttons " >
                                            <b-button type="sumbit" @click="incomeByDate">Buscar</b-button>
                                        </div>
                                        <div class="income-amount" v-if="incomeDate.status"> ${{incomeDate.amount}} </div>
                                        <div class="income-msg" v-else-if="incomeDate.status == false"> ¡Lo siento! No hay ventas dentro de ese rango de fechas </div>
                                        <div class="income-amount" v-else> $0 </div>
                                    </div>  
                                </div>
                            </form>
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
            arraySales: [],
            arrayCantReports: [],
            income: {},
            incomeDate: {},
            columns: [
                {
                    field: 'table',
                    label: 'Mesa',
                    width: '100',
                        numeric: true,
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'zone',
                        label: 'Zona',
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'diners',
                        label: 'Comensales',
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'nro_products',
                        label: 'Cant de productos',
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'total',
                        label: 'Total',
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'date',
                        label: 'Fecha de cierre',
                        searchable: true,
                        centered: true
                    }
                ],
                isFullPage: true,
        }

    },
    async mounted() {
    await this.getCantReports()
    await this.getSales()
    await this.getTotalIncome()
    },
    methods:{
        async getCantReports(){
            try {
                
                await axios.get('https://la-pikada-backend.herokuapp.com/api/cant-reports')
                            .then(response => {
                                this.arrayCantReports = response.data
                            })
                this.open()
            } catch (error) {
                console.log(error)
            }
        },
        async getSales(){
            try {
                await axios.get('https://la-pikada-backend.herokuapp.com/api/list-sales')
                .then( response => {
                    this.arraySales = response.data
                })
                
            } catch (error) {
                console.log(error)
            }
        },
        async getTotalIncome(){
            try {
                await axios.get('https://la-pikada-backend.herokuapp.com/api/total-amount')
                .then( response =>{
                    this.income = response.data
                })

            this.income.amount = this.income.amount.toLocaleString('en-US');
            this.income.inicial_date = this.income.inicial_date.toLocaleString('en-US');
            this.income.final_date = this.income.final_date.toLocaleString('en-US');
            } catch (error) {
                console.log(error)
            }
        },
        async incomeByDate(){
            try {
                this.open()
                const initial_date = this.dates[0].toISOString().slice(0, 10)
                const final_date = this.dates[1].toISOString().slice(0, 10)
                await axios.post(`https://la-pikada-backend.herokuapp.com/api/income-by-date-range?initial_date=${initial_date}&final_date=${final_date}`)
                            .then(response=>{
                                this.incomeDate = response.data
                            })
                console.log(this.incomeDate)
            this.incomeDate.amount = this.incomeDate.amount.toLocaleString('en-US');
            
            } catch (error) {
                console.log(error)
            }
        },
        open() {
                const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage ? null : this.$refs.element.$el
                })
                setTimeout(() => loadingComponent.close(),4 * 1000)
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
.income-title{
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
.income-amount{
    font-size: 3em;
    text-align: center;
}
.income-msg{
    font-size: 150%;
    text-align: center;
    font-weight: 400;
}
.label-dates{
    font-size: 100%;
    font-weight: 500;
}

.title-dates{
    font-size: 100%;
    font-weight: 500;
    text-align: center;
}

</style>
