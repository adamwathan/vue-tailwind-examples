<template>
  <div class="flex items-center justify-center container mx-auto">
    <Tab :tabs="tabs"></Tab>
  </div>
</template>

<script>
import Tab from '@/components/Tab';

export default {
  components:{
    Tab
  },
  data(){
    return{
      tabs: [
        {
          active: false,
          title: 'History',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet at blanditiis consequuntur deleniti doloribus earum explicabo facere harum magni, minima nostrum numquam, quis repellendus, tempora unde ut voluptatibus?\n' +
                  '      Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
          active: true,
          title: 'Geography',
          content: 'sLorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet at blanditiis consequuntur deleniti doloribus earum explicabo facere harum magni, minima nostrum numquam, quis repellendus, tempora unde ut voluptatibus?\n' +
                  '      Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
      ],
    }
  }
}
</script>
