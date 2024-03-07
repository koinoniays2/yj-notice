export default function Socials() {
  return (
    <div className="flex flex-col gap-8">
      {/* 구분선 */}
      <div className="w-full h-px bg-neutral-300" />
      {/* 소셜로그인 버튼 */}
      <div className="w-full flex flex-col gap-4">
        {/* 카카오 버튼 */}
        <button className="h-10 w-full rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300 font-semibold">
          카카오 로그인
        </button>
        {/* 구글 버튼 */}
        <button className="h-10 w-full rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 font-semibold">
          구글 로그인
        </button>
      </div>
    </div>
  );
}
