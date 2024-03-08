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

// 업데이트
export async function apiPostNoticeUpdate(props) {
    const { formData, id } = props;
    console.log("api", formData, id);
    try {
      return await fetch(`${BASE_URL}/notice/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());
    } catch (error) {
      console.log(error);
    }
  }
  // 삭제
  export async function apiPostNoticeDelete(id) {
    console.log("id : ", id);
    try {
        return await fetch(`${BASE_URL}/notice/${id}/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    } catch(error) {
        console.log(error);
    }
  }
  // 회원가입 하기
  export async function apiPostRegister(formData) {
    console.log(formData);
    try{
        return await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData)
        }).then((res) => res.json()); // 값을 받아오면 json형식으로
    }catch(error) {
        console.log(error);
    }
  }