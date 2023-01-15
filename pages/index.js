import AdminLayout from "@/components/admin/AdminLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="Admin" content="Admin Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Link href={"/admin"}>
        <h1>Admin Dashboard</h1>
      </Link>
    </>
  );
}
