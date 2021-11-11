const CrewMember = require('./CrewMember')
const Person = require('./Person')

const quiyet = new CrewMember("Quiyet")

describe('CrewMember Class', () => {
    test('is an instance of a CrewMember', () => {
        expect(quiyet instanceof CrewMember).toBeTruthy()
    })

    test('is an instance of a Person', () => {
        expect(quiyet instanceof Person).toBeTruthy()
    })
})