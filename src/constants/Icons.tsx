import React from "react";

export default function Icons(name: string) {
  switch (name) {
    case "Medium":
      return <Medium />;
    case "DevTo":
      return <DevTo />;
    case "HashNode":
      return <HashNode />;
    case "Website":
      return <Website />;
    case "Linkedin":
      return <Linkedin />;
    case "Github":
      return <Github />;
    case "Twitter":
      return <Twitter />;
    case "Instagram":
      return <Instagram />;
    default:
      return null;
  }
}

export function Instagram({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
      ></path>
    </svg>
  );
}

export function Twitter({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
      ></path>
    </svg>
  );
}

export function Github({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"
      ></path>
    </svg>
  );
}

export function Linkedin({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.43 1.43 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z"
      ></path>
    </svg>
  );
}

export function Website({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.049.276A7.006 7.006 0 0 0 .028 6.375h3.2a15.763 15.763 0 0 1 1.82-6.1ZM3.228 7.625h-3.2a7.006 7.006 0 0 0 5.02 6.1a15.763 15.763 0 0 1-1.82-6.1m3.424 6.367a14.477 14.477 0 0 1-2.17-6.367h5.035a14.477 14.477 0 0 1-2.17 6.367a7.163 7.163 0 0 1-.695 0m2.3-.268a7.006 7.006 0 0 0 5.02-6.099h-3.2a15.763 15.763 0 0 1-1.82 6.1Zm1.82-7.349h3.2a7.006 7.006 0 0 0-5.02-6.1a15.762 15.762 0 0 1 1.82 6.1M6.652.008a7.116 7.116 0 0 1 .696 0a14.477 14.477 0 0 1 2.169 6.367H4.483c.217-2.277.963-4.46 2.17-6.367Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function HashNode({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="m22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962M12 15.953a3.953 3.953 0 1 1 0-7.906a3.953 3.953 0 0 1 0 7.906"
      ></path>
    </svg>
  );
}

export function DevTo({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className={className}
    >
      <g fill="none">
        <rect width={256} height={256} fill="#fff" rx={60}></rect>
        <path
          fill="#000"
          fillRule="evenodd"
          d="M87.375 147.217c0 10.219-6.295 25.701-26.219 25.669H36V83h25.687c19.215 0 25.677 15.46 25.683 25.685zM62.582 99.819c2.104 0 4.213.788 6.316 2.363c2.098 1.575 3.156 3.944 3.16 7.095v37.837c0 3.156-1.05 5.519-3.154 7.095c-2.104 1.575-4.213 2.363-6.317 2.363h-9.46V99.819z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#000"
          d="M141.959 99.053h-28.886v20.871h17.658v16.064h-17.658v20.866h28.892v16.064h-33.712c-6.05.158-11.081-4.634-11.233-10.696V94.256c-.146-6.057 4.641-11.088 10.686-11.24h34.259zm56.19 62.631c-7.157 16.705-19.979 13.38-25.72 0l-20.89-78.662h17.658l16.108 61.778l16.031-61.778H219z"
        ></path>
      </g>
    </svg>
  );
}

export function Medium({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M7.57 17.576a5.57 5.57 0 1 0 0-11.141a5.57 5.57 0 0 0 0 11.141m8.944-.433c1.512 0 2.738-2.3 2.738-5.138c0-2.837-1.226-5.137-2.738-5.137s-2.738 2.3-2.738 5.137c0 2.838 1.226 5.138 2.738 5.138m4.408-.539c.59 0 1.067-2.06 1.067-4.599c0-2.54-.478-4.598-1.067-4.598c-.59 0-1.068 2.059-1.068 4.598c0 2.54.478 4.599 1.068 4.599"
      ></path>
    </svg>
  );
}
