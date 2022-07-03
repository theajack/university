
import map from './data/univ.json';
import fakeMap from './data/cn.json';
import ukFakeMap from './data/uk.json';
import usaFakeMap from './data/usa.json';

const fakeMapCollection = [
    ...fakeMap,
    ...clearMap([
        ...ukFakeMap,
        ...usaFakeMap,
    ])
];

function clearMap (arr) {
    return arr.map(item => {
        let index = item.indexOf('（');
        if (index === -1) {
            index = item.indexOf(' ');
        }
        if (index === -1) {
            return item;
        }
        return item.substring(0, index);
    });
}

function isFakeUniversity (str) {
    if (fakeMapCollection.find(name => name === str)) {
        return 'yes';
    }

    if (map.find(arr => arr[0] === str)) {
        return 'no';
    }

    return 'unknown';
}

export default function queryUniversity (str) {
    return map.filter(arr => arr[0].indexOf(str) !== -1).map((item) => {
        const [name, code, department, city, type, info] = item;
        return {name, code, department, city, type, info};
    });
}
queryUniversity.version = '1.0.1';
queryUniversity.isFake = isFakeUniversity;