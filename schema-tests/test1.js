const Ajv = require('ajv')
const localize = require('ajv-i18n')
const ajv = new Ajv()

ajv.addKeyword('test', {
  macro: function (schema) {
    return {
      minLength: 10,
    }
  },
})

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
    name: { type: 'string', test: '14341' },
  },
  required: ['foo'],
  additionalProperties: false,
}

const data = { foo: 1, bar: 'abc', name: 'hah1232a' }
const valid = ajv.validate(schema, data)
if (!valid) {
  localize.zh(ajv.errors)
  console.log(ajv.errors)
}
