<template>
<div>
    <div class="title"> Reportes de personal</div>
    <div class="columns">
        <div class="column side-margin">
           <card-table :titulo="Listado"/>

        </div>
        <div class="column side-margin">
            <card-table :titulo="Listado"/>

        </div>
    </div>
</div>
</template>

<script>
import TheTable from '@/components/Table.vue'
import CardTable from '@/components/CardTable.vue'

export default {
    name: 'Personal',
    components:{
        TheTable,
        CardTable
    }
    
}
</script>

<style>

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