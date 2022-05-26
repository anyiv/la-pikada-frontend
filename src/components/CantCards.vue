<template>
    <div class="card cant-cards">
        <div class="card-header">
            <div class="card-header-title"> {{titulo}}</div>
        </div>
        <div class="card-content cant">
            {{contenido}}
        </div>
    </div>
</template>

<script>

export default{
    name: 'Cards',
    props: [ 'contenido', 'titulo'],
    data:[
    ]

}
</script>

<style scoped>
.cant-cards{
    background-color: #F9C4BC;
}

.cant{
    font-size: 2em;
    text-align: center;
}  
</style>
