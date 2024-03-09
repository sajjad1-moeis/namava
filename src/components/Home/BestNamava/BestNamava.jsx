import Carousel from "../Carouse";
import Api from "../../../Api";
let result = await Api("برترین");
export default function BestNamava() {
   return Carousel(result, "برترین فیلم ها", result[0].isIndex);
}
