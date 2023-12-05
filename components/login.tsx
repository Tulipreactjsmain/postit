import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export type LoginFormInputs = {
  email: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormInputs>;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { data: Session } = useSession();
  console.log(Session);

  const onSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("resss", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
