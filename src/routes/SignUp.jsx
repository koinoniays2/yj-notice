import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import Socials from "../components/Socials";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostRegister } from "../api";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // formState : 에러가 났을때 저장되는 공간느낌
  } = useForm();
  const { mutate } = useMutation(apiPostRegister);
  const onValid = (formData) => {
    // console.log(formData);
    mutate(formData);
  };

  // console.log(errors);
  return (
    <div className="w-full flex justify-center py-16">
      <div className="max-w-screen-sm w-full flex flex-col gap-8 px-4">
        {/* 회원가입 타이틀 */}
        <div className="flex flex-col gap-2">
          <div className="w-full text-center text-2xl font-bold">회원가입</div>
          <div className="w-full text-center text-sm text-neutral-600">
            이미 회원이신가요? <Link to="/users/login">로그인</Link>
          </div>
        </div>
        {/* 회원가입 Form 영역 */}
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4">
        {/* submit타입의 버튼을 누르면 onSubmit이 걸린다. */}
          {/* 아이디 */}
          <InputBox
            register={register}
            name="username"
            type="text"
            placeholder="아이디"
            errorOption={{
              required: "아이디는 필수 입력사항입니다.",
              minLength: {
                value: 2,
                message: "아이디는 최소 2글자 이상이어야 합니다.",
              },
            }}
            errors={errors?.username?.message}
          />
          {/* 이메일 */}
          <InputBox
            register={register}
            name="email"
            type="email"
            placeholder="이메일"
            errorOption={{
              required: "이메일은 필수 입력사항입니다.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "이메일 형식을 지켜주세요."
              }
            }}
            errors={errors?.email?.message}
          />
          {/* 비밀번호 */}
          <InputBox
            register={register}
            name="password"
            type="password"
            placeholder="패스워드"
            errorOption={{
              required: "패스워드는 필수 입력사항입니다.",
              minLength: {
                value: 4,
                message: "아이디는 최소 4글자 이상이어야 합니다."
              }
            }}
            errors={errors?.password?.message}
          />
          {/* 비밀번호 확인 */}
          <InputBox
            register={register}
            name="password2"
            type="password"
            placeholder="패스워드 확인"
            errorOption={{
              required: "패스워드 확인은 필수 입력사항입니다.",
              validate: (value, form) => {
                return (
                  value === form.password || "패스워드 확인은 패스워드와 같아야 합니다."
                );
              }
            }}
            errors={errors?.password2?.message}
          />
          <Button type="submit" text="회원가입" />
        </form>
        {/* 소셜 로그인 */}
        <Socials />
      </div>
    </div>
  );
}
