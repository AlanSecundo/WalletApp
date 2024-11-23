import {colors} from '../styles/colors';

const colorsFromType: {[key: string]: string} = {
  completed: colors.typeColors.completed,
  pending: colors.typeColors.pending,
  failed: colors.typeColors.failed,
};

const getColorFromType = (type: keyof typeof colorsFromType) => {
  return colorsFromType[type];
};

export {getColorFromType};
