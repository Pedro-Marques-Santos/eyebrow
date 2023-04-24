import Head from "next/head";
import { Dashboard } from "../components/Dashboard-Components/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeniffer Sardeli</title>
      </Head>
      <Dashboard />
    </>
  );
}
