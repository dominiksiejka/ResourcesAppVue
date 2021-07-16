import { createApp } from "vue";
import App from "./rootComponent/App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import ModalBackDrop from "./components/UI/ModalBackDrop.vue";
const app = createApp(App);
app.component("base-card", BaseCard);
app.component("modal-backdrop", ModalBackDrop);
app.mount("#app");
