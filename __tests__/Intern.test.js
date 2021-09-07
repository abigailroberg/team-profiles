const { test, expect } = require('@jest/globals')
const Intern = require('../lib/Intern.js')

test('creates a new intern object', () => {
    const intern = new Intern('name', 'id', 'email', 'school')

    expect(intern.name).toBe('name')
    expect(intern.id).toBe('id')
    expect(intern.email).toBe('email')
    expect(intern.extra).toBe('school')
})

test('gets intern info as an object', () => {
    const intern = new Intern('name', 'id', 'email', 'school')

    expect(intern.getRole()).toHaveProperty('name')
    expect(intern.getRole()).toHaveProperty('id')
    expect(intern.getRole()).toHaveProperty('email')
    expect(intern.getRole()).toHaveProperty('school')
})

test('gets intern name', () => {
    const intern = new Intern('name', 'id', 'email', 'school')

    expect(intern.getName()).toBe('name')
})

test('gets intern id', () => {
    const intern = new Intern('name', 'id', 'email', 'school')

    expect(intern.getId()).toBe('id')
})

test('gets intern email', () => {
    const intern = new Intern('name', 'id', 'email', 'school')

    expect(intern.getEmail()).toBe('email')
})

test('gets intern school', () => {
    const intern = new Intern('name', 'id', 'email', 'school')

    expect(intern.getSchool()).toBe('school')
})