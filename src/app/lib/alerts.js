import { toast } from "react-toastify";

function toastifySuccess(msg) {
  return toast.success(msg);
}

function toastifyError(msg) {
  return toast.error(msg);
}

export { toastifySuccess, toastifyError };
