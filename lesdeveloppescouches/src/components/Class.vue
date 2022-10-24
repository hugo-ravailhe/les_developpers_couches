<template>
  <div id="class-item">
    <div id="inside" :class="{selected: clicked}" @click="clicked = !clicked">
      <img id="content-img" :src="getImg(img)" :alt="name">
      <div id="text">
        <p>{{name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Class",
  props: {
    img: {
      type: String,
      default: '../assets/fricon.png'
    },
    name: String
  },
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    getImg(url) {
      return url
    },
  }
}
</script>

<style scoped>
#class-item {
  width: 15vw;
  height: 3vw;

  border-radius: 16px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

#inside {
  width: 18vw;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid #BBF0E3;
  border-radius: 16px;
}

#inside:hover {
  cursor: pointer;
  border: 1px solid #16be9e;
}

#content-img {
  height: 30px;
  width: 30px;
}

#text {
  width: 50%;
}

.selected {
  font-weight: bolder;
}
</style>