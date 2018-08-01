<template>
    <div>
        <router-link :to="{name:'sublist1',params:{a:'xx',b:'yy'}}">subList1</router-link>
        <router-link to="/List/Sublist2/刘宇阳/大宝贝">subList2</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>