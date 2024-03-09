import Api from "../../../Api";
import Carousel from "../Carouse";
let result = await Api("Free");
export default function FreeNamava() {
   return Carousel(result, "ویژه", result[0].isIndex);
}
