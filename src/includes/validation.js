import {
  Form as veeForm,
  Field as veeField,
  defineRule,
  ErrorMessage,
} from "vee-validate";

import {
  required,
  max,
  min,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("veeForm", veeForm);
    app.component("veeField", veeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("max", max);
    defineRule("min", min);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
  },
};
