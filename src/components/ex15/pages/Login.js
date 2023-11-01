import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 200px;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: 100%;
  padding: 7px 15px;
  border-radius: 5px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  margin-top: 20px;
  font-weight: 600;
  background-color: coral;
  box-sizing: border-box;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = () => {
    console.log("로그인 버튼 클릭");
  };

  // console.log(errors?.username?.message);
  // =>옵셔널체이닝(optional chaining):
  //   중첩 객체를 에러없이 안전하게 접근할 수 있음

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          placeholder="아이디"
        />
        <ErrorMessage text={errors?.username?.message} />
        <Input
          {...register("psssword", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주세요.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.psssword?.message} />

        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};
