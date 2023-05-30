import Head from "next/head";
import { Dashboard } from "../components/Dashboard-Components/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Sardeli</title>
      </Head>
      <Dashboard />
    </>
  );
}
