export default function InputBox({name, type, placeholder}) {
  return (
    <div className="flex flex-col gap-1 relative">
      <input type={type} placeholder=" " className="input-custom peer" />
      <label className="label-custom">{placeholder}</label>
      <span className="text-red-500 text-sm">error</span>
    </div>
  );
}
