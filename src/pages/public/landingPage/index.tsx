import { Button } from "../../../components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-0% from-border to-blue-700 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4">
        Bem-vindo à Nossa Landing Page
      </h1>
      <p className="text-xl mb-8">
        Uma página incrível criada com Tailwind CSS e shadcn/ui
      </p>
      <Button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
        Começar Agora
      </Button>
    </div>
  );
};

export default LandingPage;
