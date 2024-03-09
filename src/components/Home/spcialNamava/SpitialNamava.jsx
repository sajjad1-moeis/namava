import Carousel from "../Carouse";
import Api from "../../../Api";
let result = await Api("spicialNamava");
export default function SpitialNamava() {
   return Carousel(result, "اختصاصی نماوا", result[0].isIndex);
}
