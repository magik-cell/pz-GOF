export class House {
  walls?: string;
  roof?: string;
  windows?: number;
  door?: string;
  garage?: boolean;
  swimmingPool?: boolean;

  describe(): void {
    console.log("🏠 Структура будинку:");
    if (this.walls) console.log(`   - Стіни: ${this.walls}`);
    if (this.roof) console.log(`   - Дах: ${this.roof}`);
    if (this.windows) console.log(`   - Вікна: ${this.windows}`);
    if (this.door) console.log(`   - Двері: ${this.door}`);
    if (this.garage) console.log(`   - Гараж: ✓`);
    if (this.swimmingPool) console.log(`   - Басейн: ✓`);
  }
}