export async function apiPostNoticeWrite(formData) {
    try{
        // console.log("API", formData);
        return await fetch("http://localhost:4000/notice/write", {
            // 로컬-http://localhost:4000
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