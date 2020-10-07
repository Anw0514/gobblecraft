
export const dynamicWidth = (w) => {
  switch (true) {
    case w > 800:
      return 700;
    case w > 500:
      return w - 150;
    case w > 360:
      return 350;
    default:
      return w - 10;
  };
};

export const dynamicPadding = (w) => {
  const totalPad = w - dynamicWidth(w);
  return totalPad / 2;
};

export const dynamicFontSize = (w) => {

};
