import MaxWidth from "@/components/layout/MaxWidth";

export default function Home() {
  return (
    <section className="w-full h-fullScreenExceptHeader relative">
      <MaxWidth>
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-9xl font-extrabold text-mainColor mb-10">
            Insight
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
