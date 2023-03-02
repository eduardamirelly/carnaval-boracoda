import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../../components/Button";
import { SelectInput } from "../../components/SelectInput";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[532px] w-full bg-gray-300 flex flex-col items-center justify-center gap-10 relative z-10">
      <header className="flex flex-col items-center gap-4 max-w-[645px] text-center px-2">
        <span className="font-medium uppercase text-red-500 tracking-widest">Find your block</span>
        <h1 className="font-bold text-2xl md:text-5xl text-gray-900">
          Encontre os <span className="text-violet-500">melhores blocos</span> de carnaval de 2023
        </h1>
      </header>

      <div className="absolute inset-0 hidden lg:flex justify-between w-full -z-10">
        <img className="object-cover max-h-[330px]" src="/assets/ilustra-01.svg" />
        <img className="self-end object-cover max-h-[330px]" src="/assets/ilustra-02.svg" />
      </div>

      <div className="flex items-center justify-between gap-6 flex-wrap md:flex-nowrap bg-white w-11/12 lg:w-4/6 p-6 md:p-10 rounded-lg border border-gray-200">
        <div className="min-w-[200px] bg-gray-300 flex-1 flex gap-1 p-3 rounded">
          <MagnifyingGlass size={24} className="text-red-500" />
          <input className="w-full bg-gray-300 outline-none text-sm" type="search" name="" id="" />
        </div>
        <SelectInput />
        <Button className="w-full lg:w-auto">
          Buscar agora
        </Button>
      </div>
    </section>
  )
}