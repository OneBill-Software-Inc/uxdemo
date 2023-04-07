export default function Input({ Name }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {Name}
      </label>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary/50 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}
