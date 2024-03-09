import Carousel from "../Carouse";
import Api from "../../../Api";
let result = await Api("سریال");
export default function Serial() {
   return Carousel(result, "سریال های ایرانی", result[0].isIndex);
}
