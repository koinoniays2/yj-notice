import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostNoticeWrite } from "./api";

function App() {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation(apiPostNoticeWrite); // post api요청
  const onSubmit = (formData) => {
      // console.log(formData); // handleSubmit에 콜백함수로 넣으면 input에 입력한 값이 객체로 담긴다.
      mutate(formData);
    }
  return (
    <section className="w-full flex justify-center py-16">
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-7xl flex flex-col space-y-4">
        <input {...register("title")} 
        className="py-1 px-2 border" type="text" placeholder="title" />
        <input {...register("writer")} 
        className="py-1 px-2 border" type="text" placeholder="writer" />
        <textarea {...register("description")}
        className="py-1 px-2 border" type="text" placeholder="description" rows="10"></textarea>
        <button type="submit" className="py-1 bg-teal-800 text-white">글쓰기</button>
      </form>
    </section>
  );
}

export default App;
