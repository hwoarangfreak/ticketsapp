export const required = value => value ? undefined : 'Required';

export const numbers = value => value && !/^\d+$/.test(value) ? 'Must be a number' : null;

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined