const BASE_URL = process.env.REACT_APP_BASE_URL;

// 글 디테일
export async function apiGetNoticeDetail(props) {
    const id = props.queryKey[1];
    try{
        return await fetch(`${BASE_URL}/notice/${id}`).then(res => res.json());
    }catch(error){
        console.log(error);
    }
}


// 글 목록 불러오기
export async function apiGetNoticeList() {
    try {
       return await fetch(`${BASE_URL}/notice`).then((res) => res.json());
    }catch(e){
        console.log(e);
    }
    return
}

// 글작성
export async function apiPostNoticeWrite(formData) {
    try{
        // console.log("API", formData);
        return await fetch(`${BASE_URL}/notice/write`, {
            // 로컬서버접속-http://localhost:4000
            method: "POST",
            headers: {
                "Content-Type" : "application/json" // 서버에 어떤 데이터로 요청할것인지
            },
            body: JSON.stringify(formData) // 객체 json화
        }).then(res => res.json());
    } catch(error) {
        console.log(error);
    }
}