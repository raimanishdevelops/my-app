type Form = {
  id: number;            // ① unique identifier
  email: string;         // ② user email
  age: number;           // ③ user age
  name: string;      // ④ role flag
};

const user: User = {
  id: 201,
  email: "test@mail.com",
  age: 25,
  name: "John Doe"
};
console.log(user.id);