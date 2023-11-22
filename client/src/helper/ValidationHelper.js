import Toast from "react-hot-toast";

class ValidationHelper {
  isEmpty(value) {
    return value.length === 0;
  }

  successToast(msg) {
    Toast.success(msg);
  }

  errorToast(msg) {
    Toast.error(msg);
  }
}

const validationHelper = new ValidationHelper();

export const { isEmpty, successToast, errorToast } = validationHelper;
