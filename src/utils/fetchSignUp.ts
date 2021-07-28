interface Props {
  email: string;
  password: string;
  mobile: string;
}

const requestOptions = {};

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

  console.log(response);
};
