import {Platform} from 'react-native';

const shadowsArray = {
  0: {
    ios: {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
    },
    android: {
      elevation: 0,
    },
  },
  1: {
    ios: {
      shadowColor: '#222',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
    },
    android: {
      elevation: 1,
    },
  },
  2: {
    ios: {
      shadowColor: '#222',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
    android: {
      elevation: 2,
    },
  },
  3: {
    ios: {
      shadowColor: '#222',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    android: {
      elevation: 3,
    },
  },
  4: {
    ios: {
      shadowColor: '#222',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
    },
    android: {
      elevation: 4,
    },
  },
  5: {
    ios: {
      shadowColor: '#222',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
  },
};

export const getShadow = (elevation) => shadowsArray[elevation][Platform.OS];
