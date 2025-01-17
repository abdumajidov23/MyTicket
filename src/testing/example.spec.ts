import { sum } from "./example"


test("1+2=3",()=>{
    expect(sum(1,2)).toBe(3)
})

test("1+2!=4",()=>{
    expect(sum(1,2)).not.toEqual(4)
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
//   test('zero', () => {
//     const z = 0;test('two plus two', () => {
//         const value = 2 + 2;
//         expect(value).toBeGreaterThan(3);
//         expect(value).toBeGreaterThanOrEqual(3.5);
//         expect(value).toBeLessThan(5);
//         expect(value).toBeLessThanOrEqual(4.5);
      
//         // toBe and toEqual are equivalent for numbers
//         expect(value).toBe(4);
//         expect(value).toEqual(4);
//       });
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
//   });


  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
