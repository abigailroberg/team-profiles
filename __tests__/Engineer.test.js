const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer.js')

test('creates a new engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')

    expect(engineer.name).toBe('name')
    expect(engineer.id).toBe('id')
    expect(engineer.email).toBe('email')
    expect(engineer.extra).toBe('github')
})

test('gets engineer info as an object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')

    expect(engineer.getRole()).toHaveProperty('name')
    expect(engineer.getRole()).toHaveProperty('id')
    expect(engineer.getRole()).toHaveProperty('email')
    expect(engineer.getRole()).toHaveProperty('github')
})

test('gets engineer name', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')

    expect(engineer.getName()).toBe('name')
})

test('gets engineer id', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')

    expect(engineer.getId()).toBe('id')
})

test('gets engineer email', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')

    expect(engineer.getEmail()).toBe('email')
})

test('gets engineer github', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')

    expect(engineer.getGithub()).toBe('github')
})