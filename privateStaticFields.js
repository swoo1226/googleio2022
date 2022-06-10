class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD
  
    static publicStaticMethod() {
      ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
      return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
    }
  }
  
console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)

const test1 = new ClassWithPrivateStaticField()