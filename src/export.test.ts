import { MyInterface as MyInterfaceBase, myClassWithInterface as myClassWithInterfaceBase, myClassWithoutInterface as myClassWithoutInterfaceBase, myAbstract as myAbstractBase } from './interface'
import { MyInterface, myClassWithInterface, myClassWithoutInterface, myAbstract } from './export'

describe('test exports', () => {

    it('should export MyInterface', () => {
        expect(myClassWithInterface).toEqual(myClassWithInterfaceBase)
    });

    it('should export MyInterface', () => {
        expect(myClassWithoutInterface).toEqual(myClassWithoutInterfaceBase)
    });

    it('should export myAbstract', () => {
        expect(myAbstract).toEqual(myAbstractBase)
    });
    // Not Posible:
    // it('should export MyInterface', () => {
    //     expect(MyInterfaceBase).toEqual(MyInterface)
    // });
});