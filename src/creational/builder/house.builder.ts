import { House } from "./house.model";

export class HouseBuilder {
  private house: House = new House();

  buildWalls(material: string): HouseBuilder {
    this.house.walls = material;
    console.log(`✓ Збудовані стіни з ${material}`);
    return this;
  }

  buildRoof(type: string): HouseBuilder {
    this.house.roof = type;
    console.log(`✓ Збудований дах: ${type}`);
    return this;
  }

  buildWindows(count: number): HouseBuilder {
    this.house.windows = count;
    console.log(`✓ Встановлено вікон: ${count}`);
    return this;
  }

  buildDoor(type: string): HouseBuilder {
    this.house.door = type;
    console.log(`✓ Встановлені двері: ${type}`);
    return this;
  }

  addGarage(): HouseBuilder {
    this.house.garage = true;
    console.log(`✓ Додано гараж`);
    return this;
  }

  addSwimmingPool(): HouseBuilder {
    this.house.swimmingPool = true;
    console.log(`✓ Додано басейн`);
    return this;
  }

  build(): House {
    const finishedHouse = this.house;
    // Скидаємо білдер для можливості створення нового будинку
    this.house = new House(); 
    console.log("\n🔨 Будинок готовий!\n");
    return finishedHouse;
  }
}