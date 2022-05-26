<template>
<div>
    <div class="card cards-blue">
        <div class="card-header">
            <div class="card-header-title ingress-title is-centered"> {{ titulo }}</div>
        </div>
        <div class="card-content">
            <b-table :data="data" :columns="columns"></b-table>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'CardTable',
    props: [ "titulo"],
    data() {
            return {
                data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        }
}
</script>

<style scoped>
.list-card{
    margin-top: 2em;
    margin-bottom: 2em;
    border-style: solid;
    border-color: #E3A9A5;
}


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

.list-title{
    font-size: 1.5em;
}

.cards-blue{
    background-color: #D5E5E2;
    margin-top: 2em;
}
</style>