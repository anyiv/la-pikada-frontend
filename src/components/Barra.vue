<template>
    <b-navbar class="top">
        <template #brand>
            <b-navbar-item >
                <img class="sizes"
                    src="https://i.imgur.com/wsb5nhT.png"
                    alt="Some logo i guess"
                >
            </b-navbar-item>
        </template>
        <!-- <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template> -->

        <!-- <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template> -->
    </b-navbar>
</template>

<script>

export default {
    name: 'TopBar'
}
</script>

<style scoped>
.top{
    background-color: #54B8B6;
}
.sizes{
    height: 40px;
    width: 40px;
}
</style>