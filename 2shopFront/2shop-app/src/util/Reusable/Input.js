import classnames from "classnames";

export default function Input({ name, type }) {
  return (
    <>
      <label className="block mb-2 text-primary" for="password">
        {name}
      </label>
      <input
        className="w-full p-2 mb-6 text-primary border-b-2 border-primary bg-light outline-none focus:bg-gray-300"
        type={type}
        name={name}
        formControlName={name}
      />
    </>
  );
}
