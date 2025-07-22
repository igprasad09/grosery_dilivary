import {atom} from 'recoil';

export const locationNameAtom = atom({
     key:"locationName",
     default:''
});

export const product_data = atom({
      key:"product_data",
      default: []
})

export const cartCount = atom({
        key:"cartCount",
        default: 0
})