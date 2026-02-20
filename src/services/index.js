import { userService } from "./userService";
import { countryService } from "./countryService.js";
import { authService } from "./authService.js";

export default {
  users: userService,
  countries: countryService,
  auth: authService,
};
