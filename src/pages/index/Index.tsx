import CardBox from "../../components/Home/CardBox";
import IndexData from "./IndexData";
function News() {
  return <CardBox cards={IndexData().cards} />;
}
export default News;
