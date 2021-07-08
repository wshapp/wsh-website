export const WshLogo: React.FC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 708 1002"
    {...props}
  >
    <image
      id="logo-design"
      width="708"
      height="1002"
      xlinkHref="data:img/png;base64,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"
    />
  </svg>
);
