import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostNoticeWrite } from "./api";
import { useNavigate } from "react-router-dom";

export default function Write() {
  // 강제이동
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const { mutate, isLoading } = useMutation(apiPostNoticeWrite, { // post api요청
    onSuccess: (data) => {  // 서버로 데이터를 보내고, 서버에서 데이터를 받는것을 성공하면 실행되는 함수
      console.log(data);
      reset(); // 값 초기화(useForm훅)
      navigate("/"); // 글쓰기 완료하면 강제이동
    }
  });
  // useMutation의 인자 : 1.쿼리키 없이 바로 함수, 2.성공여부 옵션
  const onSubmit = (formData) => {
      // console.log(formData); // handleSubmit에 콜백함수로 넣으면 input에 입력한 값이 객체로 담긴다.
      mutate(formData);
    }
  return (
    <section className="w-full flex justify-center py-16">
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-7xl flex flex-col space-y-4">
        <input {...register("title", {
          required: "제목은 필수 입력요소입니다." //required는 해당 필드가 비어 있으면 유효하지 않다는 것을 나타낸다.
        })} 
        className="py-1 px-2 border" type="text" placeholder="title" />
        {errors?.title?.message && ( // 필드의 값이 비어있을 경우, 해당 오류 메시지 발생
          <span className="text-red-500 text-sm px-2">{errors?.title?.message}</span>
        )}
        <input {...register("writer", {
          required: "작성자는 필수 입력요소입니다."
        })} 
        className="py-1 px-2 border" type="text" placeholder="writer" />
        {errors?.writer?.message && (
          <span className="text-red-500 text-sm px-2">{errors?.writer?.message}</span>
        )}
        <textarea {...register("description", {
          required: "내용은 필수 입력요소입니다.",
          minLength: {
            value: 5,
            message: "내용은 최소 5글자 이상이어야 합니다."
          }
        })}
        className="py-1 px-2 border" type="text" placeholder="description" rows="10"></textarea>
        {errors?.description?.message && (
          <span className="text-red-500 text-sm px-2">{errors?.description?.message}</span>
        )}
        <button disabled={isLoading} type="submit" className="py-1 bg-teal-800 text-white">글쓰기</button>
      </form>
    </section>
  );
}