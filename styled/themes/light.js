const ultraPink = '#EA4492'
const pink = '#FF9CDA'
const ultraBlue = '#004E9A'
const blue = '#428CD4'
const ultraBlack = '#041B2D'
const white = '#fff'
const quicksand = '"Quicksand", "Helvetica", "Arial", sans-serif'
const nunito = '"Nunito Sans", "Helvetica", "Arial", sans-serif;'

const theme = {
  pink,
  ultraPink,
  ultraBlue,
  blue,
  ultraBlack,

  fontFamilyTitle: quicksand,
  fontFamilyText: nunito,

  space: 8,
  size: 16,

  background: white,

  colorPrimary: '#004E9A',
  colorPrimaryLight: '#428CD4',
  colorSecondary: '#EA4492',
  titleSize: 24,
  skeleton: {
    baseColor: '#ddd',
    baseColorDark: '#dcdcdc',
    shineColor: '#efefef',
  },

  color: {
    primary: ultraBlue,
    primaryLight: blue,
    secondary: ultraPink,
    secondaryLight: pink,
    ultraBlack,
    pink,
    ultraPink,
    ultraBlue,
    blue,
  },
  gradient: {
    primary: `linear-gradient(142deg, ${ultraBlue} 0%, ${ultraPink} 100%)`,
    pink: `linear-gradient(142deg, ${ultraPink} 0%, ${pink} 100%)`,
    pinkBlue: `linear-gradient(142deg, ${pink} 0%, ${blue} 100%)`,
    blue: `linear-gradient(142deg, ${ultraBlue} 0%, ${blue} 100%)`,
    darkBlue: `linear-gradient(142deg, ${ultraBlue} 0%, ${ultraBlack} 100%)`,
  },

}

export default theme
