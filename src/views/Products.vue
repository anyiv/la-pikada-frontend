<template>
<div>
    <div class="title"> Reportes de Productos</div>
    <div class="columns">
        <div class="column side-margin">
           <card-table :titulo="20"/>
           <card-table :titulo="20"/>
        </div>
        <div class="column side-margin">
            <card-table :titulo="20"/>
            <card-table :titulo="20"/>
        </div>
    </div>
</div>
</template>

<script>
import CardTable from '@/components/CardTable.vue'
import TheTable from '@/components/Table.vue'

export default {
    name: 'Products',
    components:{
        CardTable,
        TheTable
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