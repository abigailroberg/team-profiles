const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee.js')

test('creates a new employee object', () => {
    const employee = new Employee('name', 'id', 'email')

    expect(employee.name).toBe('name')
    expect(employee.id).toBe('id')
    expect(employee.email).toBe('email')
})

test('gets employee info as an object', () => {
    const employee = new Employee('name', 'id', 'email')
  
    expect(employee.getRole()).toHaveProperty('name');
    expect(employee.getRole()).toHaveProperty('id');
    expect(employee.getRole()).toHaveProperty('email')
})

test('gets employee name', () => {
    const employee = new Employee('name', 'id', 'email')

    expect(employee.getName()).toBe('name')
})

test('gets employee id', () => {
    const employee = new Employee('name', 'id', 'email')

    expect(employee.getId()).toBe('id')
})

test('gets employee email', () => {
    const employee = new Employee('name', 'id', 'email')

    expect(employee.getEmail()).toBe('email')
})