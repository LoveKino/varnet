'use strict';

module.exports = {
    use: 'domain',
    type: 'exist',
    reduce: (depRet, next) => {
        for (let i = 0; i < depRet.length; i++) {
            let item = depRet[i];
            if (next(item)) {
                return true;
            }
        }
        return false;
    }
};
