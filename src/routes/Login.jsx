import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Socials from "../components/Socials";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { apiPostLogin, apiPostLogout } from "../api";
import UseUser from "../components/UseUser";

export default function LogIn() {
  const queryClient = useQueryClient(); 

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutate } = useMutation(apiPostLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUser"); // 로그인 새로고침 하지않고 바로되게
    }
  });
  const onValid = (formData) => {
    mutate(formData);
  };

  // 로그인 성공 시
  const data = UseUser(); // 로그인 성공 api 요청 쿼리
  // console.log(data);
  
  // 로그아웃
  const handleLogout = async () => {
    await apiPostLogout();
    queryClient.invalidateQueries("getUser"); // UseUser에 있는 쿼리 키
  }


  return (
    <div className="w-full flex justify-center py-16">
      {data?.isLogin === true ? (
        <div className="flex flex-col gap-4">
          <span>프로필 페이지</span>
          <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500">로그아웃</button>
        </div>
      ) : (
        <div className="max-w-screen-sm w-full flex flex-col gap-8 px-4">
          {/* 로그인 타이틀 */}
          <div className="flex flex-col gap-2">
            <div className="w-full text-center text-2xl font-bold">로그인</div>
            <div className="w-full text-center text-sm text-neutral-600">
              회원이 아니신가요? <Link to="/users/signup">회원가입</Link>
            </div>
          </div>
          {/* 로그인 form 영역 */}
          <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4">
            {/* 아이디 */}
            <InputBox
              register={register}
              name="username"
              type="text"
              placeholder="아이디"
              errorOption={{
                required: "아이디는 필수 입력사항입니다.",
              }}
              errors={errors?.username?.message}
            />
            {/* 비밀번호 */}
            <InputBox
              register={register}
              name="password"
              type="password"
              placeholder="패스워드"
              errorOption={{
                required: "패스워드 필수 입력사항입니다.",
              }}
              errors={errors?.password?.message}
            />
            {/* 버튼 */}
            <Button type="submit" text="로그인" />
          </form>
          {/* 소셜로그인 */}
          <Socials />
        </div>
      )}
    </div>
  );
}