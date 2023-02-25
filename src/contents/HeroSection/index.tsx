import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../../components/Button";
import { SelectInput } from "../../components/SelectInput";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[532px] bg-gray-300 flex flex-col items-center justify-center gap-10 relative z-10">
      <header className="flex flex-col items-center gap-4 max-w-[645px] text-center">
        <span className="font-medium uppercase text-red-500 tracking-widest">Find your block</span>
        <h1 className="font-bold text-5xl text-gray-900">
          Encontre os <span className="text-violet-500">melhores blocos</span> de carnaval de 2023
        </h1>
      </header>

      <div className="absolute inset-0 w-full flex justify-between item -z-10">
        <img className="object-cover h-[330px]" src="/assets/ilustra-01.svg" />
        <img className="self-end object-cover h-[330px]" src="/assets/ilustra-02.svg" />
      </div>

      <div className="flex items-center justify-between gap-6 bg-white w-4/6 p-10 rounded-lg border border-gray-200">
        <div className="bg-gray-300 flex-1 flex gap-1 px-3 py-3 rounded">
          <MagnifyingGlass size={24} className="text-red-500" />
          <input className="w-full bg-gray-300 outline-none text-sm" type="search" name="" id="" />
        </div>
        <SelectInput />
        <Button>
          Buscar agora
        </Button>
      </div>
    </section>
  )
}