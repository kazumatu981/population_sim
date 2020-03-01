const {
    ERROR_MESASAGE,
    isNumberArray,
    isNonNegativeNumberArray,
    isRateNumberArray,
    numberArrayEqual,
    numberArrayAdd,
    numberArrayScalarProduct
} = require('../util');
const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Test Of Utility Functions', ()=>{
    describe('isNumberArray()', ()=>{
        it('Array of Number returns true', ()=>{
            expect(isNumberArray([ 0, 1, 2, 3 ])).to.be.true;
        });
        it('undefined returns false', ()=>{
            expect(isNumberArray(undefined)).to.be.false;
        });
        it('string returns false', ()=>{
            expect(isNumberArray('string')).to.be.false;
        });
        it('number returns false', ()=>{
            expect(isNumberArray(1)).to.be.false;
        });
        it('Object returns false', ()=>{
            expect(isNumberArray({abc: 'xyz'})).to.be.false;
        });
        it('empty array returns true', ()=>{
            expect(isNumberArray([])).to.be.true;
        });
        it('Array include non number member returns false', ()=>{
            expect(isNumberArray([1,2,'3',4])).to.be.false;
        });

        it('if size is defined check it (if same size return true)', ()=>{
            expect(isNumberArray([1,2,3,4], 4)).to.be.true;
        });
        it('if size is defined check it (size is defferent return false)', ()=>{
            expect(isNumberArray([1,2,3,4], 5)).to.be.false;
        });
        it('if size is non number ignore', ()=>{
            expect(isNumberArray([1,2,3,4], '5')).to.be.true;
        });
        
    });

    describe('isNonNegativeNumberArray()', ()=>{
        it('return true, if all member all positive.', ()=>{
            expect(isNonNegativeNumberArray([1,2,3]))
                .to.be.true;
        });
        it('return true, if all member all positive include zero.', ()=>{
            expect(isNonNegativeNumberArray([0,1,2,3]))
                .to.be.true;
        });
        it('return false, if exits negative member.',()=>{
            expect(isNonNegativeNumberArray([0,1,2,3,-1]))
                .to.be.false;
        });
        it('return false, if array is not array', ()=>{
            expect(isNonNegativeNumberArray('string'))
                .to.be.false;
        });
    });

    describe('isRateNumberArray()', ()=>{});

    describe('numberArrayAdd()', ()=>{
        it('Add 2D vector.',()=>{
            const result = numberArrayAdd( [ 1, 2 ],[ 3, 4 ]);
            expect(numberArrayEqual(result, [4, 6])).to.be.true;
        });
        it('If first argument is not number array throws exception', ()=>{
            expect(()=>{
                numberArrayAdd(1,[1]);
            }).to.throw(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
        });
        it('If 2nd argument is not number array throws exception', ()=>{
            expect(()=>{
                numberArrayAdd([1],'123');
            }).to.throw(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
        });
        it('defferent dimension throws exception', ()=>{
            expect(()=>{
                numberArrayAdd([1,2],[1]);
            }).to.throw(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
        });
    });

    describe('numberArrayEqual()', ()=>{
        it('If same vector returns true.', ()=>{
            expect(numberArrayEqual([1,2,3,456], [1,2,3,456]))
                .to.be.true;
        });
        it('If defferent vector returns true.', ()=>{
            expect(numberArrayEqual([1,2,3,456], [1,2,3,46]))
                .to.be.false;
        });
        it('If first argument is not number array throws exception', ()=>{
            expect(()=>{
                numberArrayEqual(1,[1]);
            }).to.throw(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
        });
        it('If 2nd argument is not number array throws exception', ()=>{
            expect(()=>{
                numberArrayEqual([1],'123');
            }).to.throw(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
        });
        it('defferent dimension throws exception', ()=>{
            expect(()=>{
                numberArrayEqual([1,2],[1]);
            }).to.throw(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
        });

    });

    describe('numberArrayScalarProduct', ()=>{
        it('Normal Scalar product.', ()=>{
            const result = numberArrayScalarProduct(5, [1,2,3]);
            expect(numberArrayEqual(result, [5,10,15])).to.be.true;
        });
        it('Vector Scalar product.', ()=>{
            const result = numberArrayScalarProduct([1,2,3], [1,2,3]);
            expect(numberArrayEqual(result, [1,4,9])).to.be.true;
        });
        it('second argument is not number array then throw exception.', ()=>{
            expect(()=>{
                numberArrayScalarProduct(1, 'string');
            }).to.throws(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
        });
        it('first argument is niether number nor number array, then throws exception', ()=>{
            expect(()=>{
                numberArrayScalarProduct('1',[1,2,3]);
            }).to.throws(ERROR_MESASAGE.SCALAR_MUST_BE_NUMBER_OR_NUMBER_ARRAY);
        })
    })
})