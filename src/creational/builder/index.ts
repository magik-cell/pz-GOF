import { HouseBuilder } from "./house.builder";

export function demonstrateBuilder(): void {
  console.log("\n=== Builder Pattern ===\n");

  console.log("📍 Розташування: Одноповерховий дім\n");
  const simpleHouse = new HouseBuilder()
    .buildWalls("цегла")
    .buildRoof("черепиця")
    .buildWindows(6)
    .buildDoor("дерев'яні")
    .build();
  simpleHouse.describe();

  console.log(
    "\n✅ Builder дозволяє поетапно будувати складні об'єкти з різними комбінаціями параметрів\n"
  );
  const luxuryHouse = new HouseBuilder()
    .buildWalls("природний камінь")
    .buildRoof("мідь")
    .buildWindows(20)
    .buildDoor("панорамні вкрай сучасні")
    .addGarage()
    .addSwimmingPool()
    .build();
  luxuryHouse.describe();
}

// Виклик для запуску через npm run builder
demonstrateBuilder();