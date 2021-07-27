import toastr from "toastr";
import "toastr/build/toastr.min.css";

const isError = (text) => {
  toastr.error(text)
};
const isSuck = (text) => {
    toastr.success(text);
}
const loading = (text) => {
  // let t = null;
  // Object.assign(t, toastr);

  toastr.options = {
    "timeOut": "0"
  }
  toastr.info(text);
  toastr.options = {
    "timeOut": "5000"
  }
}
const clear = () => {
  toastr.clear();
}

export default {isError, isSuck, loading, clear};