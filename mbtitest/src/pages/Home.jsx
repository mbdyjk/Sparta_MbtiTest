import Header from "../components/Header";
import SectionCard from "../components/SectionCard";

const Home = () => {
  return (
    <>
      <Header />
      <div className="p-8 space-y-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-black-600">
          무료 성격 테스트
        </h1>
        <p className="text-l text-center text-gray-700">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>

        {/* 768px 이하에서 grid 열을 하나,
            768px 이상에서 grid 열을 두개,
            1024px 이상에서 grid 열을 세개 갖는다. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SectionCard
            title="성격 유형 검사"
            description="자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요."
          />
          <SectionCard
            title="성격 유형 이해"
            description="다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다."
          />
          <SectionCard
            title="팀 평가"
            description="팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
