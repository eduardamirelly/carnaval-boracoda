import { Button } from "../../components/Button";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[532px] bg-[#F8F8FF] flex flex-col items-center justify-center relative z-10">
      <span className="font-medium uppercase text-red-500 tracking-widest">Find your block</span>
      <h1 className="font-bold text-5xl text-black-900">
        Encontre os <span className="text-violet-500">melhores blocos</span> de carnaval de 2023
      </h1>

      <div className="absolute inset-0 w-full flex justify-between item -z-10">
        <img className="object-cover h-[330px]" src="/assets/ilustra-01.svg" />
        <img className="self-end object-cover h-[330px]" src="/assets/ilustra-02.svg" />
      </div>

      <div>
        <input type="search" name="" id="" />
        <select>
          <option value="1">1</option>
        </select>
        <Button>
          Buscar agora
        </Button>
      </div>
    </section>
  )
}