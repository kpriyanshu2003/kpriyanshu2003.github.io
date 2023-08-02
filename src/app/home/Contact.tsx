export default function Contact() {
  return (
    <div className="text-white border border-[#212a36] p-6 rounded-lg w-full">
      <div className="flex gap-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-slate-100/10 stroke-slate-500"
          />
          <path
            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className="stroke-slate-500"
          />
        </svg>
        <span>Wanna dicuss something?</span>
      </div>
      <div className="text-gray-400 text-xs mt-4">
        I will get back to you as soon as possible.
      </div>
      <div className="flex items-center gap-3 w-full mt-6">
        <input
          type="text"
          name=""
          id=""
          placeholder="Email Address"
          className="min-w-0 flex-auto text-white appearance-none rounded-md border px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-slate-800/5 focus:outline-none focus:ring-4 border-slate-700 bg-slate-700/[0.15] placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-300/10 sm:text-sm"
        />
        <button className="bg-[#475569] py-[calc(theme(spacing.2)-1px)] px-3 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
}
