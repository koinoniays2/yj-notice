import UseUser from "../components/UseUser"

export default function Profile() {
    const data = UseUser();
    console.log(data);
  return (
    <div className="w-full flex justify-center py-16">
        <div className="flex flex-col gap-5">
            <div>username: {data?.user.username}</div>
            <div>email: {data?.user.email}</div>
            <div className="size-10 rounded-full overflow-hidden">
                <img src={data?.user.profileImage} alt="profile_image" />
            </div>
        </div>
    </div>
  )
}