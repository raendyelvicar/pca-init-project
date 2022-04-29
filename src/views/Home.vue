<template>
  <div class="home">
    <div class="gutter-example space-align-container">
      <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
        <div
          class="gutter-box"
          v-for="item in products"
          :key="item.id"
          @click="() => (modal2Visible = true)"
        >
          <Card
            :title="item.title"
            :price="item.price"
            :image="item.image"
          ></Card>
        </div>
      </VueSlickCarousel>
    </div>

    <div id="components-modal-demo-position">
      <a-modal
        v-model="modal2Visible"
        title="Vertically centered modal dialog"
        centered
        @ok="() => (modal2Visible = false)"
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </a-modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/Card.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Carousel,
    Card,
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        centerMode: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
      modal1Visible: false,
      modal2Visible: false,
    };
  },
  computed: {
    ...mapGetters({ products: "getAllProducts" }),
  },
  methods: {
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible;
    },
  },
};
</script>
<style>
.slick-prev,
.slick-next {
  z-index: 1;
}

.slick-slide {
  padding: 0;
}

.slick-next:before,
.slick-prev:before {
  color: #00559a;
  font-size: 32px;
}

.slick-prev:focus:before,
.slick-next:focus:before {
  color: #00559a;
  font-size: 32px;
}
</style>
