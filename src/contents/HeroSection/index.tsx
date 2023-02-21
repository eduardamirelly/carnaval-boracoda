export function HeroSection() {
  return (
    <section id="hero" className="min-h-[532px] bg-[#F8F8FF]">
      <span className="font-medium uppercase text-red-500 tracking-widest">Find your block</span>
      <h1 className="font-bold text-5xl text-black-900">
        Encontre os <span className="text-violet-500">melhores blocos</span> de carnaval de 2023
      </h1>

      <div>
        <input type="search" name="" id="" />
        <select>
          <option value="1">1</option>
        </select>
        <button>Buscar agora</button>
      </div>
    </section>
  )
}