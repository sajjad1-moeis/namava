import Api from "../../../Api";
import Carousel from "../Carouse";
let result = await Api("پیشنهاد");

export default function Suggestion() {
   return Carousel(result, "پیشمهاد شده برای شما", result[0].isIndex);
}
