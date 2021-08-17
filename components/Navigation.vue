<template>
    <header>
        <a href="/" id="logo">Title</a>
        <div id="menu">
            <div>search</div>
        </div>
    </header>
</template>

<style scoped>
    header {
        position: fixed;
        top:0;
        left:0;
        padding: 15px;
        background: white;
        width: 100%;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
    }
    #logo {
        color: red;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 22px;
    }
</style>