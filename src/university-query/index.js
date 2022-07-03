
import map from './data/univ.json';
import fakeMap from './data/cn.json';
import ukFakeMap from './data/uk.json';
import usaFakeMap from './data/usa.json';

const forginFakeMap = [
    ...ukFakeMap,
    ...usaFakeMap,
];

export function findFakeUniversity (str) {
    if (fakeMap.find(name => name === str)) {
        return str;
    }
    if (str === '') return '';
    const value = forginFakeMap.find(name => name.indexOf(str) === 0);
    if (value) return value;
    return '';
}

export function queryUniversity (str) {
    return map.filter(arr => arr[0].indexOf(str) !== -1);
}