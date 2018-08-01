<template>
    <div>
        <h2>。。。</h2>
        <h3>{{$store.state.count}}</h3>
        <h4>count为：{{count}}</h4><!-- 可以直接调用count属性 因为下面的计算属性里的简写方式 -->
        
        <button @click="$store.commit('add',20)">++</button>       
        <button @click="add(20)">+++</button><!-- 调用add方法且传参sum=20 -->
        <!-- 下面methods:mapMutations(['add'])处理了一下 可以直接调用add -->
        <button @click="addAction(200)">+++Action</button>
        <h5>{{count1}}</h5>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapMutations,mapState, mapGetters, mapActions} from 'vuex'
    export default {  //map即简写
        store,
        // computed:{//计算属性
        //     count(){//简写方式(1)、定义count属性返回值是this.$store.state.count
        //         return this.$store.state.count;
        //     }
        // },
        // computed:mapState({
        //     count:state=>state.count
        // })
        computed:{
            ...mapState(['count','num']),//简写方式(2)、在计算属性里调用的mapstate方法 
            //一种简写方式 不用再this.$store.state.count 直接调用count就行
            ...mapGetters(['count1'])//调用count1
        },
        methods:{
            ...mapMutations(['add']),//可以直接调用add方法
            ...mapActions(['addAction'])
        }


        
    }
</script>

<style scoped>

</style>