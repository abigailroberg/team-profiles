const { test, expect } = require('@jest/globals')
const Manager = require('../lib/Manager.js')

test('getRole returns manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'phone')

    expect(manager.getRole()).toHaveProperty('name')
    expect(manager.getRole()).toHaveProperty('id')
    expect(manager.getRole()).toHaveProperty('email')
    expect(manager.getRole()).toHaveProperty('phone')
}) 