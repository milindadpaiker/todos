const todosRoutes = require('../routes/todos');


describe('Test Handlers', function () {

    it('2 + 2 = 4', () => {       
        expect(todosRoutes.add(2, 2)).toBe(4);
    });
});

// test('1 + 1 = 2', () => {
//     expect(1+1).toBe(2);
// }) ;