import { Button } from "./components/ui/button";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
          Chat app starter
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Dự án đã sẵn sàng cho UI hiện đại
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Tailwind, Axios, Redux Toolkit, và shadcn-style component đã được cấu
          hình để bạn bắt đầu xây dựng giao diện nhanh hơn.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Khởi tạo chat</Button>
          <Button variant="outline">Xem cấu hình</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
