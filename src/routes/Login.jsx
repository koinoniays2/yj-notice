import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Socials from "../components/Socials";

export default function Login() {
  return (
    <div className="w-full flex justify-center py-32">
      <div className="max-w-screen-sm w-full flex flex-col gap-8">
        {/* 로그인 타이틀 */}
        <div className="flex flex-col gap-2">
          <div className="w-full text-center text-2xl font-bold">로그인</div>
          <div className="w-full text-center text-sm text-neutral-600">회원이 아니신가요? <Link to="/users/signup">회원가입</Link></div>
          {/* 로그인 form 영역 */}
          <div className="flex flex-col gap-4">
            {/* 아이디 */}
            <InputBox name="username" type="text" placeholder="아이디"/>
            {/* 비밀번호 */}
            <InputBox name="password" type="password" placeholder="비밀번호"/>
            <Button type="submit" text="로그인"/>
          </div>
          {/* 소셜로그인 */}
          <Socials />
        </div>
      </div>
    </div>
  )
}