export async function apiPostNoticeWrite(formData) {
    try{
        // console.log("API", formData);
        return await fetch("https://server-koinonia.koyeb.app/notice/write", {
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