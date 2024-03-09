import Carousel from "../Carouse";
import Api from "../../../Api";
let result = await Api("new");
export default function NewNamava() {
   return Carousel(result, "تازه ها نماوا", result[0].isIndex);
}
