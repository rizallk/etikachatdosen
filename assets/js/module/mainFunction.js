const mainFunction = () => {
  // Set item ke localStorage
  window.setData = function setData(key, value) {
    localStorage.setItem(key, value);
  };

  // Get item dari localStorage
  window.getData = function getData(key) {
    return localStorage.getItem(key);
  };

  // Remove item dari localStorage
  window.delData = function delData(key) {
    localStorage.removeItem(key);
  };
};

export default mainFunction;
