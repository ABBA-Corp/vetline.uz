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
    name: " Mushuk ",
    before: require('../assets/img/2.png'),
    after: require('../assets/img/1.png'),
  },
  {
    id: 1,
    name: "Kuchuk",
    before: require('../assets/img/3.png'),
    after: require('../assets/img/4.png'),
  },
  {
    id: 1,
    name: "Ot",
    before: "https://www.equilac.com/wp-content/uploads/2022/03/horse-milk-1.jpg",
    after: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg",
  },

];
