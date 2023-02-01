const type = {
  base: 'BeVietnam-Regular',
  bold: 'BeVietnam-Regular',
  emphasis: 'BeVietnam-Regular',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
  extrasmall: 10,
  large: 16,
  extralarge: 18,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  extralarge_regular: {
    fontSize: size.extralarge,
  },
  large_regular: {
    fontSize: size.large,
  },
  medium_regular: {
    fontSize: size.medium,
  },
  small_regular: {
    fontSize: size.small,
  },
  extrasmall_regular: {
    fontSize: size.extrasmall,
  },
  extralarge_medium: {
    fontSize: size.extralarge,
    fontWeight: 300,
  },
  large_medium: {
    fontSize: size.large,
    fontWeight: 300,
  },
  medium_medium: {
    fontSize: size.medium,
    fontWeight: 300,
  },
  small_medium: {
    fontSize: size.small,
    fontWeight: 300,
  },
  extrasmall_medium: {
    fontSize: size.extrasmall,
    fontWeight: 300,
  },
  extralarge_bold: {
    fontSize: size.extralarge,
    fontWeight: 'bold',
  },
  large_bold: {
    fontSize: size.large,
    fontWeight: 'bold',
  },
  medium_bold: {
    fontSize: size.medium,
    fontWeight: 'bold',
  },
  small_bold: {
    fontSize: size.small,
    fontWeight: 'bold',
  },
  extrasmall_bold: {
    fontSize: size.extrasmall,
    fontWeight: 'bold',
  },
};

export default {
  type,
  size,
  style,
};
