<template>
    <div class="card cant-cards">
        <div class="card-header">
            <div class="card-header-title"> {{title}}</div>
        </div>
        <div class="card-content cant">
            {{content}}
        </div>
    </div>
</template>

<script>

export default{
    name: 'Cards',
    props: [ 'content', 'title'],

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
