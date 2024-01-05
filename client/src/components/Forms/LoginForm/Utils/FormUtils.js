import { useAuth } from "../../../../contexts/AuthContext";

export const handleFormSubmit = async (event, onSubmitProps) => {
  event.preventDefault(); // Prevents the default form submission behavior

  const formData = new FormData(onSubmitProps); // Access Form Values From onSubmitProps

  const customerFormValues = getEmailandPassword(formData); //Extract Email and Password From Form Values

  const result = await SignUp(customerFormValues); //Parse Email and Password to FireBaseAuth Method
  return result;
};

const getEmailandPassword = (formData) => {
  const values = {};
  formData.forEach((value, key) => {
    values[key] = value;
  });
  return values;
};

const SignUp = async (customerFormValues) => {
  const { signup } = useAuth();
  try {
    const result = await signup(values.email, values.password);
    return result;
  } catch (error) {
    console.error(`this is the returned error: ${error.message}`);
  }
};
