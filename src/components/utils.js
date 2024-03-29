import axios from "axios";

export async function getRestApi(url, setData) {
  try {
    const response = await axios.get("https://api.vetline.uz/api/" + url);
    console.log(response.data);
    setData(response?.data);
  } catch (error) {
    console.error(error);
  }
}
export const tabNames = [

  {
    id: 1,
    name: "Ot",
    before: require("../assets/img/5.png"),
    after: require("../assets/img/6.png")
  }
];
