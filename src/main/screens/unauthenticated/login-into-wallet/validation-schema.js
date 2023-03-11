
const ValidationSchema = {
  loginSchema: function () {
    const rules = {
      phrase: {
        required: true,
      }
    }
    return rules;
  }
}

export default ValidationSchema;

