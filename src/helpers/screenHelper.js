const screenHelper = {
  getWidth() {
    return window.innerWidth > 0 ? window.innerWidth : screen.width;
  },

  getHeight() {
    return window.innerHeight > 0 ? window.innerHeight : screen.height;
  },
};

export default screenHelper;