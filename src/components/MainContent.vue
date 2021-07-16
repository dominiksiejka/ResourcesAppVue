<template>
  <main-menu
    :current="handleChangeCurrentComponent"
    :onscreen="currentComponent"
    @search-resource="handleFilterResource"
    :handleDeleteAll="handleDeleteAllResources"
  ></main-menu>
  <main>
    <keep-alive>
      <component
        @new-resource="handleAddNewResource"
        :is="currentComponent"
      ></component>
    </keep-alive>
  </main>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResources from "./AddResources.vue";
import MainMenu from "../components/MainMenu.vue";
export default {
  components: {
    AddResources,
    StoredResources,
    MainMenu,
  },
  provide() {
    return {
      resourceData: this.resourcesData,
      handleDeleteItm: this.handleDeleteItem,
    };
  },
  data() {
    return {
      currentComponent: "stored-resources",
      resourcesData: [
        {
          id: 1,
          company: "Google",
          text: "You need to know how to google",
          link: "https://www.onet.pl",
          active: true,
        },
        {
          id: 2,
          company: "Official Guide",
          text: "The official Vue.js documentation",
          link: "https://www.onet.pl",
          active: true,
        },
      ],
    };
  },

  methods: {
    handleChangeCurrentComponent(source) {
      this.currentComponent = source;
    },
    handleDeleteItem(itemId) {
      const rightIndex = this.resourcesData.findIndex(
        (itm) => itm.id === itemId
      );
      this.resourcesData.splice(rightIndex, 1);
    },
    handleAddNewResource(newItem) {
      this.resourcesData.push(newItem);
    },
    handleFilterResource(value) {
      this.resourcesData.forEach((itm) => {
        if (itm.company.toLowerCase().includes(value.toLowerCase())) {
          itm.active = true;
        } else {
          itm.active = false;
        }
      });
    },
    handleDeleteAllResources() {
      this.resourcesData.length = 0;
    },
  },
};
</script>
