<template>
  <div class="category-itme-all">
    <div class="category-itme">
      <div class="item" @click="itemClick('timeLimitSecondsKill')">
        <div>限时秒杀</div>
        <img src="//img11.360buyimg.com/n1/jfs/t1/87158/5/5206/259268/5deb539cEb50a3339/ddcd4c7381075764.jpg" alt="">
        <img src="//img10.360buyimg.com/n1/jfs/t23710/78/2380117645/597628/b59a930a/5b7f575bNfceba2da.jpg" alt="">
      </div>
      <div class="item item-right" @click="itemClick('foundgoods')">
        <div>发现好货</div>
        <img src="https://img13.360buyimg.com/n8/jfs/t1/97319/8/234/128308/5daa5d43Eda4b6bbe/cfa25a88047991ae.jpg" alt="">
        <img src="https://img13.360buyimg.com/n8/jfs/t1/105298/4/10578/287565/5e1b03b1E507fc486/c8e8dad8f0292bce.jpg" alt="">
      </div>
    </div>
    <div class="category-itme">
      <div class="item" @click="itemClick('brandFlashSales')">
        <div>品牌闪购</div>
        <img src="//img11.360buyimg.com/n1/s350x449_jfs/t1/67427/2/9866/195854/5d77480cE254489de/850ab02b7841a615.jpg!cc_350x449.jpg" alt="">
        <img src="//img14.360buyimg.com/n1/s350x449_jfs/t1/58221/10/12922/190501/5d9d6059E52ab04ab/ed9d68008289eb75.jpg!cc_350x449.jpg" alt="">
      </div>
      <div class="item item-right" @click="itemClick('newProductStarting')">
        <div>新品首发</div>
        <img src="//img14.360buyimg.com/n1/jfs/t1/64121/32/13040/184524/5da41bcaE4fd2eec2/4988ac45cdacfaec.jpg" alt="">
        <img src="//img14.360buyimg.com/n1/jfs/t1/91434/19/4688/203188/5de89e73Eca8b0526/a3ac711d340ba491.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryItme',
  data() {
    return {
    }
  },
  methods: {
    itemClick(itemTitle) {
      this.$router.push({ path:'/HomeCategoryItem',query:{ itemTitle: itemTitle }})
    }
  }
}
</script>
<style scoped>
  .category-itme {
    padding: 15px 5px 0 20px;
    display: flex;
    justify-content: space-around;
  }
  .category-itme .item div {
    font-weight: 550;
    font-size: 14px;
    margin-bottom: 6px
  }
  .category-itme .item img {
    margin-right: 10px;
    width: 60px;
    height: 60px;
    border-radius: 15px
  }
</style>
