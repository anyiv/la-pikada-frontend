<template>
<div class="container">
    <div class="title"> Reportes de personal</div>
    <div class="columns">
        <div class="column side-margin">
           <card-table :title=waitersListTitle :data=waitersList :columns=columns />

        </div>
        <div class="column side-margin">
            <card-table :title=cashiersListTitle :data=cashiersList :columns=columns />

        </div>
    </div>
</div>
</template>

<script>
import TheTable from '@/components/Table.vue'
import CardTable from '@/components/CardTable.vue'
import axios from 'axios'

export default {
    name: 'Personal',
    components:{
        TheTable,
        CardTable
    },
    data(){
        return{
            waitersList: [],
            cashiersList: [],
            waitersListTitle: "Cantidad de ventas por mesero",
            cashiersListTitle: "Cantidad de ventas por cajero",
            columns:[
                {
                    field: 'name',
                    label: 'Nombre',
                    centered: true
                },
                {
                    field: 'quantity',
                    label: 'Cantidad',
                    centered: true
                },
            ]
        }
    },
    async mounted(){
    await this.getWaitersList()
    await this.getCashiersList()
    },
    methods:{
        async getWaitersList(){
            try {
                await axios.get('https://la-pikada-backend.herokuapp.com/api/waiter-more-sales')
                            .then(response =>{
                                this.waitersList = response.data
                            })
                this.open();
            } catch (error) {
                console.log(error)
            }
        },
        async getCashiersList(){
            try {
                await axios.get('https://la-pikada-backend.herokuapp.com/api/cashier-more-sales')
                            .then(response =>{
                                this.cashiersList = response.data
                            })
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

.side-margin{
    margin-left: 1em;
    margin-right: 1em;
}

.title{
    margin: 1em;
    font-size: 1.5em;
    text-align: center;
}

</style>