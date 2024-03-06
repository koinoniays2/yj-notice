export default function Button({type, text}) {
  return (
    <button type={type} className="bg-blue-300 font-semibold text-white h-10 rounded-md hover:bg-blue-400 transition duration-300">
        {text}
    </button>
  )
}