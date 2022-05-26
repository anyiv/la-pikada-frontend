<template>
<div class="container">
    <div class="title"> Reportes de Ventas</div>
    <div class="columns">
        <div class="column side-margin">
           <card-table :title=productListTitle :data=productList :columns=columns />
        </div>
        <div class="column side-margin">
           <card-table :title=paymentTypeListTitle :data=paymentTypeList :columns=columns />
           <card-table :title=zonesListTitle :data=zonesList :columns=columns />
        </div>
    </div>
</div>
</template>

<script>
import CardTable from '@/components/CardTable.vue'
import TheTable from '@/components/Table.vue'
import axios from 'axios'

export default {
    name: 'Products',
    components:{
        CardTable,
        TheTable
    },
    data(){
        return{
        productListTitle: "Productos más vendidos",
        paymentTypeListTitle: "Tipos de pago más usados",
        zonesListTitle: "Concurrencia de zonas por venta",
        productList: [],
        paymentTypeList: [],
        zonesList: [],
        columns: [
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
            ],
        }
    },
    async mounted() {
    await this.getProductsList()
    await this.getMethodTypesList()
    await this.getZonesList()
    },
    methods:{
        async getProductsList(){
            try {
                await axios.get('https://la-pikada-backend.herokuapp.com/api/poducts_most_selled')
                            .then(response =>{
                    this.productList = response.data
                    })
                this.open()
            } catch (error) {
                console.log(error)
            }
        },
        async getMethodTypesList(){
            try {
                await axios.get('https://la-pikada-backend.herokuapp.com/api/cant-by-payment-type')
                            .then(response =>{
                                this.paymentTypeList = response.data
                            })
            } catch (error) {
                console.log(error)
            }
        },
        async getZonesList(){
            try {
                await axios.get('https://la-pikada-backend.herokuapp.com/api/cant-by-zones')
                            .then(response =>{
                                this.zonesList = response.data
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