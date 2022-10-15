import { Form as veeFrom, Field as veeField } from "vee-validate";

export default {
  install(app) {
    app.component("veeFrom", veeFrom);
    app.component("veeField", veeField);
  },
};
