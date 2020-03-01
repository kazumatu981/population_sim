const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('!!!!!These tests are not test for this Package!!!!!', () =>{
    it('Identical map on numerical array will be able to use as cloning instance !!', ()=>{
        const source = [0,1,2,3];
        const result = source.map(x=>x);

        expect(source.length == result.length).to.be.true;
        expect(source.every((_, i)=>source[i] == result[i])).to.be.true;

        source[0] = 1;

        expect(source[0] == 1).to.be.true;
        expect(result[0] == 0).to.be.true;

    });
    
})