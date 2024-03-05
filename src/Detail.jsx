import { useMutation, useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom"
import { apiGetNoticeDetail, apiPostNoticeDelete } from "./api";
import { timeFormat } from "./timeFormat";

export default function Detail() {
    const {id} = useParams();
    // console.log(params);
    // console.log(id);
    const {data} = useQuery(["getDtail", id], apiGetNoticeDetail);
    // console.log(data);
    // 삭제
    const navigate = useNavigate(); // 페이지 강제 이동을 위해
    const {mutate} = useMutation(apiPostNoticeDelete, {
      onSuccess: (data) => { // 성공했을때 서버에서 주는 데이터를 받는다.
        console.log(data);
        if(data?.result === true) { // 서버에서 준 데이터가 true일때
            navigate("/"); // 삭제되면 루트페이지로
        }
      }
    }); // 두번째인자는 옵션
    const handleDelete = () => {
      const ok = window.confirm("삭제하시겠습니까?");
      console.log(ok);
      if(ok) {
        // 확인을 클릭했을 때 삭제 API 요청
        mutate(id); // 요청할때 id 넘기기
      }
    }
  return (
    <div className="w-full flex justify-center py-16">
        <div className="max-w-5xl w-full">
            <div>자세히보기</div>
            <div>{data?.data?.title}</div>
            <div>{data?.data?.writer}</div>
            {
              data?.data?.updatedAt &&
              <div>수정시간 : {timeFormat(data?.data?.updatedAt)}</div>
            }
            <div>{data?.data?.description}</div>
            <div className="flex gap-4 text-white">
              {/* data를 state값으로 update page에 넘기기 */}
              <Link to={`/${id}/update`} state={data?.data}>
                <button className="bg-green-500 px-4 py-2">수정</button>
              </Link>
              <button onClick={handleDelete} className="bg-red-500 px-4 py-2">삭제</button>
            </div>
        </div>
    </div>
  )
}