import Api from "../../../Api";
import Carousel from "../Carouse";
let result = await Api("spicial");
export default function SpecialCarousel() {
   return Carousel(result.slice(0, 12), "ویژه", result[0].isIndex);
}
