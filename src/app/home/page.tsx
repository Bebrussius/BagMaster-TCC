import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-neutral-300 flex flex-col items-center h-screen">
    <header className="bg-slate-900 w-full h-20 flex justify-center items-center">
      <div className="w-4/5 h-20 flex items-center bg-slate-900">
        <Image src="/BagMaster.png" alt="" width={144} height={36} />
      </div>
    </header>

    <h1>Meu piru é gigante, pegue nele imediatamentee</h1>
    </div>
  );
}


