import { mergeWith, isArray, isObject } from 'utils';
import {
  InputValidatorInterface,
  FormValuesInterface,
  InputDescriptorInterface,
  FormValueType,
  FormErrors,
} from 'types';

const mergeArrays = (objValue: any, srcValue: any) => {
  if (!objValue) {
    return;
  }

  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

class FormService {
  private inputs: Map<string, InputDescriptorInterface> = new Map();

  registerInput(input: InputDescriptorInterface) {
    this.inputs.set(input.id, input);
  }

  updateInput(input: InputDescriptorInterface) {
    this.inputs.set(input.id, input);
  }

  unregisterInputById(id: string) {
    this.inputs.delete(id);
  }

  getInputs() {
    return this.inputs;
  }

  validateInputs() {
    let isValid = true;

    this.inputs.forEach((input) => {
      const errors = this.getErrorsFromInput(input);

      if (errors.length) {
        isValid = false;
      }
    });

    return isValid;
  }

  getErrorsFromInput({
    label,
    name,
    value,
    required,
    requiredMessage = null,
    validators = [],
  }: InputDescriptorInterface): string[] {
    let errors: string[] = [];

    if (required && !value) {
      errors = [requiredMessage || `Input ${label || name} is required`];
    }

    validators.forEach((validator) => {
      if (!validator.validate(value, {})) {
        errors = [...errors, validator.errorMessage];
      }
    });

    return errors;
  }

  getErrors() {
    const errors: FormErrors = {};

    this.inputs.forEach((input) => {
      const inputErrors = this.getErrorsFromInput(input);

      if (inputErrors.length > 0) {
        let rootName = input.name;
        try {
          rootName = this.getInputRootName(input.name);
        } catch (e) {}

        errors[rootName] = inputErrors;
      }
    });

    return errors;
  }

  getValuesFromInputs(): FormValuesInterface {
    let values: FormValuesInterface = {};

    this.inputs.forEach((input) => {
      values = mergeWith(values, this.getInputValue(input), mergeArrays);
    });

    return values;
  }

  getInputValue(input: InputDescriptorInterface): FormValuesInterface {
    const regex = /\[(.*?)\]/g;
    const match = input.name.match(regex);

    if (!match || match.length === 0) {
      return { [input.name]: input.value };
    }

    const rootName = this.getInputRootName(input.name);
    const value = {
      [rootName]: this.getValueByMatch(match, input, match.length - 1, null),
    };

    return value;
  }

  getInputRootName(name: string) {
    const regex = /^(.+?)\[/;
    const match = regex.exec(name);

    if (!match) {
      throw new Error('Input name needs a key in front of array or object');
    }

    return match[1];
  }

  getValueByMatch(
    match: string[],
    input: InputDescriptorInterface,
    index: number,
    currentValue: any,
  ): FormValueType {
    if (index < 0) {
      return currentValue;
    }

    const regex = /\[(.*?)\]/;
    const matchString = match[index];
    const isLastKey = match.length - 1 === index;
    const keyMatch = regex.exec(matchString);
    const key = keyMatch && keyMatch[1] || null;
    const nextIndex = index - 1;

    if (isLastKey && key) {
      return this.getValueByMatch(match, input, nextIndex, { [key]: input.value });
    }

    if (isLastKey && !key) {
      return this.getValueByMatch(match, input, nextIndex, [input.value]);
    }

    if (key) {
      return this.getValueByMatch(match, input, nextIndex, { [key]: currentValue });
    }

    return this.getValueByMatch(match, input, nextIndex, [currentValue]);
  }
}

export default FormService;
