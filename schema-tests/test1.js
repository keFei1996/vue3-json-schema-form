const Ajv = require('ajv')
const ajv = new Ajv()

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
}

const data = { foo: '1', bar: 'abc' }
const valid = ajv.validate(schema, data)
if (!valid) console.log(ajv.errors)
