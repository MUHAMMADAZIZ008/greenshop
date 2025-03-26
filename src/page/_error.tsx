// pages/_error.tsx
import { NextPageContext } from "next";

type ErrorProps = {
  statusCode?: number;
};

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>{statusCode ? `Xato: ${statusCode}` : "Noma'lum xato"}</h1>
      <p>{statusCode === 404 ? "Sahifa topilmadi." : "Ichki server xatosi yuz berdi."}</p>
    </div>
  );
};

// Status kodni olish
ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
