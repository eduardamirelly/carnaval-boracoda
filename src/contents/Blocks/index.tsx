import { Block } from "../../components/Block";
import { Button } from "../../components/Button";

export function Blocks() {
  return (
    <section className="px-32 py-24">
      <header className="flex justify-between items-center mb-10">
        <h2 className="font-bold text-xl">Blocos recomendados</h2>

        <div className="flex gap-1 items-center border border-gray-200 rounded p-2">
          <Button size="sm">
            Lista
          </Button>
          <Button size="sm" color="white">
            Mapa
          </Button>
        </div>
      </header>

      <div className="flex justify-between gap-8 flex-wrap">
        <Block imgSrc="example-block.jpg" title="Title example" description="description example" location="São Paulo - SP" />
        <Block imgSrc="example-block.jpg" title="Title example" description="description example" location="São Paulo - SP" />
        <Block imgSrc="example-block.jpg" title="Title example" description="description example" location="São Paulo - SP" />
        <Block imgSrc="example-block.jpg" title="Title example" description="description example" location="São Paulo - SP" />
      </div>
    </section>
  )
}