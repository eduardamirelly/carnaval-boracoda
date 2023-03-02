import { Block } from "../../components/Block";
import { Button } from "../../components/Button";
import { blocks } from "../../utils/data";

export function Blocks() {
  return (
    <section className="px-6 md:px-32 py-24">
      <header className="flex justify-between items-center flex-wrap mb-10">
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
        {blocks.map((block) => (
          <Block 
            imgSrc="example-block.jpg" 
            title={block.title}
            description={block.description} 
            location={block.location}
          />
        ))}
      </div>
    </section>
  )
}