import { MyInterface as MyInterfaceBase, myClassWithInterface as myClassWithInterfaceBase, myClassWithoutInterface as myClassWithoutInterfaceBase } from './interface'
import { MyInterface, myClassWithInterface, myClassWithoutInterface } from './export'

describe('test exports', () => {

    it('should export MyInterface', () => {
        expect(myClassWithInterface).toEqual(myClassWithInterfaceBase)
    });

    it('should export MyInterface', () => {
        expect(myClassWithoutInterface).toEqual(myClassWithoutInterfaceBase)
    });
    
    // Not Posible:
    // it('should export MyInterface', () => {
    //     expect(MyInterfaceBase).toEqual(MyInterface)
    // });
});