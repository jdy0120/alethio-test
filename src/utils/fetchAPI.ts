interface Props {
  email: string;
  password: string;
  mobile: string;
}

export const fetchSignUp = async ({ email, password, mobile }: Props) => {
  const response = await fetch(`http://106.10.53.116:8099/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      mobile: mobile,
    }),
  });

  const token = await response.json();
  console.log(token);
  return token;
};

export const fetchLogIn = async () => {};

export const fetchOrder = async () => {};

export const fetchOrderDetail = async () => {};
