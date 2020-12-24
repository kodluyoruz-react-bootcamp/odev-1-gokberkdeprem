import { formatTokenType } from "sucrase/dist/parser/tokenizer/types";
import { getData } from "./lib/service"; //import getData function to use in this file

let newData = getData(7); //getData function needs an integer argument for an id of users.

newData.then((result) => {
  //data transfer from the API is done (then) logs the results.
  console.log(result);
});
