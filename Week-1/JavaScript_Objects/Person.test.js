const Person = require('./Person')

describe('person class datatypes', () => {
    //name is of type string
    test('name should be string', () => {
        // create instance of the class
        const testPerson = new Person('Doja Cat')
        
        expect(typeof testPerson.name).toBe('string')
    })

    test('parents should be object', () => {
        // create instance of class w/ parent parameter
        const testPerson = new Person('Jazmin', [])

        expect(typeof testPerson.parents).toBe('object')
    })

})

describe ('person relationships', () => {
    test('who is my parent', () => {
        // create instance of class w/ parent parameter
        const testRanffi = new Person('Ranffi', [])
        const testQuiyet = new Person('Quiyet', [testRanffi])
    
        expect(testQuiyet.parents[0].name).toBe(testRanffi.name)
    })
})

describe ('childOf function', () => {
    test('childOf value is a string', () => {
        // datatype of value
        const testRanffi = new Person('Ranffi', [])
        const testQuiyet = new Person('Quiyet', [testRanffi])

        expect(typeof testQuiyet.childOf()).toBe("string")
    })

    test('child has correct parents', () => {
        const testRanffi = new Person('Ranffi', [])
        const testQuiyet = new Person('Quiyet', [testRanffi])

        expect(testQuiyet.childOf()).toEqual(testRanffi.name)
    })

    test('childOf value is not empty', () => {
        const testRanffi = new Person('Ranffi', [])
        // const testQuiyet = new Person('Quiyet', [testRanffi])

        expect(testRanffi.childOf()).not.toBe(' & ')
    })
})

// const Person = require('./Person')

// describe('Person class datatypes', () => {
//     // name is of type string
//     test('name should be a string', () => {
//         // create instance of a class
//         const testPerson = new Person('Tony')

//         expect(typeof testPerson.name).toBe('string')
//     })
// })

