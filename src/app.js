import { formatTokenType } from "sucrase/dist/parser/tokenizer/types";
import { getData } from "./lib/service";

let newData = getData(7);

newData.then((result) => {
  console.log(result);
});
