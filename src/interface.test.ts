import { MyInterface, myClassWithInterface, myClassWithoutInterface, myAbstract  } from './interface';
describe('interface test', () => {

    it('should extend pure abstract', () => {
        expect(new myClassWithoutInterface()).toBeInstanceOf(myAbstract)
    });

    // Not Posible:
    // it('should implement interface', () => {
    //     expect(new myClassWithInterface()).toBeInstanceOf(MyInterface)
    // });
});