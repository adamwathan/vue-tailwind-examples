<template>
  <div class="bg-blue-500 w-100 rounded">
    <ul class="reset flex h-12 font-medium text-white">
        <li
                v-for="(tab, index) in inter_tabs"
                :key="index"
                class="mx-3 px-3 pt-3 cursor-pointer"
                :class="{'bg-white text-blue-500' : tab.active }"
                @click.prevent="toggleTo(index)"
        >
          {{ tab.title }}
        </li>
    </ul>
    <p class="content bg-white pl-2 pr-4 pb-4 pt-2">
      {{ activeContent }}
    </p>
  </div>
</template>

<script>
export default {
    props:['tabs'],
    data(){
        return{
          inter_tabs: []
        };
    },
    created(){
      this.inter_tabs = this.tabs;
    },
    computed:{
      activeContent(){
        return this.inter_tabs.filter(ele => ele.active)[0].content;
      }
    },
  methods:{
    toggleTo(index){
        this.inter_tabs = this.inter_tabs.map((tab) => {
          tab.active = false;
          return tab;
        });

        this.inter_tabs[index].active = true;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
