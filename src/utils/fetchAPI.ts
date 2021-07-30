interface LoginProps {
  email: string;
  password: string;
  mobile?: string;
}

interface OrderProps {
  page?: number;
  id?: string;
}

export const fetchSignUp = async ({ email, password, mobile }: LoginProps) => {
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
  return token;
};

export const fetchLogIn = async ({ email, password }: LoginProps) => {
  try {
    const response = await fetch(`http://106.10.53.116:8099/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const token = await response.json();
    return token;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchOrder = async ({ page }: OrderProps) => {
  const response = await fetch(`http://106.10.53.116:8099/order?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const items = await response.json();
  return items;
};

export const fetchOrderDetail = async ({ id }: OrderProps) => {
  const response = await fetch(`http://106.10.53.116:8099/order/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const itemDetail = await response.json();
  return itemDetail;
};
