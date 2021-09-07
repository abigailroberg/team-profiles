const { test, expect } = require('@jest/globals')
const Manager = require('../lib/Manager.js')

test('creates a new manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'phone')

    expect(manager.name).toBe('name')
    expect(manager.id).toBe('id')
    expect(manager.email).toBe('email')
    expect(manager.extra).toBe('phone')
})

test('gets manager info as an object', () => {
    const manager = new Manager('name', 'id', 'email', 'phone')

    expect(manager.getRole()).toHaveProperty('name')
    expect(manager.getRole()).toHaveProperty('id')
    expect(manager.getRole()).toHaveProperty('email')
    expect(manager.getRole()).toHaveProperty('phone')
})

test('gets manager name', () => {
    const manager = new Manager('name', 'id', 'email', 'phone')

    expect(manager.getName()).toBe('name')
})

test('gets manager id', () => {
    const manager = new Manager('name', 'id', 'email', 'phone')

    expect(manager.getId()).toBe('id')
})

test('gets manager email', () => {
    const manager = new Manager('name', 'id', 'email', 'phone')

    expect(manager.getEmail()).toBe('email')
})

test('gets manager phone number', () => {
    const manager = new Manager('name', 'id', 'email', 'phone')

    expect(manager.getPhone()).toBe('phone')
})