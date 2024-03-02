function describe_city(city_name, country_name) {
    if (city_name === void 0) { city_name = "Karachi"; }
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log("".concat(city_name, " is in ").concat(country_name));
}
describe_city("Lahore");
describe_city("New York", "USA");
describe_city("Delhi", "India");
