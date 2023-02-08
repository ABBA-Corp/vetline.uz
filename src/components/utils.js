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
    id: 0,
    name: "Xo'roz"
  },
  {
    id: 1,
    name: "Ho'kiz"
  },
  {
    id: 2,
    name: "Novvos"
  }
];
